import { useEffect } from "react";
import gql from "graphql-tag";
import { Show, SignInButton, useAuth, useUser } from "@clerk/react";
import { Button, Layout, Typography, Space, Spin } from "antd";
import { useTranslate } from "@refinedev/core";
import { useNavigate } from "react-router";
import { API_URL, dataProvider } from "../../providers/data";

export const LoginPage = () => {
  const t = useTranslate();
  const navigate = useNavigate();
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();

  // Automatically sync and redirect to dashboard if already signed in
  useEffect(() => {
    const syncAndRedirect = async () => {
      if (isLoaded && isSignedIn && user) {
        try {
          // Sync user with backend
          await dataProvider.custom({
            url: API_URL,
            method: "post",
            headers: {
              "x-clerk-user-id": user.id
            },
            meta: {
              operation: "SyncUser",
              variables: {
                clerkId: user.id,
                email: user.primaryEmailAddress?.emailAddress || "",
                name: user.fullName || ""
              },
              gqlMutation: gql`
                mutation SyncUser($clerkId: String!, $email: String!, $name: String) {
                  syncUser(clerkId: $clerkId, email: $email, name: $name) {
                    id
                  }
                }
              `
            }
          });
          
          navigate("/");
        } catch (error) {
          console.error("Failed to sync user:", error);
          // Still navigate to / for now, maybe the user already exists
          navigate("/");
        }
      }
    };

    syncAndRedirect();
  }, [isLoaded, isSignedIn, user, navigate]);

  if (!isLoaded) {
    return (
      <Layout
        style={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Spin size="large" />
      </Layout>
    );
  }

  return (
    <Layout
      style={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Space direction="vertical" align="center" size="large">
        <Typography.Title level={1} style={{ color: "#1B6B3A", margin: 0 }}>
          Fellowship
        </Typography.Title>
        <Typography.Text type="secondary" style={{ fontSize: "16px" }}>
          {t("auth.subtitle")}
        </Typography.Text>
        <Show when="signed-out">
          <SignInButton mode="modal">
            <Button type="primary" size="large" style={{ backgroundColor: "#1B6B3A" }}>
              {t("auth.signIn")}
            </Button>
          </SignInButton>
        </Show>
      </Space>
    </Layout>
  );
};
