import gql from "graphql-tag";

export const UPDATE_TASK_MUTATION = gql`
  mutation UpdateTask($input: UpdateOneTaskInput!) {
    updateOneTask(input: $input) {
      id
      title
      description
      dueDate
      priority
      stage {
        id
        title
      }
      assignedTo {
        id
        name
        avatarUrl
      }
    }
  }
`;
