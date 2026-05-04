import { useEffect } from "react";
import { Show, SignInButton, useAuth } from "@clerk/react";
import { Button, Layout, Typography, Space, Spin } from "antd";
import { useTranslate } from "@refinedev/core";
import { useNavigate } from "react-router";

export const LoginPage = () => {
  const t = useTranslate();
  const navigate = useNavigate();
  const { isLoaded, isSignedIn } = useAuth();

  // Automatically redirect to dashboard if already signed in
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate("/");
    }
  }, [isLoaded, isSignedIn, navigate]);

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
