import gql from "graphql-tag";

export const DASHBOARD_LATEST_ACTIVITIES_DEDICATIONS_QUERY = gql`
  query DashboardLatestActivitiesDedications(
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
          photoUrl
        }
      }
    }
  }
`;

// Note: Audit query removed as it is not implemented in the current schema
