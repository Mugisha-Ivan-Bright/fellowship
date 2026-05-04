import type { IResourceItem } from "@refinedev/core";

import {
  CheckSquareOutlined,
  DashboardOutlined,
  GiftOutlined,
  ProjectOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const resources: IResourceItem[] = [
  {
    name: "dashboard",
    list: "/",
    meta: {
      label: "nav.dashboard",
      icon: <DashboardOutlined />,
    },
  },
  {
    name: "members",
    list: "/members",
    show: "/members/:id",
    create: "/members/new",
    edit: "/members/edit/:id",
    meta: {
      label: "nav.members",
      icon: <UserOutlined />,
    },
  },
  {
    name: "igihande",
    list: "/igihande",
    show: "/igihande/:id",
    create: "/igihande/new",
    edit: "/igihande/edit/:id",
    meta: {
      label: "nav.igihande",
      icon: <TeamOutlined />,
    },
  },
  {
    name: "attendance",
    list: "/attendance",
    create: "/attendance/new",
    meta: {
      label: "nav.attendance",
      icon: <CheckSquareOutlined />,
    },
  },
  {
    name: "dedications",
    list: "/dedications",
    create: "/dedications/new",
    meta: {
      label: "nav.dedications",
      icon: <GiftOutlined />,
    },
  },
  {
    name: "tasks",
    list: "/tasks",
    create: "/tasks/new",
    edit: "/tasks/edit/:id",
    meta: {
      label: "nav.tasks",
      icon: <ProjectOutlined />,
    },
  },
];
