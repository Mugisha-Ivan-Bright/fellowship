import gql from "graphql-tag";

export const MEMBERS_LIST_QUERY = gql`
  query MembersList($search: String, $status: MemberStatus, $igihandeId: ID) {
    members(search: $search, status: $status, igihandeId: $igihandeId) {
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

export const IGIHANDE_LIST_QUERY = gql`
  query IgihandeList {
    igihande {
      id
      name
      leader {
        id
        name
      }
      createdAt
    }
  }
`;

export const ATTENDANCE_LIST_QUERY = gql`
  query AttendanceList($serviceId: ID!) {
    attendance(serviceId: $serviceId) {
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
`;

export const DEDICATIONS_LIST_QUERY = gql`
  query DedicationsList($memberId: ID!) {
    dedications(memberId: $memberId) {
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
`;

export const TASKS_QUERY = gql`
  query TasksList($stage: TaskStage) {
    tasks(stage: $stage) {
      id
      title
      description
      stage
      priority
      dueDate
      assignedTo {
        id
        name
      }
      createdBy {
        id
        name
      }
      createdAt
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

export const USERS_SELECT_QUERY = gql`
  query UsersSelect {
    users {
      id
      name
      avatarUrl
    }
  }
`;

export const TASK_STAGES_SELECT_QUERY = gql`
  query TaskStagesSelect {
    taskStages {
      id
      title
    }
  }
`;
