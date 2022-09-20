import * as Styled from "./TimeEntry.styled";
import BinIcon from "../../../public/icons/bin.svg";

interface EntryProps {
  client: string;
  startTime: string;
  stopTime: string;
}

export const TimeEntry = ({ client, startTime, stopTime }: EntryProps) => {
  return (
    <Styled.Container>
      <Styled.Title>{client}</Styled.Title>
      <Styled.DateContainer>
        <Styled.Data>
          <Styled.Time>
            {startTime}-{stopTime}
          </Styled.Time>
          <Styled.Hours>08:00</Styled.Hours>
        </Styled.Data>
        <BinIcon />
      </Styled.DateContainer>
    </Styled.Container>
  );
};
