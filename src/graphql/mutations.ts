import gql from "graphql-tag";

// Fellowship Member mutations (mapped to demo Company mutations)
export const CREATE_MEMBER_MUTATION = gql`
  mutation CreateMember($input: CreateOneCompanyInput!) {
    createOneCompany(input: $input) {
      id
      name
      avatarUrl
      totalRevenue # membership number
      industry # igihande
      businessType # status
      country # phone
      website # national ID
      companySize # gender
    }
  }
`;

export const UPDATE_MEMBER_MUTATION = gql`
  mutation UpdateMember($input: UpdateOneCompanyInput!) {
    updateOneCompany(input: $input) {
      id
      name
      avatarUrl
      totalRevenue # membership number
      industry # igihande
      businessType # status
      country # phone
      website # national ID
      companySize # gender
    }
  }
`;

// Fellowship Attendance mutations (mapped to demo Contact mutations)
export const CREATE_ATTENDANCE_MUTATION = gql`
  mutation CreateAttendance($input: CreateOneContactInput!) {
    createOneContact(input: $input) {
      id
      name # Service/Event name
      email # Member ID or name
      phone # Date of service
      jobTitle # Service type
      status # Attendance status
      company {
        id
        name
      }
    }
  }
`;

// Fellowship Igihande mutations (mapped to demo Task Stage mutations)
export const CREATE_IGIHANDE_MUTATION = gql`
  mutation CreateIgihande($input: CreateOneTaskStageInput!) {
    createOneTaskStage(input: $input) {
      id
      title
    }
  }
`;

export const UPDATE_IGIHANDE_MUTATION = gql`
  mutation UpdateIgihande($input: UpdateOneTaskStageInput!) {
    updateOneTaskStage(input: $input) {
      id
      title
    }
  }
`;

// Fellowship Dedications mutations (mapped to demo Deal mutations)
export const CREATE_DEDICATION_MUTATION = gql`
  mutation CreateDedication($input: CreateOneDealInput!) {
    createOneDeal(input: $input) {
      id
      title # Dedication type
      value # Amount or description
      stage {
        id
        title
      }
      company {
        id
        name
      }
    }
  }
`;

// Fellowship Task mutations (keep existing)
export const CREATE_TASK_MUTATION = gql`
  mutation CreateTask($input: CreateOneTaskInput!) {
    createOneTask(input: $input) {
      id
      title
      stage {
        id
        title
      }
    }
  }
`;

export const UPDATE_TASK_MUTATION = gql`
  mutation UpdateTask($input: UpdateOneTaskInput!) {
    updateOneTask(input: $input) {
      id
      title
      completed
      description
      dueDate
      stage {
        id
        title
      }
      users {
        id
        name
        avatarUrl
      }
    }
  }
`;

export const UPDATE_TASK_STAGE_MUTATION = gql`
  mutation UpdateTaskStage($input: UpdateOneTaskInput!) {
    updateOneTask(input: $input) {
      id
    }
  }
`;