import { useTranslate, useCustom } from "@refinedev/core";

import { Col, Row, Typography } from "antd";

import type { DashboardTotalCountsQuery } from "@/graphql/types";

import {
  CalendarUpcomingEvents,
  DashboardDealsChart,
  DashboardLatestActivities,
  DashboardTotalCountCard,
} from "./components";
import { DASHBOARD_TOTAL_COUNTS_QUERY } from "./queries";

export const DashboardPage = () => {
  const t = useTranslate();
  const {
    query: { isLoading },

    result: data,
  } = useCustom<any>({
    url: "",
    method: "get",
    meta: { gqlQuery: DASHBOARD_TOTAL_COUNTS_QUERY },
  });

  return (
    <div className="page-container">
      <Typography.Title level={3} style={{ marginBottom: 24 }}>
        {t("dashboard.title")}
      </Typography.Title>
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={24} xl={6}>
          <DashboardTotalCountCard
            resource="members"
            isLoading={isLoading}
            totalCount={data?.data?.dashboardStats?.totalMembers}
          />
        </Col>
        <Col xs={24} sm={24} xl={6}>
          <DashboardTotalCountCard
            resource="igihande"
            isLoading={isLoading}
            totalCount={data?.data?.dashboardStats?.totalIgihande}
          />
        </Col>
        <Col xs={24} sm={24} xl={6}>
          <DashboardTotalCountCard
            resource="attendance"
            isLoading={isLoading}
            totalCount={data?.data?.dashboardStats?.attendanceRate}
          />
        </Col>
        <Col xs={24} sm={24} xl={6}>
          <DashboardTotalCountCard
            resource="dedications"
            isLoading={isLoading}
            totalCount={data?.data?.dashboardStats?.newThisMonth}
          />
        </Col>
      </Row>

      <Row
        gutter={[32, 32]}
        style={{
          marginTop: "32px",
        }}
      >
        <Col
          xs={24}
          sm={24}
          xl={8}
          style={{
            height: "460px",
          }}
        >
          <CalendarUpcomingEvents />
        </Col>
        <Col
          xs={24}
          sm={24}
          xl={16}
          style={{
            height: "460px",
          }}
        >
          <DashboardDealsChart />
        </Col>
      </Row>

      <Row
        gutter={[32, 32]}
        style={{
          marginTop: "32px",
        }}
      >
        <Col xs={24}>
          <DashboardLatestActivities />
        </Col>
      </Row>
    </div>
  );
};
