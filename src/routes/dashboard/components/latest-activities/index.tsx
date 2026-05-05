import { useTranslate, useList } from "@refinedev/core";

import { UnorderedListOutlined } from "@ant-design/icons";
import { Card, List, Skeleton as AntdSkeleton, Space } from "antd";
import dayjs from "dayjs";

import { CustomAvatar, Text } from "@/components";

import { DASHBOARD_LATEST_ACTIVITIES_DEDICATIONS_QUERY } from "./queries";

type Props = { limit?: number };

export const DashboardLatestActivities = ({ limit = 5 }: Props) => {
  const t = useTranslate();

  const {
    result: dedications,
    query: { isLoading, isError, error },
  } = useList<any>({
    resource: "dedications",
    pagination: {
      pageSize: limit,
    },
    sorters: [
      {
        field: "createdAt",
        order: "desc",
      },
    ],
    meta: {
      operation: "DashboardLatestActivitiesDedications",
      gqlQuery: DASHBOARD_LATEST_ACTIVITIES_DEDICATIONS_QUERY,
    },
  });

  if (isError) {
    console.error("Error fetching latest activities", error);
    return null;
  }

  return (
    <Card
      styles={{
        header: { padding: "16px" },
        body: { padding: "0 1rem" },
      }}
      title={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <UnorderedListOutlined />
          <Text size="sm" style={{ marginLeft: ".5rem" }}>
            {t("dashboard.latestActivities")}
          </Text>
        </div>
      }
    >
      {isLoading ? (
        <List
          itemLayout="horizontal"
          dataSource={Array.from({ length: limit }).map((_, index) => ({
            id: index,
          }))}
          renderItem={(_item, index) => {
            return (
              <List.Item key={index}>
                <List.Item.Meta
                  avatar={
                    <AntdSkeleton.Avatar
                      active
                      size={48}
                      shape="square"
                      style={{
                        borderRadius: "4px",
                      }}
                    />
                  }
                  title={
                    <AntdSkeleton.Button
                      active
                      style={{
                        height: "16px",
                      }}
                    />
                  }
                  description={
                    <AntdSkeleton.Button
                      active
                      style={{
                        width: "300px",
                        height: "16px",
                      }}
                    />
                  }
                />
              </List.Item>
            );
          }}
        />
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={dedications?.data || []}
          renderItem={(item: any) => {
            const member = item.member;
            const fullName = member
              ? `${member.firstName} ${member.lastName}`
              : t("dashboard.activity.unassigned");

            return (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <CustomAvatar
                      shape="square"
                      size={48}
                      src={member?.photoUrl}
                      name={fullName}
                    />
                  }
                  title={dayjs(item.date).format("MMM DD, YYYY")}
                  description={
                    <Space size={4} wrap>
                      <Text strong>{fullName}</Text>
                      <Text>
                        {t("dashboard.activity.gave") || "gave"}
                      </Text>
                      <Text strong>
                        {item.type}
                      </Text>
                      {item.description && (
                        <Text>— {item.description}</Text>
                      )}
                    </Space>
                  }
                />
              </List.Item>
            );
          }}
        />
      )}
    </Card>
  );
};
