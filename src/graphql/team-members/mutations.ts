import { gql } from "@apollo/client";

export const ADD_TEAM_MEMBER = gql`
  mutation CreateTeamMember(
    $firstname: String!
    $lastname: String!
    $client: String!
    $email: String!
  ) {
    createTeamMember(firstname: $firstname, lastname: $lastname, client: $client, email: $email) {
      firstname
      lastname
      id
      client
      email
    }
  }
`;
