import { useTranslate } from "@refinedev/core";
import { CheckSquareOutlined, GiftOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Area, type AreaConfig } from "@ant-design/plots";
import { Card, Skeleton } from "antd";

import { Text } from "@/components";

type Type = "members" | "attendances" | "dedications" | "igihandes";

type Props = {
  resource: Type;
  isLoading: boolean;
  totalCount?: number;
};

export const DashboardTotalCountCard = ({
  resource,
  isLoading,
  totalCount,
}: Props) => {
  const t = useTranslate();
  const { primaryColor, secondaryColor, icon, titleKey } = variants[resource];

  const config: AreaConfig = {
    appendPadding: [1, 0, 0, 0],
    padding: 0,
    syncViewPadding: true,
    data: variants[resource].data,
    autoFit: true,
    tooltip: false,
    animation: false,
    xField: "index",
    yField: "value",
    xAxis: false,
    yAxis: {
      tickCount: 12,
      label: {
        style: {
          fill: "transparent",
        },
      },
      grid: {
        line: {
          style: {
            stroke: "transparent",
          },
        },
      },
    },
    smooth: true,
    areaStyle: () => {
      return {
        fill: `l(270) 0:#fff 0.2:${secondaryColor} 1:${primaryColor}`,
      };
    },
    line: {
      color: primaryColor,
    },
  };

  return (
    <Card
      style={{ height: "96px", padding: 0 }}
      styles={{
        body: { padding: "8px 8px 8px 12px" }
      }}
      size="small"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          whiteSpace: "nowrap",
        }}
      >
        {icon}
        <Text size="md" className="secondary" style={{ marginLeft: "8px" }}>
          {t(titleKey)}
        </Text>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Text
          size="xxxl"
          strong
          style={{
            flex: 1,
            whiteSpace: "nowrap",
            flexShrink: 0,
            textAlign: "start",
            marginLeft: "48px",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {isLoading ? (
            <Skeleton.Button
              style={{
                marginTop: "8px",
                width: "74px",
              }}
            />
          ) : (
            totalCount
          )}
        </Text>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "50%",
            height: "60px",
          }}
        >
          <Area
            {...config}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </Card>
  );
};

const IconWrapper = ({
  color,
  children,
}: React.PropsWithChildren<{ color: string }>) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        backgroundColor: color,
      }}
    >
      {children}
    </div>
  );
};

const variants: {
  [key in Type]: {
    primaryColor: string;
    secondaryColor?: string;
    icon: React.ReactNode;
    titleKey: string;
    data: { index: string; value: number }[];
  };
} = {
  members: {
    primaryColor: "#1B6B3A",
    secondaryColor: "#C0DD97",
    icon: (
      <IconWrapper color="#E6F4FF">
        <UserOutlined
          className="md"
          style={{
            color: "#1B6B3A",
          }}
        />
      </IconWrapper>
    ),
    titleKey: "dashboard.totalMembers",
    data: [
      { index: "1", value: 45 },
      { index: "2", value: 52 },
      { index: "3", value: 48 },
      { index: "4", value: 61 },
      { index: "5", value: 55 },
    ],
  },
  igihandes: {
    primaryColor: "#185FA5",
    secondaryColor: "#B5D4F4",
    icon: (
      <IconWrapper color="#E6F4FF">
        <TeamOutlined
          className="md"
          style={{
            color: "#185FA5",
          }}
        />
      </IconWrapper>
    ),
    titleKey: "dashboard.totalIgihande",
    data: [
      { index: "1", value: 3 },
      { index: "2", value: 4 },
      { index: "3", value: 5 },
      { index: "4", value: 5 },
      { index: "5", value: 6 },
    ],
  },
  attendances: {
    primaryColor: "#1B6B3A",
    secondaryColor: "#C0DD97",
    icon: (
      <IconWrapper color="#F6FFED">
        <CheckSquareOutlined
          className="md"
          style={{
            color: "#1B6B3A",
          }}
        />
      </IconWrapper>
    ),
    titleKey: "dashboard.attendanceRate",
    data: [
      { index: "1", value: 80 },
      { index: "2", value: 85 },
      { index: "3", value: 78 },
      { index: "4", value: 92 },
      { index: "5", value: 88 },
    ],
  },
  dedications: {
    primaryColor: "#92610A",
    secondaryColor: "#D9D6CE",
    icon: (
      <IconWrapper color="#FFF2E8">
        <GiftOutlined
          className="md"
          style={{
            color: "#92610A",
          }}
        />
      </IconWrapper>
    ),
    titleKey: "dashboard.recentEnrollments",
    data: [
      { index: "1", value: 10 },
      { index: "2", value: 12 },
      { index: "3", value: 8 },
      { index: "4", value: 15 },
      { index: "5", value: 13 },
    ],
  },
};

