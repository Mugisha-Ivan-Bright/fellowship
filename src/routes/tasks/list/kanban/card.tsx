import { memo, useMemo } from "react";

import { useDelete, useNavigation } from "@refinedev/core";

import {
  ClockCircleOutlined,
  DeleteOutlined,
  EyeOutlined,
  MoreOutlined,
  UserOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import {
  Button,
  Card,
  ConfigProvider,
  Dropdown,
  Skeleton,
  Space,
  Tag,
  theme,
  Tooltip,
} from "antd";
import dayjs from "dayjs";

import { CustomAvatar, Text, TextIcon } from "@/components";
import type { User } from "@/graphql/schema.types";
import { getDateColor } from "@/utilities";

type ProjectCardProps = {
  id: string;
  title: string;
  updatedAt: string;
  dueDate?: string;
  users?: {
    id: string;
    name: string;
    avatarUrl?: User["avatarUrl"];
  }[];
};

export const ProjectCard = ({
  id,
  title,
  dueDate,
  users,
}: ProjectCardProps) => {
  const { token } = theme.useToken();
  const { edit } = useNavigation();
  const { mutate } = useDelete();

  const dropdownItems = useMemo(() => {
    const dropdownItems: MenuProps["items"] = [
      {
        label: "View task",
        key: "1",
        icon: <EyeOutlined />,
        onClick: () => {
          edit("tasks", id, "replace");
        },
      },
      {
        danger: true,
        label: "Delete task",
        key: "2",
        icon: <DeleteOutlined />,
        onClick: () => {
          mutate({
            resource: "tasks",
            id,
            meta: {
              operation: "task",
            },
          });
        },
      },
    ];

    return dropdownItems;
  }, []);

  const dueDateOptions = useMemo(() => {
    if (!dueDate) return null;

    const date = dayjs(dueDate);
    const isOverdue = date.isBefore(dayjs(), 'day');
    const isDueToday = date.isSame(dayjs(), 'day');
    const isDueSoon = date.diff(dayjs(), 'days') <= 3 && date.isAfter(dayjs(), 'day');

    let color = getDateColor({ date: dueDate }) as string;

    // Fellowship-specific due date colors
    if (isOverdue) color = "red";
    else if (isDueToday) color = "orange";
    else if (isDueSoon) color = "yellow";
    else color = "green";

    return {
      color,
      text: date.format("MMM D"),
      isOverdue,
      isDueToday,
    };
  }, [dueDate]);

  // Determine task priority based on Fellowship context
  const getTaskPriority = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('member') || lowerTitle.includes('attendance') || lowerTitle.includes('service')) {
      return { color: '#1677FF', icon: <UserOutlined />, label: 'Member Care' };
    }
    if (lowerTitle.includes('igihande') || lowerTitle.includes('group') || lowerTitle.includes('leader')) {
      return { color: '#1677FF', icon: <TeamOutlined />, label: 'Igihande' };
    }
    if (lowerTitle.includes('follow') || lowerTitle.includes('visit') || lowerTitle.includes('contact')) {
      return { color: '#52C41A', icon: <UserOutlined />, label: 'Follow-up' };
    }
    return null;
  };

  const taskPriority = getTaskPriority(title);

  return (
    <ConfigProvider
      theme={{
        components: {
          Tag: {
            colorText: token.colorTextSecondary,
          },
          Card: {
            headerBg: "transparent",
          },
        },
      }}
    >
      <Card
        size="small"
        title={<Text ellipsis={{ tooltip: title }}>{title}</Text>}
        onClick={() => {
          edit("tasks", id, "replace");
        }}
        extra={
          <Dropdown
            trigger={["click"]}
            menu={{
              items: dropdownItems,
              onPointerDown: (e) => {
                e.stopPropagation();
              },
              onClick: (e) => {
                e.domEvent.stopPropagation();
              },
            }}
            placement="bottom"
            arrow={{ pointAtCenter: true }}
          >
            <Button
              type="text"
              shape="circle"
              icon={
                <MoreOutlined
                  style={{
                    transform: "rotate(90deg)",
                  }}
                />
              }
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          </Dropdown>
        }
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {taskPriority && (
            <Tag
              icon={taskPriority.icon}
              color={taskPriority.color}
              style={{
                padding: "0 4px",
                marginInlineEnd: "0",
                fontSize: "11px",
              }}
            >
              {taskPriority.label}
            </Tag>
          )}

          {dueDateOptions && (
            <Tag
              icon={
                <ClockCircleOutlined
                  style={{
                    fontSize: "12px",
                  }}
                />
              }
              style={{
                padding: "0 4px",
                marginInlineEnd: "0",
                backgroundColor:
                  dueDateOptions.color === "default" ? "transparent" : "unset",
              }}
              color={dueDateOptions.color}
              bordered={dueDateOptions.color !== "default"}
            >
              {dueDateOptions.isDueToday ? "Today" : dueDateOptions.isOverdue ? "Overdue" : dueDateOptions.text}
            </Tag>
          )}

          {!!users?.length && (
            <Space
              size={4}
              wrap
              direction="horizontal"
              align="center"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginLeft: "auto",
                marginRight: "0",
              }}
            >
              {users.map((user) => {
                return (
                  <Tooltip key={user.id} title={user.name}>
                    <CustomAvatar name={user.name} src={user.avatarUrl} />
                  </Tooltip>
                );
              })}
            </Space>
          )}
        </div>
      </Card>
    </ConfigProvider>
  );
};

export const ProjectCardSkeleton = () => {
  return (
    <Card
      size="small"
      bodyStyle={{
        display: "flex",
        justifyContent: "center",
        gap: "8px",
      }}
      title={
        <Skeleton.Button
          active
          size="small"
          style={{
            width: "200px",
            height: "22px",
          }}
        />
      }
    >
      <Skeleton.Button
        active
        size="small"
        style={{
          width: "200px",
        }}
      />
      <Skeleton.Avatar active size="small" />
    </Card>
  );
};

export const ProjectCardMemo = memo(ProjectCard, (prev, next) => {
  return (
    prev.id === next.id &&
    prev.title === next.title &&
    prev.dueDate === next.dueDate &&
    prev.users?.length === next.users?.length &&
    prev.updatedAt === next.updatedAt
  );
});
