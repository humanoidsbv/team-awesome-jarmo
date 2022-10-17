import { gql } from "@apollo/client";

export const ADD_TIME_ENTRY = gql`
  mutation CreateTimeEntry(
    $client: String!
    $activity: String!
    $startTime: String!
    $endTime: String!
  ) {
    createNewTimeEntry(
      client: $client
      activity: $activity
      startTime: $startTime
      endTime: $endTime
    ) {
      client
      activity
      id
      startTime
      endTime
    }
  }
`;
