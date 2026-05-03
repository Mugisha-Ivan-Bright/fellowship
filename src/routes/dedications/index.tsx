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
  Statistic,
  InputNumber
} from "antd";
import { GiftOutlined, DollarOutlined, UserOutlined, CalendarOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const { Text } = Typography;

export const DedicationsListPage = () => {
  const { tableProps } = useTable({
    resource: "deals", // Map to demo deals resource
  });

  const columns = [
    {
      title: "Member",
      dataIndex: ["company", "name"],
      key: "member",
      render: (value: string, record: any) => (
        <Space>
          <UserOutlined style={{ color: "#1B6B3A" }} />
          <div>
            <Text strong>{value}</Text>
            <br />
            <Text type="secondary">{record.dealContact?.name}</Text>
          </div>
        </Space>
      ),
    },
    {
      title: "Type",
      dataIndex: "title",
      key: "type",
      render: (value: string, record: any) => (
        <div>
          <Text strong>{value}</Text>
          <br />
          <Tag color="blue">{record.stage?.title || "General"}</Tag>
        </div>
      ),
    },
    {
      title: "Amount/Description",
      dataIndex: "value",
      key: "value",
      render: (value: number) => (
        <Text strong style={{ color: "#1B6B3A" }}>
          {value ? `${value.toLocaleString()} RWF` : "N/A"}
        </Text>
      ),
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "date",
      render: (value: string, record: any) => (
        <div>
          <Text>{value ? dayjs(value).format("MMM DD, YYYY") : "Today"}</Text>
          <br />
          <Text type="secondary">
            {record.closeDateMonth && record.closeDateYear
              ? `${record.closeDateMonth}/${record.closeDateYear}`
              : "Current"
            }
          </Text>
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
              title="Today's Dedications"
              value={0}
              prefix={<GiftOutlined />}
              suffix="RWF"
              valueStyle={{ color: "#1B6B3A" }}
            />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card>
            <Statistic
              title="This Week"
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
              title="This Month"
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
              title="Total Members"
              value={0}
              prefix={<UserOutlined />}
              valueStyle={{ color: "#722ed1" }}
            />
          </Card>
        </Col>
      </Row>

      <List
        resource="deals"
        title="Dedications & Contributions"
        headerButtons={({ defaultButtons }) => (
          <>
            {defaultButtons}
            <CreateButton>Record Dedication</CreateButton>
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
              `${range[0]}-${range[1]} of ${total} dedication records`,
          }}
        />
      </List>
    </div>
  );
};

export const DedicationsCreatePage = () => {
  const { formProps, saveButtonProps, onFinish } = useForm({
    resource: "deals", // Map to demo deals resource
    action: "create",
    redirect: "list",
  });

  const handleFinish = async (values: any) => {
    // Map Fellowship form data to demo deal fields
    const mappedValues = {
      title: values.dedicationType, // Dedication type
      value: values.amount, // Amount
      closeDateMonth: dayjs().month() + 1,
      closeDateYear: dayjs().year(),
    };

    try {
      await onFinish(mappedValues);
    } catch (error) {
      console.error("Failed to record dedication:", error);
    }
  };

  return (
    <Create
      resource="deals"
      title="Record Dedication"
      breadcrumb={false}
    >
      <Form {...formProps} layout="vertical" onFinish={handleFinish}>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Member"
              name="memberId"
              rules={[{ required: true, message: "Please select member" }]}
            >
              <Select
                showSearch
                placeholder="Search and select member"
                optionFilterProp="children"
                allowClear
              >
                <Select.Option value="1">Jean Uwimana (M001)</Select.Option>
                <Select.Option value="2">Marie Mukamana (M002)</Select.Option>
                <Select.Option value="3">Paul Nzeyimana (M003)</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Dedication Type"
              name="dedicationType"
              rules={[{ required: true, message: "Please select dedication type" }]}
            >
              <Select placeholder="Select dedication type">
                <Select.Option value="Tithing">Tithing (10%)</Select.Option>
                <Select.Option value="Offering">Offering</Select.Option>
                <Select.Option value="Special Offering">Special Offering</Select.Option>
                <Select.Option value="Building Fund">Building Fund</Select.Option>
                <Select.Option value="Mission Support">Mission Support</Select.Option>
                <Select.Option value="Volunteering">Volunteering</Select.Option>
                <Select.Option value="Service Role">Service Role</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Amount (RWF)"
              name="amount"
              rules={[
                { required: true, message: "Please enter amount" },
                { type: "number", min: 0, message: "Amount must be positive" }
              ]}
            >
              <InputNumber
                style={{ width: "100%" }}
                placeholder="e.g., 5000"
                formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={(value) => Number(value!.replace(/\$\s?|(,*)/g, ''))}
                min={0}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Date"
              name="dedicationDate"
              rules={[{ required: true, message: "Please select date" }]}
              initialValue={dayjs()}
            >
              <DatePicker
                style={{ width: "100%" }}
                format="YYYY-MM-DD"
                placeholder="Select date"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Category"
              name="category"
              initialValue="General"
            >
              <Select placeholder="Select category">
                <Select.Option value="General">General</Select.Option>
                <Select.Option value="Sunday Service">Sunday Service</Select.Option>
                <Select.Option value="Special Event">Special Event</Select.Option>
                <Select.Option value="Monthly Commitment">Monthly Commitment</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Payment Method"
              name="paymentMethod"
              initialValue="Cash"
            >
              <Select placeholder="Select payment method">
                <Select.Option value="Cash">Cash</Select.Option>
                <Select.Option value="Mobile Money">Mobile Money</Select.Option>
                <Select.Option value="Bank Transfer">Bank Transfer</Select.Option>
                <Select.Option value="Check">Check</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24}>
            <Form.Item
              label="Notes"
              name="notes"
              extra="Optional notes about this dedication"
            >
              <Input.TextArea
                rows={3}
                placeholder="e.g., Monthly tithing commitment, Special thanksgiving offering"
              />
            </Form.Item>
          </Col>
        </Row>

        <div style={{ textAlign: "right", marginTop: 24 }}>
          <Button type="primary" htmlType="submit" {...saveButtonProps}>
            Record Dedication
          </Button>
        </div>
      </Form>
    </Create>
  );
};
