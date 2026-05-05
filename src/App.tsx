import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import gql from "graphql-tag";

import { useNotificationProvider } from "@refinedev/antd";
import { Authenticated, ErrorComponent, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import routerProvider, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import type { AuthProvider } from "@refinedev/core";
import { App as AntdApp, ConfigProvider } from "antd";

import { Layout } from "@/components";
import { resources } from "@/config/resources";
import {
  AttendanceCreatePage,
  AttendanceListPage,
  DashboardPage,
  DedicationsCreatePage,
  DedicationsListPage,
  IgihandeCreatePage,
  IgihandeEditPage,
  IgihandeListPage,
  IgihandeShowPage,
  LoginPage,
  MembersCreatePage,
  MembersEditPage,
  MembersListPage,
  MembersShowPage,
  TasksCreatePage,
  TasksEditPage,
  TasksListPage,
} from "@/routes";

import "@ant-design/v5-patch-for-react-19";
import "@refinedev/antd/dist/reset.css";

import { useI18nProvider } from "@/providers/i18n-provider";
import { accessControlProvider } from "@/providers/accessControlProvider";

import { useAuth, useUser } from "@clerk/react";
import { useEffect } from "react";
import { API_URL, dataProvider } from "@/providers";

const App = () => {
  const { isSignedIn, signOut } = useAuth();
  const { user } = useUser();
  const i18nProvider = useI18nProvider();

  // Global user sync
  useEffect(() => {
    if (isSignedIn && user) {
      const syncUser = async () => {
        try {
          const variables = {
            clerkId: user.id,
            email: user.primaryEmailAddress?.emailAddress || "",
            name: user.fullName || ""
          };
          console.log("DEBUG: Syncing user with variables:", variables);
          const result = await dataProvider.custom({
            url: API_URL,
            method: "post",
            headers: {
              "x-clerk-user-id": user.id
            },
            meta: {
              operation: "SyncUser",
              variables,
              gqlMutation: gql`
                mutation SyncUser($clerkId: String!, $email: String!, $name: String) {
                  syncUser(clerkId: $clerkId, email: $email, name: $name) {
                    id
                  }
                }
              `
            }
          });
          console.log("User sync successful:", result);
        } catch (error) {
          console.error("User sync failed:", error);
        }
      };
      syncUser();
    }
  }, [isSignedIn, user]);

  const authProvider: AuthProvider = {
    login: async () => {
      return { success: true, redirectTo: "/" };
    },
    logout: async () => {
      await signOut();
      return { success: true, redirectTo: "/login" };
    },
    onError: async (error) => {
      return { error };
    },
    check: async () => {
      if (isSignedIn) {
        return { authenticated: true };
      }
      return { authenticated: false, redirectTo: "/login" };
    },
    getIdentity: async () => {
      if (!user) return null;

      try {
        const { data } = await dataProvider.custom({
          url: API_URL,
          method: "post",
          headers: {
            "x-clerk-user-id": user.id
          },
          meta: {
            operation: "Me",
            gqlQuery: gql`
              query Me {
                me {
                  id
                  name
                  email
                  role
                }
              }
            `
          }
        });
        return data.me;
      } catch (error) {
        return {
          id: user.id,
          name: user.fullName,
          email: user.primaryEmailAddress?.emailAddress,
        };
      }
    },
  };

  return (
    <BrowserRouter>
      <AntdApp>
        <DevtoolsProvider>
          <Refine
            routerProvider={routerProvider}
            dataProvider={dataProvider}
            notificationProvider={useNotificationProvider}
            authProvider={authProvider}
            i18nProvider={i18nProvider}
            accessControlProvider={accessControlProvider}
            resources={resources}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
              liveMode: "auto",
            }}
          >
            <Routes>
              <Route
                element={
                  <Authenticated
                    key="authenticated-layout"
                    fallback={<CatchAllNavigate to="/login" />}
                  >
                    <Layout>
                      <Outlet />
                    </Layout>
                  </Authenticated>
                }
              >
                <Route index element={<DashboardPage />} />

                <Route path="/members">
                  <Route index element={<MembersListPage />} />
                  <Route path="new" element={<MembersCreatePage />} />
                  <Route path="edit/:id" element={<MembersEditPage />} />
                  <Route path=":id" element={<MembersShowPage />} />
                </Route>

                <Route path="/igihande">
                  <Route index element={<IgihandeListPage />} />
                  <Route path="new" element={<IgihandeCreatePage />} />
                  <Route path="edit/:id" element={<IgihandeEditPage />} />
                  <Route path=":id" element={<IgihandeShowPage />} />
                </Route>

                <Route path="/attendance">
                  <Route index element={<AttendanceListPage />} />
                  <Route path="new" element={<AttendanceCreatePage />} />
                </Route>

                <Route path="/dedications">
                  <Route index element={<DedicationsListPage />} />
                  <Route path="new" element={<DedicationsCreatePage />} />
                </Route>

                <Route
                  path="/tasks"
                  element={
                    <TasksListPage>
                      <Outlet />
                    </TasksListPage>
                  }
                >
                  <Route path="new" element={<TasksCreatePage />} />
                  <Route path="edit/:id" element={<TasksEditPage />} />
                </Route>

                <Route path="*" element={<ErrorComponent />} />
              </Route>

              <Route
                element={
                  <Authenticated
                    key="authenticated-auth"
                    fallback={<Outlet />}
                  >
                    <NavigateToResource resource="dashboard" />
                  </Authenticated>
                }
              >
                <Route path="/login" element={<LoginPage />} />
              </Route>
            </Routes>
            <UnsavedChangesNotifier />
            <DocumentTitleHandler />
          </Refine>
          <DevtoolsPanel />
        </DevtoolsProvider>
      </AntdApp>
    </BrowserRouter>
  );
};

export default App;
