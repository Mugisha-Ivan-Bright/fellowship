import { useGetLocale, useSetLocale } from "@refinedev/core";
import { Layout, Space, theme, Select } from "antd";

import { CurrentUser } from "../current-user";

const { useToken } = theme;

export const Header = () => {
  const { token } = useToken();
  const changeLocale = useSetLocale();
  const locale = useGetLocale();
  const currentLocale = locale();

  const headerStyles: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0px 24px",
    height: "64px",
    position: "sticky",
    top: 0,
    zIndex: 999,
  };

  return (
    <Layout.Header style={headerStyles}>
      <Space align="center" size="middle">
        <Select
          defaultValue={currentLocale}
          onChange={(value) => changeLocale(value)}
          options={[
            { label: "English", value: "en" },
            { label: "Kinyarwanda", value: "rw" },
          ]}
          style={{ width: 120 }}
          variant="borderless"
        />
        <CurrentUser />
      </Space>
    </Layout.Header>
  );
};

