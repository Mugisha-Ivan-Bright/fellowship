import React, { useState } from "react";
import {
  CreateButton,
  EditButton,
  FilterDropdown,
  List,
  ShowButton,
  useTable,
  Create,
  useForm,
  Show
} from "@refinedev/antd";
import { useGo, useShow, useTranslate } from "@refinedev/core";
import {
  Avatar,
  Button,
  Input,
  Select,
  Space,
  Table,
  Tag,
  Typography,
  Steps,
  Row,
  Col,
  Form,
  DatePicker,
  Upload,
  message,
  Card
} from "antd";
import { SearchOutlined, UserOutlined, PlusOutlined } from "@ant-design/icons";

const { Text } = Typography;

export const MembersListPage = () => {
  const t = useTranslate();
  const { tableProps } = useTable({
    resource: "members",
  });

  const columns = [
    {
      title: t("members.fields.name"),
      key: "name",
      render: (value: string, record: any) => (
        <Space>
          <Avatar
            size={32}
            src={record.photoUrl}
            icon={<UserOutlined />}
          >
            {!record.photoUrl && record.firstName?.charAt(0)?.toUpperCase()}
          </Avatar>
          <div>
            <Text strong>{record.firstName} {record.lastName}</Text>
            <br />
            <Text type="secondary">
              #{record.membershipNo || "N/A"}
            </Text>
          </div>
        </Space>
      ),
    },
    {
      title: t("members.fields.phone"),
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: t("members.fields.igihande"),
      dataIndex: ["igihande", "name"],
      key: "igihande",
      render: (value: string) => (
        <Tag color="blue">{value || t("common.notAssigned")}</Tag>
      ),
    },
    {
      title: t("members.fields.status"),
      dataIndex: "status",
      key: "status",
      render: (value: string) => (
        <Tag color={value === "ACTIVE" ? "green" : "default"}>
          {value === "ACTIVE" ? t("common.active") : value || t("common.inactive")}
        </Tag>
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
      resource="members"
      headerButtons={({ defaultButtons }) => (
        <>
          {defaultButtons}
          <CreateButton>{t("members.actions.enroll")}</CreateButton>
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

export const MembersCreatePage = () => {
  const t = useTranslate();
  const [current, setCurrent] = useState(0);

  const { formProps, saveButtonProps, onFinish } = useForm({
    resource: "members",
    action: "create",
    redirect: "list",
  });

  const handleFinish = async (values: any) => {
    try {
      await onFinish({ input: values });
      message.success(t("feedback.saved"));
    } catch (error) {
      message.error(t("feedback.error"));
    }
  };

  const steps = [
    {
      title: t("enroll.section.identity"),
      content: (
        <>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                label={t("members.fields.membershipNo")}
                name="membershipNo"
                rules={[{ required: true, message: t("action.required") }]}
                extra={t("field.membershipNo_hint")}
              >
                <Input placeholder="e.g., M001" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label={t("members.fields.nationalId")}
                name="nationalId"
                rules={[
                  { required: true, message: t("action.required") },
                  { len: 16, message: t("field.nationalId_hint") }
                ]}
              >
                <Input placeholder="1234567890123456" maxLength={16} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                label={t("members.fields.firstName")}
                name="firstName"
                rules={[{ required: true, message: t("action.required") }]}
              >
                <Input placeholder="Jean" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label={t("members.fields.lastName")}
                name="lastName"
                rules={[{ required: true, message: t("action.required") }]}
              >
                <Input placeholder="Uwimana" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} md={8}>
              <Form.Item
                label={t("members.fields.gender")}
                name="gender"
                rules={[{ required: true, message: t("action.required") }]}
              >
                <Select placeholder={t("field.gender")}>
                  <Select.Option value="MALE">{t("field.gender_male")}</Select.Option>
                  <Select.Option value="FEMALE">{t("field.gender_female")}</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label={t("members.fields.phone")}
                name="phone"
                rules={[]}
              >
                <Input placeholder="+250 788 123 456" />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label={t("members.fields.igihande")}
                name="igihandeId"
                rules={[{ required: true, message: t("action.required") }]}
              >
                <Select placeholder={t("members.fields.igihande")}>
                  <Select.Option value="Technology">Technology</Select.Option>
                  <Select.Option value="Healthcare">Healthcare</Select.Option>
                  <Select.Option value="Finance">Finance</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </>
      ),
    },
  ];

  return (
    <Create
      resource="members"
      title={t("members.actions.enroll")}
      breadcrumb={false}
      headerButtons={[]}
      footerButtons={[]}
    >
      <Form {...formProps} layout="vertical" onFinish={handleFinish}>
        <div style={{ minHeight: 400 }}>
          {steps[current].content}
        </div>

        <div style={{ marginTop: 24, textAlign: "right" }}>
          <Button type="primary" htmlType="submit" {...saveButtonProps}>
            {t("members.actions.enroll")}
          </Button>
        </div>
      </Form>
    </Create>
  );
};

export const MembersEditPage = () => {
  const { formProps, saveButtonProps } = useForm({
    resource: "members",
    action: "edit",
    redirect: "list",
  });

  return (
    <Card title="Edit Member">
      <Form {...formProps} layout="vertical">
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Membership Number"
              name="membershipNo"
              rules={[{ required: true, message: "Please enter membership number" }]}
            >
              <Input placeholder="e.g., M001" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="National ID"
              name="nationalId"
              rules={[
                { required: true, message: "Please enter national ID" },
                { len: 16, message: "National ID must be 16 digits" }
              ]}
            >
              <Input placeholder="1234567890123456" maxLength={16} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: "Please enter first name" }]}
            >
              <Input placeholder="Jean" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: "Please enter last name" }]}
            >
              <Input placeholder="Uwimana" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} md={8}>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[{ required: true, message: "Please select gender" }]}
            >
              <Select placeholder="Select gender">
                <Select.Option value="MALE">Male</Select.Option>
                <Select.Option value="FEMALE">Female</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={8}>
            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[]}
            >
              <Input placeholder="+250 788 123 456" />
            </Form.Item>
          </Col>
          <Col xs={24} md={8}>
            <Form.Item
              label="Status"
              name="status"
            >
              <Select placeholder="Select status">
                <Select.Option value="ACTIVE">Active</Select.Option>
                <Select.Option value="INACTIVE">Inactive</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Province"
              name="province"
              rules={[{ required: true, message: "Please enter province" }]}
            >
              <Input placeholder="Kigali City" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="District"
              name="district"
              rules={[{ required: true, message: "Please enter district" }]}
            >
              <Input placeholder="Gasabo" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Igihande"
              name="igihandeId"
              rules={[{ required: true, message: "Please select an Igihande" }]}
            >
              <Select placeholder="Select Igihande">
                <Select.Option value="1">Igihande 1</Select.Option>
                <Select.Option value="2">Igihande 2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Marital Status"
              name="maritalStatus"
              rules={[{ required: true, message: "Please select marital status" }]}
            >
              <Select placeholder="Select marital status">
                <Select.Option value="SINGLE">Single</Select.Option>
                <Select.Option value="MARRIED">Married</Select.Option>
                <Select.Option value="WIDOWED">Widowed</Select.Option>
                <Select.Option value="DIVORCED">Divorced</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <div style={{ textAlign: "right", marginTop: 24 }}>
          <Button type="primary" htmlType="submit" {...saveButtonProps}>
            Save Changes
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export const MembersShowPage = () => {
  const t = useTranslate();
  const { query } = useShow({
    resource: "members",
  });

  const memberData = query?.data?.data;

  if (query?.isLoading) {
    return <Card loading />;
  }

  return (
    <Show
      resource="members"
      title={t("members.actions.show")}
    >
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <Avatar
              size={120}
              src={memberData?.photoUrl}
              icon={<UserOutlined />}
            >
              {!memberData?.photoUrl && memberData?.firstName?.charAt(0)?.toUpperCase()}
            </Avatar>
            <div style={{ marginTop: 16 }}>
              <Text strong style={{ fontSize: 18 }}>
                {memberData?.firstName} {memberData?.lastName}
              </Text>
              <br />
              <Text type="secondary">#{memberData?.membershipNo || "N/A"}</Text>
              <br />
              <Tag color={memberData?.status === "ACTIVE" ? "green" : "default"} style={{ marginTop: 8 }}>
                {memberData?.status === "ACTIVE" ? t("common.active") : t("common.inactive")}
              </Tag>
            </div>
          </div>
        </Col>

        <Col xs={24} md={16}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <div>
                <Text strong>{t("members.fields.phone")}:</Text>
                <br />
                <Text>{memberData?.phone || t("feedback.noData")}</Text>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div>
                <Text strong>{t("members.fields.igihande")}:</Text>
                <br />
                <Tag color="blue">{memberData?.igihande?.name || t("common.notAssigned")}</Tag>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div>
                <Text strong>{t("members.fields.nationalId")}:</Text>
                <br />
                <Text>{memberData?.nationalId || t("feedback.noData")}</Text>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div>
                <Text strong>{t("members.fields.gender")}:</Text>
                <br />
                <Text>{memberData?.gender ? t(`field.gender_${memberData.gender.toLowerCase()}`) : t("feedback.noData")}</Text>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Show>
  );
};
