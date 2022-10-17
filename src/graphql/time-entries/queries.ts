import { gql } from "@apollo/client";

export const GET_TIME_ENTRIES = gql`
  query getTimeEntries {
    allTimeEntries {
      id
      activity
      client
      endTime
      startTime
    }
  }
`;
