import { gql } from "@apollo/client";

export const GET_TEAM_MEMBERS = gql`
  query getTeamMembers {
    allTeamMembers {
      id
      firstname
      lastname
      client
      email
    }
  }
`;
