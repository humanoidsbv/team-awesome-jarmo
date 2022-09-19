import * as Styled from "./TimeEntry.styled";
import BinIcon from "../../../public/icons/bin.svg";

interface EntryProps {
  client: string;
  id: number;
}

export const TimeEntry = ({ client, id }: EntryProps) => {
  return (
    <Styled.Main>
      <Styled.DayContainer>
        <Styled.Title>Friday 29-07 Today</Styled.Title>
        <Styled.Title>08:00</Styled.Title>
      </Styled.DayContainer>
      <Styled.Container>
        <Styled.Title key={id}>{client}</Styled.Title>
        <Styled.DateContainer>
          <Styled.Data>
            <Styled.Time>09:00-17:00</Styled.Time>
            <Styled.Hours>08:00</Styled.Hours>
          </Styled.Data>
          <BinIcon />
        </Styled.DateContainer>
      </Styled.Container>
    </Styled.Main>
  );
};
