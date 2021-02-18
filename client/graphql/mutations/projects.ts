import { gql } from "@apollo/client";

export const CREATE_PROJECT = gql`
  mutation CreateProject(
    $name: String!
    $description: String!
    $ownerId: Int!
  ) {
    createProject(name: $name, description: $description, ownerId: $ownerId) {
      name
      owner {
        username
      }
    }
  }
`;
