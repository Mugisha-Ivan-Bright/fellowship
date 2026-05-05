import gql from "graphql-tag";

// Note: UpdateUser mutation disabled as it is not implemented in the current schema
export const UPDATE_USER_MUTATION = gql`
  query DummyUserUpdate {
    me {
      id
    }
  }
`;
