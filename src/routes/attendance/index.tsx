import React from "react";
import {
  CreateButton,
  List,
  useTable,
  Create,
  useForm,
} from "@refinedev/antd";
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

export const AttendanceListPage = () => {
  const { tableProps } = useTable({
    resource: "contacts", // Map to demo contacts resource
  });

  const columns = [
    {
      title: "Service/Event",
      dataIndex: "name",
      key: "name",
      render: (value: string, record: any) => (
        <Space>
          <CalendarOutlined style={{ color: "#1B6B3A" }} />
          <div>
            <Text strong>{value}</Text>
            <br />
            <Text type="secondary">{record.jobTitle || "Sunday Service"}</Text>
          </div>
        </Space>
      ),
    },
    {
      title: "Date",
      dataIndex: "phone", // Map phone field to date
      key: "date",
      render: (value: string) => (
        <Text>{value || dayjs().format("YYYY-MM-DD")}</Text>
      ),
    },
    {
      title: "Member",
      dataIndex: "email", // Map email field to member info
      key: "member",
      render: (value: string, record: any) => (
        <div>
          <Text>{record.company?.name || value}</Text>
          <br />
          <Text type="secondary">{value}</Text>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (value: string) => {
        const color = value === "CUSTOMER" ? "green" : value === "LEAD" ? "orange" : "default";
        const text = value === "CUSTOMER" ? "Present" : value === "LEAD" ? "Late" : "Absent";
        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: "Recorded",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (value: string) => (
        <Text type="secondary">
          {value ? dayjs(value).format("MMM DD, YYYY") : "Today"}
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
              title="Today's Attendance"
              value={0}
              prefix={<UserOutlined />}
              valueStyle={{ color: "#1B6B3A" }}
            />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card>
            <Statistic
              title="This Week"
              value={0}
              prefix={<CheckSquareOutlined />}
              valueStyle={{ color: "#52c41a" }}
            />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card>
            <Statistic
              title="This Month"
              value={0}
              prefix={<CalendarOutlined />}
              valueStyle={{ color: "#1890ff" }}
            />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card>
            <Statistic
              title="Attendance Rate"
              value={0}
              suffix="%"
              valueStyle={{ color: "#722ed1" }}
            />
          </Card>
        </Col>
      </Row>

      <List
        resource="contacts"
        title="Attendance Records"
        headerButtons={({ defaultButtons }) => (
          <>
            {defaultButtons}
            <CreateButton>Record Attendance</CreateButton>
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
              `${range[0]}-${range[1]} of ${total} attendance records`,
          }}
        />
      </List>
    </div>
  );
};

export const AttendanceCreatePage = () => {
  const { formProps, saveButtonProps, onFinish } = useForm({
    resource: "contacts", // Map to demo contacts resource
    action: "create",
    redirect: "list",
  });

  const handleFinish = async (values: any) => {
    // Map Fellowship form data to demo contact fields
    const mappedValues = {
      name: values.serviceName, // Service/Event name
      email: values.memberInfo, // Member identifier
      phone: values.serviceDate, // Date of service
      jobTitle: values.serviceType, // Service type
      status: values.attendanceStatus, // Attendance status
    };

    try {
      await onFinish(mappedValues);
    } catch (error) {
      console.error("Failed to record attendance:", error);
    }
  };

  return (
    <Create
      resource="contacts"
      title="Record Attendance"
      breadcrumb={false}
    >
      <Form {...formProps} layout="vertical" onFinish={handleFinish}>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Service/Event Name"
              name="serviceName"
              rules={[{ required: true, message: "Please enter service name" }]}
              initialValue="Sunday Service"
            >
              <Input placeholder="e.g., Sunday Service, Prayer Meeting" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Service Type"
              name="serviceType"
              rules={[{ required: true, message: "Please select service type" }]}
              initialValue="Sunday Service"
            >
              <Select placeholder="Select service type">
                <Select.Option value="Sunday Service">Sunday Service</Select.Option>
                <Select.Option value="Prayer Meeting">Prayer Meeting</Select.Option>
                <Select.Option value="Bible Study">Bible Study</Select.Option>
                <Select.Option value="Special Event">Special Event</Select.Option>
                <Select.Option value="Youth Meeting">Youth Meeting</Select.Option>
                <Select.Option value="Women's Meeting">Women's Meeting</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Service Date"
              name="serviceDate"
              rules={[{ required: true, message: "Please select service date" }]}
              initialValue={dayjs().format("YYYY-MM-DD")}
            >
              <DatePicker
                style={{ width: "100%" }}
                format="YYYY-MM-DD"
                placeholder="Select date"
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Member"
              name="memberInfo"
              rules={[{ required: true, message: "Please select or enter member" }]}
              extra="Select from list or enter member name/ID"
            >
              <Select
                showSearch
                placeholder="Search and select member"
                optionFilterProp="children"
                allowClear
              >
                <Select.Option value="Jean Uwimana">Jean Uwimana (M001)</Select.Option>
                <Select.Option value="Marie Mukamana">Marie Mukamana (M002)</Select.Option>
                <Select.Option value="Paul Nzeyimana">Paul Nzeyimana (M003)</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Attendance Status"
              name="attendanceStatus"
              rules={[{ required: true, message: "Please select attendance status" }]}
              initialValue="CUSTOMER"
            >
              <Select placeholder="Select attendance status">
                <Select.Option value="CUSTOMER">Present</Select.Option>
                <Select.Option value="LEAD">Late</Select.Option>
                <Select.Option value="UNQUALIFIED">Absent</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Notes"
              name="notes"
              extra="Optional notes about attendance"
            >
              <Input.TextArea
                rows={2}
                placeholder="e.g., Arrived during prayer, Left early for work"
              />
            </Form.Item>
          </Col>
        </Row>

        <div style={{ textAlign: "right", marginTop: 24 }}>
          <Button type="primary" htmlType="submit" {...saveButtonProps}>
            Record Attendance
          </Button>
        </div>
      </Form>
    </Create>
  );
};
