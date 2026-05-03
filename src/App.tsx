import { BrowserRouter, Outlet, Route, Routes } from "react-router";

import { useNotificationProvider } from "@refinedev/antd";
import { Authenticated, ErrorComponent, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import routerProvider, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";

import { App as AntdApp, ConfigProvider } from "antd";

import { Layout } from "@/components";
import { resources } from "@/config/resources";
import { authProvider, dataProvider, liveProvider } from "@/providers";
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

// Fellowship Ant Design theme tokens
const fellowshipTheme = {
  token: {
    colorPrimary: "#1B6B3A", // ADEPR brand green
    colorSuccess: "#1B6B3A",
    colorWarning: "#92610A",
    colorError: "#C0392B",
    colorInfo: "#185FA5",
    colorBgBase: "#F7F7F5",
    colorBgContainer: "#FFFFFF",
    colorBgElevated: "#F0EEE9",
    colorBorder: "#D9D6CE",
    colorText: "#1A1A18",
    colorTextSecondary: "#4A4A44",
    colorTextTertiary: "#7A7A72",
    borderRadius: 8,
    fontFamily: "'Geist Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
};

const App = () => {
  return (
    <BrowserRouter>
      <ConfigProvider theme={fellowshipTheme}>
        <AntdApp>
          <DevtoolsProvider>
            <Refine
              routerProvider={routerProvider}
              dataProvider={dataProvider}
              liveProvider={liveProvider}
              notificationProvider={useNotificationProvider}
              authProvider={authProvider}
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
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default App;
