import gql from "graphql-tag";

// Fellowship Members (mapped to demo Companies)
export const MEMBERS_LIST_QUERY = gql`
  query MembersList(
    $filter: CompanyFilter!
    $sorting: [CompanySort!]
    $paging: OffsetPaging!
  ) {
    companies(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        name
        avatarUrl
        # Map company fields to member fields
        # name -> member name
        # avatarUrl -> member photo
        # We'll use other fields creatively for Fellowship data
        totalRevenue # Can represent membership number
        industry # Can represent igihande
        businessType # Can represent status
        country # Can represent phone
        website # Can represent national ID
        companySize # Can represent gender
      }
    }
  }
`;

// Fellowship Attendance (mapped to demo Contacts)
export const ATTENDANCE_LIST_QUERY = gql`
  query AttendanceList(
    $filter: ContactFilter!
    $sorting: [ContactSort!]
    $paging: OffsetPaging!
  ) {
    contacts(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        name # Service/Event name
        email # Member ID or name
        phone # Date of service
        jobTitle # Service type
        company {
          id
          name # Member name
        }
        status # Attendance status
        createdAt
      }
    }
  }
`;

// Fellowship Igihande (mapped to demo Task Stages)
export const IGIHANDE_LIST_QUERY = gql`
  query IgihandeList(
    $filter: TaskStageFilter!
    $sorting: [TaskStageSort!]
    $paging: OffsetPaging!
  ) {
    taskStages(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        title # Igihande name
      }
    }
  }
`;

// Fellowship Dedications (mapped to demo Deals)
export const DEDICATIONS_LIST_QUERY = gql`
  query DedicationsList(
    $filter: DealFilter!
    $sorting: [DealSort!]
    $paging: OffsetPaging!
  ) {
    deals(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        title # Dedication type
        value # Amount or description
        stage {
          id
          title # Category (Tithing, Offering, etc.)
        }
        company {
          id
          name # Member name
        }
        dealContact {
          id
          name # Contact info
        }
        createdAt
        closeDateMonth
        closeDateYear
      }
    }
  }
`;

// Fellowship Tasks (keep existing)
export const TASKS_QUERY = gql`
  query Tasks(
    $filter: TaskFilter!
    $sorting: [TaskSort!]
    $paging: OffsetPaging!
  ) {
    tasks(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        title
        description
        dueDate
        completed
        stageId
        users {
          id
          name
          avatarUrl
        }
        createdAt
        updatedAt
      }
    }
  }
`;

// Users for dropdowns
export const USERS_SELECT_QUERY = gql`
  query UsersSelect(
    $filter: UserFilter!
    $sorting: [UserSort!]
    $paging: OffsetPaging!
  ) {
    users(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        name
        avatarUrl
      }
    }
  }
`;

export const TASK_STAGES_SELECT_QUERY = gql`
  query TaskStagesSelect(
    $filter: TaskStageFilter!
    $sorting: [TaskStageSort!]
    $paging: OffsetPaging!
  ) {
    taskStages(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        title
      }
    }
  }
`;
