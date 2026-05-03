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
import { useShow } from "@refinedev/core";
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
  const { tableProps } = useTable({
    resource: "taskStages", // Map to demo taskStages resource
  });

  const columns = [
    {
      title: "Igihande Name",
      dataIndex: "title",
      key: "title",
      render: (value: string, record: any) => (
        <Space>
          <TeamOutlined style={{ color: "#1B6B3A" }} />
          <div>
            <Text strong>{value}</Text>
            <br />
            <Text type="secondary">ID: {record.id}</Text>
          </div>
        </Space>
      ),
    },
    {
      title: "Members",
      dataIndex: "memberCount",
      key: "memberCount",
      render: () => (
        <Tag color="blue">
          <UserOutlined /> 0 members
        </Tag>
      ),
    },
    {
      title: "Leader",
      dataIndex: "leader",
      key: "leader",
      render: () => (
        <Text type="secondary">Not assigned</Text>
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
      resource="taskStages"
      title="Igihande (Cell Groups)"
      headerButtons={({ defaultButtons }) => (
        <>
          {defaultButtons}
          <CreateButton>Create New Igihande</CreateButton>
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
            `${range[0]}-${range[1]} of ${total} igihande groups`,
        }}
      />
    </List>
  );
};

export const IgihandeCreatePage = () => {
  const { formProps, saveButtonProps, onFinish } = useForm({
    resource: "taskStages", // Map to demo taskStages resource
    action: "create",
    redirect: "list",
  });

  const handleFinish = async (values: any) => {
    // Map Fellowship form data to demo taskStage fields
    const mappedValues = {
      title: values.name, // Map igihande name to title
    };

    try {
      await onFinish(mappedValues);
    } catch (error) {
      console.error("Failed to create igihande:", error);
    }
  };

  return (
    <Create
      resource="taskStages"
      title="Create New Igihande"
      breadcrumb={false}
    >
      <Form {...formProps} layout="vertical" onFinish={handleFinish}>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Igihande Name"
              name="name"
              rules={[
                { required: true, message: "Please enter igihande name" },
                { min: 2, message: "Name must be at least 2 characters" }
              ]}
              extra="Enter a descriptive name for this cell group"
            >
              <Input placeholder="e.g., Igihande rya Kigali, Igihande rya Gasabo" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Leader Name"
              name="leaderName"
              extra="Optional - can be assigned later"
            >
              <Input placeholder="e.g., Jean Uwimana" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24}>
            <Form.Item
              label="Description"
              name="description"
              extra="Optional description or meeting location"
            >
              <Input.TextArea
                rows={3}
                placeholder="e.g., Meets every Wednesday at 7 PM in Kigali sector"
              />
            </Form.Item>
          </Col>
        </Row>

        <div style={{ textAlign: "right", marginTop: 24 }}>
          <Button type="primary" htmlType="submit" {...saveButtonProps}>
            Create Igihande
          </Button>
        </div>
      </Form>
    </Create>
  );
};

export const IgihandeEditPage = () => {
  const { formProps, saveButtonProps, onFinish } = useForm({
    resource: "taskStages",
    action: "edit",
    redirect: "list",
  });

  const handleFinish = async (values: any) => {
    // Map Fellowship form data to demo taskStage fields
    const mappedValues = {
      title: values.name, // Map igihande name to title
    };

    try {
      await onFinish(mappedValues);
    } catch (error) {
      console.error("Failed to update igihande:", error);
    }
  };

  return (
    <Edit
      resource="taskStages"
      title="Edit Igihande"
    >
      <Form {...formProps} layout="vertical" onFinish={handleFinish}>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Igihande Name"
              name="name"
              rules={[
                { required: true, message: "Please enter igihande name" },
                { min: 2, message: "Name must be at least 2 characters" }
              ]}
            >
              <Input placeholder="e.g., Igihande rya Kigali" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Leader Name"
              name="leaderName"
            >
              <Input placeholder="e.g., Jean Uwimana" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24}>
            <Form.Item
              label="Description"
              name="description"
            >
              <Input.TextArea
                rows={3}
                placeholder="e.g., Meets every Wednesday at 7 PM in Kigali sector"
              />
            </Form.Item>
          </Col>
        </Row>

        <div style={{ textAlign: "right", marginTop: 24 }}>
          <Button type="primary" htmlType="submit" {...saveButtonProps}>
            Save Changes
          </Button>
        </div>
      </Form>
    </Edit>
  );
};

export const IgihandeShowPage = () => {
  const { query } = useShow({
    resource: "taskStages", // Map to demo taskStages resource
  });

  const igihandeData = query?.data?.data;

  if (query?.isLoading) {
    return <Card loading />;
  }

  return (
    <Show
      resource="taskStages"
      title="Igihande Details"
    >
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card>
            <div style={{ textAlign: "center" }}>
              <TeamOutlined style={{ fontSize: 48, color: "#1B6B3A", marginBottom: 16 }} />
              <div>
                <Text strong style={{ fontSize: 18 }}>
                  {igihandeData?.title}
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
                  title="Total Members"
                  value={0}
                  prefix={<UserOutlined />}
                  valueStyle={{ color: "#1B6B3A" }}
                />
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card>
                <Statistic
                  title="Active Members"
                  value={0}
                  prefix={<UserOutlined />}
                  valueStyle={{ color: "#52c41a" }}
                />
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card>
                <Statistic
                  title="Attendance Rate"
                  value={0}
                  suffix="%"
                  valueStyle={{ color: "#1890ff" }}
                />
              </Card>
            </Col>
          </Row>

          <Card title="Igihande Information" style={{ marginTop: 16 }}>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12}>
                <div>
                  <Text strong>Leader:</Text>
                  <br />
                  <Text>Not assigned</Text>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div>
                  <Text strong>Meeting Schedule:</Text>
                  <br />
                  <Text type="secondary">Not specified</Text>
                </div>
              </Col>
              <Col xs={24}>
                <div>
                  <Text strong>Description:</Text>
                  <br />
                  <Text type="secondary">No description provided</Text>
                </div>
              </Col>
            </Row>
          </Card>

          <Card title="Recent Members" style={{ marginTop: 16 }}>
            <Text type="secondary">No members assigned to this igihande yet.</Text>
          </Card>
        </Col>
      </Row>
    </Show>
  );
};
