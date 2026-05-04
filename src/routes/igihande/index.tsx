import React from "react";
import {
  CreateButton,
  EditButton,
  List,
  ShowButton,
  useTable,
  Create,
  useForm,
  Show,
  Edit
} from "@refinedev/antd";
import { useShow, useTranslate } from "@refinedev/core";
import {
  Space,
  Table,
  Typography,
  Row,
  Col,
  Form,
  Input,
  Button,
  Card,
  Statistic,
  Tag
} from "antd";
import { TeamOutlined, UserOutlined } from "@ant-design/icons";

const { Text } = Typography;

export const IgihandeListPage = () => {
  const t = useTranslate();
  const { tableProps } = useTable({
    resource: "igihande",
  });

  const columns = [
    {
      title: t("igihande.fields.name"),
      dataIndex: "name",
      key: "name",
      render: (value: string, record: any) => (
        <Space>
          <TeamOutlined style={{ color: "#1677FF" }} />
          <div>
            <Text strong>{value}</Text>
            <br />
            <Text type="secondary">ID: {record.id}</Text>
          </div>
        </Space>
      ),
    },
    {
      title: t("igihande.fields.members"),
      dataIndex: "memberCount",
      key: "memberCount",
      render: () => (
        <Tag color="blue">
          <UserOutlined /> 0 {t("igihande.fields.members").toLowerCase()}
        </Tag>
      ),
    },
    {
      title: t("igihande.fields.leader"),
      dataIndex: "leader",
      key: "leader",
      render: () => (
        <Text type="secondary">{t("common.notAssigned")}</Text>
      ),
    },
    {
      title: t("common.actions"),
      dataIndex: "actions",
      key: "actions",
      render: (_: any, record: any) => (
        <Space>
          <ShowButton hideText size="small" recordItemId={record.id} />
          <EditButton hideText size="small" recordItemId={record.id} />
        </Space>
      ),
    },
  ];

  return (
    <List
      resource="igihande"
      title={t("igihande.title")}
      headerButtons={({ defaultButtons }) => (
        <>
          {defaultButtons}
          <CreateButton>{t("igihande.actions.create")}</CreateButton>
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
  );
};

export const IgihandeCreatePage = () => {
  const t = useTranslate();
  const { formProps, saveButtonProps, onFinish } = useForm({
    resource: "igihande",
    action: "create",
    redirect: "list",
  });

  const handleFinish = async (values: any) => {
    try {
      await onFinish({ input: values });
    } catch (error) {
      console.error("Failed to create igihande:", error);
    }
  };

  return (
    <Create
      resource="igihande"
      title={t("igihande.actions.create")}
      breadcrumb={false}
    >
      <Form {...formProps} layout="vertical" onFinish={handleFinish}>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label={t("igihande.fields.name")}
              name="name"
              rules={[
                { required: true, message: t("action.required") },
                { min: 2, message: t("feedback.error") }
              ]}
              extra={t("igihande.fields.name")}
            >
              <Input placeholder="e.g., Igihande rya Kigali" />
            </Form.Item>
          </Col>
        </Row>

        <div style={{ textAlign: "right", marginTop: 24 }}>
          <Button type="primary" htmlType="submit" {...saveButtonProps}>
            {t("igihande.actions.create")}
          </Button>
        </div>
      </Form>
    </Create>
  );
};

export const IgihandeEditPage = () => {
  const t = useTranslate();
  const { formProps, saveButtonProps, onFinish } = useForm({
    resource: "igihande",
    action: "edit",
    redirect: "list",
  });

  const handleFinish = async (values: any) => {
    try {
      await onFinish({ input: values });
    } catch (error) {
      console.error("Failed to update igihande:", error);
    }
  };

  return (
    <Edit
      resource="igihande"
      title={t("igihande.actions.edit")}
    >
      <Form {...formProps} layout="vertical" onFinish={handleFinish}>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label={t("igihande.fields.name")}
              name="name"
              rules={[
                { required: true, message: t("action.required") },
                { min: 2, message: t("feedback.error") }
              ]}
            >
              <Input placeholder="e.g., Igihande rya Kigali" />
            </Form.Item>
          </Col>
        </Row>

        <div style={{ textAlign: "right", marginTop: 24 }}>
          <Button type="primary" htmlType="submit" {...saveButtonProps}>
            {t("action.save")}
          </Button>
        </div>
      </Form>
    </Edit>
  );
};

export const IgihandeShowPage = () => {
  const t = useTranslate();
  const { query } = useShow({
    resource: "igihande",
  });

  const igihandeData = query?.data?.data;

  if (query?.isLoading) {
    return <Card loading />;
  }

  return (
    <Show
      resource="igihande"
      title={t("igihande.actions.show")}
    >
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card>
            <div style={{ textAlign: "center" }}>
              <TeamOutlined style={{ fontSize: 48, color: "#1677FF", marginBottom: 16 }} />
              <div>
                <Text strong style={{ fontSize: 18 }}>
                  {igihandeData?.name}
                </Text>
                <br />
                <Text type="secondary">ID: {igihandeData?.id}</Text>
              </div>
            </div>
          </Card>
        </Col>

        <Col xs={24} md={16}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <Card>
                <Statistic
                  title={t("dashboard.totalMembers")}
                  value={0}
                  prefix={<UserOutlined />}
                  valueStyle={{ color: "#1677FF" }}
                />
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card>
                <Statistic
                  title={t("dashboard.activeMembers")}
                  value={0}
                  prefix={<UserOutlined />}
                  valueStyle={{ color: "#52c41a" }}
                />
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card>
                <Statistic
                  title={t("dashboard.attendanceRate")}
                  value={0}
                  suffix="%"
                  valueStyle={{ color: "#1890ff" }}
                />
              </Card>
            </Col>
          </Row>

          <Card title={t("igihande.title")} style={{ marginTop: 16 }}>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12}>
                <div>
                  <Text strong>{t("igihande.fields.leader")}:</Text>
                  <br />
                  <Text>{t("common.notAssigned")}</Text>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div>
                  <Text strong>{t("igihande.fields.schedule")}:</Text>
                  <br />
                  <Text type="secondary">{t("feedback.noData")}</Text>
                </div>
              </Col>
              <Col xs={24}>
                <div>
                  <Text strong>{t("igihande.fields.description")}:</Text>
                  <br />
                  <Text type="secondary">{t("feedback.noData")}</Text>
                </div>
              </Col>
            </Row>
          </Card>

          <Card title={t("dashboard.recentEnrollments")} style={{ marginTop: 16 }}>
            <Text type="secondary">{t("members.noResults")}</Text>
          </Card>
        </Col>
      </Row>
    </Show>
  );
};
