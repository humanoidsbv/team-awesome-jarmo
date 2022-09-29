import BinIcon from "../../../public/icons/bin.svg";
import * as Styled from "./TimeEntry.styled";

interface EntryProps {
  client: string;
  startTime: string;
  stopTime: string;
  removeEntry: () => void;
}

export const TimeEntry = ({ client, startTime, stopTime, removeEntry }: EntryProps) => {
  const formattedStartTime = new Date(startTime).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedEndTime = new Date(stopTime).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Styled.Container>
      <Styled.Title>{client}</Styled.Title>
      <Styled.DateContainer>
        <Styled.Data>
          <Styled.Time>
            {formattedStartTime} - {formattedEndTime}
          </Styled.Time>
          <Styled.Hours>08:00</Styled.Hours>
        </Styled.Data>
        <Styled.DeleteButton onClick={removeEntry}>
          <BinIcon />
        </Styled.DeleteButton>
      </Styled.DateContainer>
    </Styled.Container>
  );
};
