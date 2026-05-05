import React from "react";
import {
  CreateButton,
  List,
  useTable,
  Create,
  useForm,
} from "@refinedev/antd";
import { useTranslate } from "@refinedev/core";
import {
  Space,
  Table,
  Typography,
  Row,
  Col,
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Tag,
  Card,
  Statistic
} from "antd";
import { CheckSquareOutlined, CalendarOutlined, UserOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const { Text } = Typography;

import { ATTENDANCE_LIST_QUERY } from "@/graphql/queries";

export const AttendanceListPage = () => {
  const t = useTranslate();
  const { tableProps } = useTable({
    resource: "attendances",
    meta: {
      operation: "AttendanceList",
      gqlQuery: ATTENDANCE_LIST_QUERY,
    },
  });

  const columns = [
    {
      title: t("attendance.fields.service"),
      dataIndex: ["service", "title"],
      key: "service",
      render: (value: string, record: any) => (
        <Space>
          <CalendarOutlined style={{ color: "#1677FF" }} />
          <div>
            <Text strong>{value || record.service?.type}</Text>
            <br />
            <Text type="secondary">{dayjs(record.service?.date).format("YYYY-MM-DD")}</Text>
          </div>
        </Space>
      ),
    },
    {
      title: t("attendance.fields.member"),
      dataIndex: ["member", "firstName"],
      key: "member",
      render: (value: string, record: any) => (
        <div>
          <Text>{record.member?.firstName} {record.member?.lastName}</Text>
          <br />
          <Text type="secondary">{record.member?.membershipNo}</Text>
        </div>
      ),
    },
    {
      title: t("attendance.fields.status"),
      dataIndex: "present",
      key: "present",
      render: (value: boolean) => {
        return (
          <Tag color={value ? "green" : "red"}>
            {value ? t("attendance.present") : t("attendance.absent")}
          </Tag>
        );
      },
    },
    {
      title: t("attendance.fields.recorded"),
      dataIndex: "createdAt",
      key: "createdAt",
      render: (value: string) => (
        <Text type="secondary">
          {value ? dayjs(value).format("MMM DD, YYYY") : t("dashboard.title")}
        </Text>
      ),
    },
  ];

  return (
    <div>
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} md={6}>
          <Card>
            <Statistic
              title={t("attendance.stats.today")}
              value={0}
              prefix={<UserOutlined />}
              valueStyle={{ color: "#1677FF" }}
            />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card>
            <Statistic
              title={t("attendance.stats.thisWeek")}
              value={0}
              prefix={<CheckSquareOutlined />}
              valueStyle={{ color: "#52c41a" }}
            />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card>
            <Statistic
              title={t("attendance.stats.thisMonth")}
              value={0}
              prefix={<CalendarOutlined />}
              valueStyle={{ color: "#1890ff" }}
            />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card>
            <Statistic
              title={t("attendance.stats.rate")}
              value={0}
              suffix="%"
              valueStyle={{ color: "#722ed1" }}
            />
          </Card>
        </Col>
      </Row>

      <List
        resource="attendance"
        title={t("attendance.title")}
        headerButtons={({ defaultButtons }) => (
          <>
            {defaultButtons}
            <CreateButton>{t("attendance.actions.record")}</CreateButton>
          </>
        )}
      >
        <Table
          {...tableProps}
          columns={columns}
          rowKey="id"
          scroll={{ x: true }}
          pagination={{
            ...tableProps.pagination,
            showSizeChanger: true,
            showTotal: (total, range) =>
              t("common.table.paginationTotal", { rangeStart: range[0], rangeEnd: range[1], total }),
          }}
        />
      </List>
    </div>
  );
};

export const AttendanceCreatePage = () => {
  const t = useTranslate();
  const { formProps, saveButtonProps, onFinish } = useForm({
    resource: "attendances",
    action: "create",
    redirect: "list",
  });

  const handleFinish = async (values: any) => {
    try {
      await onFinish({ input: values });
    } catch (error) {
      console.error("Failed to record attendance:", error);
    }
  };

  return (
    <Create
      resource="attendance"
      title={t("attendance.actions.record")}
      breadcrumb={false}
    >
      <Form {...formProps} layout="vertical" onFinish={handleFinish}>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label={t("attendance.fields.serviceId")}
              name="serviceId"
              rules={[{ required: true, message: t("action.required") }]}
            >
              <Input placeholder={t("attendance.fields.serviceId")} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label={t("attendance.fields.memberId")}
              name="memberId"
              rules={[{ required: true, message: t("action.required") }]}
            >
              <Input placeholder={t("attendance.fields.memberId")} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label={t("attendance.fields.status")}
              name="present"
              rules={[{ required: true, message: t("action.required") }]}
              initialValue={true}
            >
              <Select placeholder={t("attendance.fields.status")}>
                <Select.Option value={true}>{t("attendance.present")}</Select.Option>
                <Select.Option value={false}>{t("attendance.absent")}</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label={t("attendance.fields.notes")}
              name="notes"
              extra={t("field.notes")}
            >
              <Input.TextArea
                rows={2}
                placeholder="..."
              />
            </Form.Item>
          </Col>
        </Row>

        <div style={{ textAlign: "right", marginTop: 24 }}>
          <Button type="primary" htmlType="submit" {...saveButtonProps}>
            {t("attendance.actions.record")}
          </Button>
        </div>
      </Form>
    </Create>
  );
};
