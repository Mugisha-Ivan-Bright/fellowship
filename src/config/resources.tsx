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
      label: "Dashboard",
      icon: <DashboardOutlined />,
    },
  },
  {
    // Map Fellowship Members to demo Companies
    name: "companies",
    list: "/members",
    show: "/members/:id",
    create: "/members/new",
    edit: "/members/edit/:id",
    meta: {
      label: "Members",
      icon: <UserOutlined />,
    },
  },
  {
    // Map Fellowship Igihande to demo Task Stages
    name: "taskStages",
    list: "/igihande",
    show: "/igihande/:id",
    create: "/igihande/new",
    edit: "/igihande/edit/:id",
    meta: {
      label: "Igihande",
      icon: <TeamOutlined />,
    },
  },
  {
    // Attendance - will use demo Contacts for now
    name: "contacts",
    list: "/attendance",
    create: "/attendance/new",
    meta: {
      label: "Attendance",
      icon: <CheckSquareOutlined />,
    },
  },
  {
    // Dedications - will use demo Deals for now
    name: "deals",
    list: "/dedications",
    create: "/dedications/new",
    meta: {
      label: "Dedications",
      icon: <GiftOutlined />,
    },
  },
  {
    // Tasks - keep as is
    name: "tasks",
    list: "/tasks",
    create: "/tasks/new",
    edit: "/tasks/edit/:id",
    meta: {
      label: "My Tasks",
      icon: <ProjectOutlined />,
    },
  },
];
