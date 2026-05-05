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
  Statistic,
  InputNumber
} from "antd";
import { GiftOutlined, DollarOutlined, UserOutlined, CalendarOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const { Text } = Typography;

import { DEDICATIONS_LIST_QUERY } from "@/graphql/queries";

export const DedicationsListPage = () => {
  const t = useTranslate();
  const { tableProps } = useTable({
    resource: "dedications",
    meta: {
      operation: "DedicationsList",
      gqlQuery: DEDICATIONS_LIST_QUERY,
    },
  });

  const columns = [
    {
      title: t("dedications.fields.member"),
      dataIndex: ["member", "firstName"],
      key: "member",
      render: (value: string, record: any) => (
        <Space>
          <UserOutlined style={{ color: "#1677FF" }} />
          <div>
            <Text strong>{record.member?.firstName} {record.member?.lastName}</Text>
            <br />
            <Text type="secondary">{record.member?.membershipNo}</Text>
          </div>
        </Space>
      ),
    },
    {
      title: t("dedications.fields.type"),
      dataIndex: "type",
      key: "type",
      render: (value: string) => (
        <div>
          <Text strong>{t(`dedications.types.${value.toLowerCase().replace("_", "")}`)}</Text>
        </div>
      ),
    },
    {
      title: t("dedications.fields.description"),
      dataIndex: "description",
      key: "description",
      render: (value: string) => (
        <Text strong style={{ color: "#1B6B3A" }}>
          {value || "N/A"}
        </Text>
      ),
    },
    {
      title: t("dedications.fields.date"),
      dataIndex: "date",
      key: "date",
      render: (value: string) => (
        <div>
          <Text>{value ? dayjs(value).format("MMM DD, YYYY") : t("dashboard.title")}</Text>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} md={6}>
          <Card>
            <Statistic
              title={t("dedications.stats.today")}
              value={0}
              prefix={<GiftOutlined />}
              suffix="RWF"
              valueStyle={{ color: "#1677FF" }}
            />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card>
            <Statistic
              title={t("dedications.stats.thisWeek")}
              value={0}
              prefix={<DollarOutlined />}
              suffix="RWF"
              valueStyle={{ color: "#52c41a" }}
            />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card>
            <Statistic
              title={t("dedications.stats.thisMonth")}
              value={0}
              prefix={<CalendarOutlined />}
              suffix="RWF"
              valueStyle={{ color: "#1890ff" }}
            />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card>
            <Statistic
              title={t("dashboard.totalMembers")}
              value={0}
              prefix={<UserOutlined />}
              valueStyle={{ color: "#722ed1" }}
            />
          </Card>
        </Col>
      </Row>

      <List
        resource="dedications"
        title={t("dedications.title")}
        headerButtons={({ defaultButtons }) => (
          <>
            {defaultButtons}
            <CreateButton>{t("dedications.actions.record")}</CreateButton>
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

export const DedicationsCreatePage = () => {
  const t = useTranslate();
  const { formProps, saveButtonProps, onFinish } = useForm({
    resource: "dedications",
    action: "create",
    redirect: "list",
  });

  const handleFinish = async (values: any) => {
    try {
      await onFinish({ input: values });
    } catch (error) {
      console.error("Failed to record dedication:", error);
    }
  };

  return (
    <Create
      resource="dedications"
      title={t("dedications.actions.record")}
      breadcrumb={false}
    >
      <Form {...formProps} layout="vertical" onFinish={handleFinish}>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label={t("dedications.fields.memberId")}
              name="memberId"
              rules={[{ required: true, message: t("action.required") }]}
            >
              <Input placeholder={t("dedications.fields.memberId")} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label={t("dedications.fields.type")}
              name="type"
              rules={[{ required: true, message: t("action.required") }]}
            >
              <Select placeholder={t("dedications.fields.type")}>
                <Select.Option value="TITHE">{t("dedications.types.tithe")}</Select.Option>
                <Select.Option value="OFFERING">{t("dedications.types.offering")}</Select.Option>
                <Select.Option value="VOLUNTEERING">{t("dedications.types.volunteering")}</Select.Option>
                <Select.Option value="SERVICE_ROLE">{t("dedications.types.servicerole")}</Select.Option>
                <Select.Option value="OTHER">{t("dedications.types.other")}</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label={t("dedications.fields.description")}
              name="description"
              rules={[{ required: true, message: t("action.required") }]}
            >
              <Input placeholder="..." />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label={t("dedications.fields.date")}
              name="date"
              rules={[{ required: true, message: t("action.required") }]}
              initialValue={dayjs()}
            >
              <DatePicker
                style={{ width: "100%" }}
                format="YYYY-MM-DD"
              />
            </Form.Item>
          </Col>
        </Row>

        <div style={{ textAlign: "right", marginTop: 24 }}>
          <Button type="primary" htmlType="submit" {...saveButtonProps}>
            {t("dedications.actions.record")}
          </Button>
        </div>
      </Form>
    </Create>
  );
};
