import gql from "graphql-tag";

export const MEMBERS_LIST_QUERY = gql`
  query MembersList(
    $filter: MemberFilter
    $sorting: [MemberSort!]
    $paging: OffsetPaging
  ) {
    members(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
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
  }
`;

export const IGIHANDE_LIST_QUERY = gql`
  query IgihandeList(
    $filter: IgihandeFilter
    $sorting: [IgihandeSort!]
    $paging: OffsetPaging
  ) {
    igihandes(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        name
        memberCount
        leader {
          id
          name
        }
        createdAt
      }
    }
  }
`;

export const ATTENDANCE_LIST_QUERY = gql`
  query AttendanceList(
    $filter: AttendanceFilter
    $sorting: [AttendanceSort!]
    $paging: OffsetPaging
  ) {
    attendances(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        present
        notes
        member {
          id
          firstName
          lastName
        }
        service {
          id
          date
          type
        }
        createdAt
      }
    }
  }
`;

export const DEDICATIONS_LIST_QUERY = gql`
  query DedicationsList(
    $filter: DedicationFilter
    $sorting: [DedicationSort!]
    $paging: OffsetPaging
  ) {
    dedications(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        type
        description
        date
        member {
          id
          firstName
          lastName
        }
        createdAt
      }
    }
  }
`;

export const TASKS_QUERY = gql`
  query TasksList(
    $filter: TaskFilter
    $sorting: [TaskSort!]
    $paging: OffsetPaging
  ) {
    tasks(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        title
        description
        stageId
        stage {
          id
          title
        }
        priority
        dueDate
        assignedTo {
          id
          name
          avatarUrl
        }
        createdBy {
          id
          name
        }
        createdAt
        updatedAt
      }
    }
  }
`;

export const DASHBOARD_STATS_QUERY = gql`
  query DashboardStats {
    dashboardStats {
      totalMembers
      activeMembers
      inactiveMembers
      newThisMonth
      totalIgihande
      attendanceRate
    }
  }
`;

export const TASK_STAGES_SELECT_QUERY = gql`
  query TaskStagesSelect(
    $filter: TaskStageFilter
    $sorting: [TaskStageSort!]
    $paging: OffsetPaging
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

export const USERS_SELECT_QUERY = gql`
  query UsersSelect(
    $filter: UserFilter
    $sorting: [UserSort!]
    $paging: OffsetPaging
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
