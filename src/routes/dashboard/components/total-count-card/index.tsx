import React from "react";

import { AuditOutlined, CheckSquareOutlined, GiftOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Area, type AreaConfig } from "@ant-design/plots";
import { Card, Skeleton } from "antd";

import { Text } from "@/components";

type Type = "companies" | "contacts" | "deals" | "taskStages";

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
  const { primaryColor, secondaryColor, icon, title } = variants[resource];

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
      bodyStyle={{
        padding: "8px 8px 8px 12px",
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
          {title}
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
        <Area
          {...config}
          style={{
            width: "50%",
          }}
        />
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
    title: string;
    data: { index: string; value: number }[];
  };
} = {
  companies: {
    primaryColor: "#1677FF",
    secondaryColor: "#BAE0FF",
    icon: (
      <IconWrapper color="#E6F4FF">
        <UserOutlined
          className="md"
          style={{
            color: "#1677FF",
          }}
        />
      </IconWrapper>
    ),
    title: "Total Members",
    data: [
      {
        index: "1",
        value: 45,
      },
      {
        index: "2",
        value: 52,
      },
      {
        index: "3",
        value: 48,
      },
      {
        index: "4",
        value: 61,
      },
      {
        index: "5",
        value: 55,
      },
    ],
  },
  taskStages: {
    primaryColor: "#1677FF",
    secondaryColor: "#BAE0FF",
    icon: (
      <IconWrapper color="#E6F4FF">
        <TeamOutlined
          className="md"
          style={{
            color: "#1677FF",
          }}
        />
      </IconWrapper>
    ),
    title: "Igihande Groups",
    data: [
      {
        index: "1",
        value: 3,
      },
      {
        index: "2",
        value: 4,
      },
      {
        index: "3",
        value: 5,
      },
      {
        index: "4",
        value: 5,
      },
      {
        index: "5",
        value: 6,
      },
    ],
  },
  contacts: {
    primaryColor: "#52C41A",
    secondaryColor: "#D9F7BE",
    icon: (
      <IconWrapper color="#F6FFED">
        <CheckSquareOutlined
          className="md"
          style={{
            color: "#52C41A",
          }}
        />
      </IconWrapper>
    ),
    title: "Attendance Records",
    data: [
      {
        index: "1",
        value: 120,
      },
      {
        index: "2",
        value: 135,
      },
      {
        index: "3",
        value: 98,
      },
      {
        index: "4",
        value: 142,
      },
      {
        index: "5",
        value: 118,
      },
      {
        index: "6",
        value: 156,
      },
    ],
  },
  deals: {
    primaryColor: "#FA541C",
    secondaryColor: "#FFD8BF",
    icon: (
      <IconWrapper color="#FFF2E8">
        <GiftOutlined
          className="md"
          style={{
            color: "#FA541C",
          }}
        />
      </IconWrapper>
    ),
    title: "Dedications This Month",
    data: [
      {
        index: "1",
        value: 25000,
      },
      {
        index: "2",
        value: 32000,
      },
      {
        index: "3",
        value: 28000,
      },
      {
        index: "4",
        value: 45000,
      },
      {
        index: "5",
        value: 38000,
      },
      {
        index: "6",
        value: 52000,
      },
      {
        index: "7",
        value: 41000,
      },
      {
        index: "8",
        value: 48000,
      },
    ],
  },
};
