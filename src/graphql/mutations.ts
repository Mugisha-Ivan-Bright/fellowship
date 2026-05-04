import gql from "graphql-tag";

export const CREATE_MEMBER_MUTATION = gql`
  mutation CreateMember($input: CreateMemberInput!) {
    createMember(input: $input) {
      id
      membershipNo
      firstName
      lastName
      nationalId
      phone
      gender
      maritalStatus
      status
      igihande {
        id
        name
      }
    }
  }
`;

export const UPDATE_MEMBER_MUTATION = gql`
  mutation UpdateMember($id: ID!, $input: UpdateMemberInput!) {
    updateMember(id: $id, input: $input) {
      id
      firstName
      lastName
      phone
      igihande {
        id
        name
      }
    }
  }
`;

export const CREATE_ATTENDANCE_MUTATION = gql`
  mutation RecordAttendance($serviceId: ID!, $records: [AttendanceRecord!]!) {
    recordAttendance(serviceId: $serviceId, records: $records) {
      id
      present
      notes
      member {
        id
        firstName
      }
    }
  }
`;

export const CREATE_IGIHANDE_MUTATION = gql`
  mutation CreateIgihande($name: String!, $leaderId: ID) {
    createIgihande(name: $name, leaderId: $leaderId) {
      id
      name
      leader {
        id
        name
      }
    }
  }
`;

export const UPDATE_IGIHANDE_MUTATION = gql`
  mutation UpdateIgihande($id: ID!, $name: String, $leaderId: ID) {
    updateIgihande(id: $id, name: $name, leaderId: $leaderId) {
      id
      name
    }
  }
`;

export const CREATE_DEDICATION_MUTATION = gql`
  mutation CreateDedication($input: CreateDedicationInput!) {
    createDedication(input: $input) {
      id
      type
      description
      date
      member {
        id
        firstName
      }
    }
  }
`;

export const CREATE_TASK_MUTATION = gql`
  mutation CreateTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
      title
      stage
      priority
    }
  }
`;

export const UPDATE_TASK_MUTATION = gql`
  mutation UpdateTask($id: ID!, $input: UpdateTaskInput!) {
    updateTask(id: $id, input: $input) {
      id
      title
      description
      stage
      dueDate
    }
  }
`;

export const UPDATE_TASK_STAGE_MUTATION = gql`
  mutation UpdateTaskStage($id: ID!, $stage: TaskStage!) {
    updateTaskStage(id: $id, stage: $stage) {
      id
      stage
    }
  }
`;