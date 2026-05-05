import gql from "graphql-tag";

export const CREATE_MEMBER_MUTATION = gql`
  mutation CreateOneMember($input: CreateOneMemberInput!) {
    createOneMember(input: $input) {
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
  mutation UpdateOneMember($id: ID!, $input: UpdateOneMemberInput!) {
    updateOneMember(id: $id, input: $input) {
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
  mutation CreateOneIgihande($name: String!, $leaderId: ID) {
    createOneIgihande(name: $name, leaderId: $leaderId) {
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
  mutation UpdateOneIgihande($id: ID!, $name: String, $leaderId: ID) {
    updateOneIgihande(id: $id, name: $name, leaderId: $leaderId) {
      id
      name
    }
  }
`;

export const CREATE_DEDICATION_MUTATION = gql`
  mutation CreateOneDedication($input: CreateOneDedicationInput!) {
    createOneDedication(input: $input) {
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
  mutation CreateOneTask($input: CreateOneTaskInput!) {
    createOneTask(input: $input) {
      id
      title
      stageId
      priority
    }
  }
`;

export const UPDATE_TASK_MUTATION = gql`
  mutation UpdateOneTask($input: UpdateOneTaskInput!) {
    updateOneTask(input: $input) {
      id
      title
      description
      stageId
      dueDate
    }
  }
`;

export const UPDATE_TASK_STAGE_MUTATION = gql`
  mutation UpdateTaskStage($id: ID!, $stage: TaskStageEnum!) {
    updateTaskStage(id: $id, stage: $stage) {
      id
      stageId
    }
  }
`;