import { useSearchParams } from "react-router";

import { useModalForm } from "@refinedev/antd";
import { useNavigation } from "@refinedev/core";

import { Form, Input, Select, DatePicker, Modal } from "antd";
import dayjs from "dayjs";

import { CREATE_TASK_MUTATION } from "./queries";

export const TasksCreatePage = () => {
  const [searchParams] = useSearchParams();
  const { list } = useNavigation();
  const { formProps, modalProps, close } = useModalForm({
    action: "create",
    defaultVisible: true,
    meta: {
      operation: "CreateTask",
      gqlMutation: CREATE_TASK_MUTATION,
    },
  });

  return (
    <Modal
      {...modalProps}
      onCancel={() => {
        close();
        list("tasks", "replace");
      }}
      title="Add New Task"
      width={512}
    >
      <Form
        {...formProps}
        layout="vertical"
        onFinish={(values) => {
          const payload: any = {
            title: values.title,
            description: values.description,
            priority: values.priority,
            dueDate: values.dueDate ? values.dueDate.toISOString() : undefined,
            assignedToId: values.assignedToId || undefined,
            relatedMemberId: values.relatedMemberId || undefined,
          };

          // Wrap in `task` to match client-generated `CreateOneTaskInput` shape
          formProps?.onFinish?.({ task: payload });
        }}
      >
        <Form.Item
          label="Task Title"
          name="title"
          rules={[{ required: true, message: "Please enter task title" }]}
        >
          <Input placeholder="e.g., Follow up with inactive members" />
        </Form.Item>

        <Form.Item
          label="Task Type"
          name="taskType"
          extra="Select the type of church task"
        >
          <Select placeholder="Select task type">
            <Select.Option value="member-care">Member Care</Select.Option>
            <Select.Option value="igihande">Igihande Management</Select.Option>
            <Select.Option value="follow-up">Follow-up</Select.Option>
            <Select.Option value="service-prep">Service Preparation</Select.Option>
            <Select.Option value="admin">Administrative</Select.Option>
            <Select.Option value="outreach">Outreach</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Due Date"
          name="dueDate"
          extra="When should this task be completed?"
        >
          <DatePicker
            style={{ width: "100%" }}
            placeholder="Select due date"
            disabledDate={(current) => current && current < dayjs().startOf('day')}
          />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          extra="Optional details about the task"
        >
          <Input.TextArea
            rows={3}
            placeholder="e.g., Contact members who haven't attended in the last 3 weeks"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
