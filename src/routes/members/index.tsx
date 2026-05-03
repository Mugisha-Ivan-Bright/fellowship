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
import { useGo, useShow } from "@refinedev/core";
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
  const { tableProps } = useTable({
    resource: "companies", // Map to demo companies resource
  });

  const columns = [
    {
      title: "Member",
      dataIndex: "name",
      key: "name",
      render: (value: string, record: any) => (
        <Space>
          <Avatar
            size={32}
            src={record.avatarUrl}
            icon={<UserOutlined />}
          >
            {!record.avatarUrl && value?.charAt(0)?.toUpperCase()}
          </Avatar>
          <div>
            <Text strong>{value}</Text>
            <br />
            <Text type="secondary">
              #{record.totalRevenue || "N/A"}
            </Text>
          </div>
        </Space>
      ),
    },
    {
      title: "Phone",
      dataIndex: "country", // Map country field to phone
      key: "phone",
    },
    {
      title: "Igihande",
      dataIndex: "industry", // Map industry field to igihande
      key: "igihande",
      render: (value: string) => (
        <Tag color="blue">{value || "Not assigned"}</Tag>
      ),
    },
    {
      title: "Status",
      dataIndex: "businessType", // Map businessType field to status
      key: "status",
      render: (value: string) => (
        <Tag color={value === "B2B" ? "green" : "default"}>
          {value === "B2B" ? "Active" : value || "Inactive"}
        </Tag>
      ),
    },
    {
      title: "Actions",
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
      resource="companies"
      headerButtons={({ defaultButtons }) => (
        <>
          {defaultButtons}
          <CreateButton>Enroll New Member</CreateButton>
        </>
      )}
    >
      <Table
        {...tableProps}
        columns={columns}
        rowKey="id"
        pagination={{
          ...tableProps.pagination,
          showSizeChanger: true,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} members`,
        }}
      />
    </List>
  );
};

export const MembersCreatePage = () => {
  const [current, setCurrent] = useState(0);

  const { formProps, saveButtonProps, onFinish } = useForm({
    resource: "companies", // Map to demo companies resource
    action: "create",
    redirect: "list",
  });

  const handleStepChange = (step: number) => {
    setCurrent(step);
  };

  const handleFinish = async (values: any) => {
    // Map Fellowship form data to demo company fields
    const mappedValues = {
      name: `${values.firstName} ${values.lastName}`,
      totalRevenue: values.membershipNo,
      industry: values.igihandeId,
      businessType: "B2B", // Default to active
      country: values.phone,
      website: values.nationalId,
      companySize: values.gender,
    };

    try {
      await onFinish(mappedValues);
      message.success("Member enrolled successfully!");
    } catch (error) {
      message.error("Failed to enroll member");
    }
  };

  const steps = [
    {
      title: "Identity & Name",
      content: (
        <>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Membership Number"
                name="membershipNo"
                rules={[{ required: true, message: "Please enter membership number" }]}
                extra="Number from existing paper records"
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
                rules={[{ required: true, message: "Please enter phone number" }]}
              >
                <Input placeholder="+250 788 123 456" />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label="Igihande"
                name="igihandeId"
                rules={[{ required: true, message: "Please select an Igihande" }]}
              >
                <Select placeholder="Select Igihande">
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
      resource="companies"
      title="Enroll New Member"
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
            Enroll Member
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
              rules={[{ required: true, message: "Please enter phone number" }]}
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
  const { query } = useShow({
    resource: "companies", // Map to demo companies resource
  });

  const memberData = query?.data?.data;

  if (query?.isLoading) {
    return <Card loading />;
  }

  return (
    <Show
      resource="companies"
      title="Member Details"
    >
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <Avatar
              size={120}
              src={memberData?.avatarUrl}
              icon={<UserOutlined />}
            >
              {!memberData?.avatarUrl && memberData?.name?.charAt(0)?.toUpperCase()}
            </Avatar>
            <div style={{ marginTop: 16 }}>
              <Text strong style={{ fontSize: 18 }}>
                {memberData?.name}
              </Text>
              <br />
              <Text type="secondary">#{memberData?.totalRevenue || "N/A"}</Text>
              <br />
              <Tag color={memberData?.businessType === "B2B" ? "green" : "default"} style={{ marginTop: 8 }}>
                {memberData?.businessType === "B2B" ? "Active" : "Inactive"}
              </Tag>
            </div>
          </div>
        </Col>

        <Col xs={24} md={16}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <div>
                <Text strong>Phone:</Text>
                <br />
                <Text>{memberData?.country || "Not provided"}</Text>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div>
                <Text strong>Igihande:</Text>
                <br />
                <Tag color="blue">{memberData?.industry || "Not assigned"}</Tag>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div>
                <Text strong>Website:</Text>
                <br />
                <Text>{memberData?.website || "Not provided"}</Text>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div>
                <Text strong>Company Size:</Text>
                <br />
                <Text>{memberData?.companySize || "Not specified"}</Text>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Show>
  );
};
