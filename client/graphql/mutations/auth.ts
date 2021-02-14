import { gql } from "@apollo/client";

export const SIGN_UP = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      accessToken
    }
  }
`;
