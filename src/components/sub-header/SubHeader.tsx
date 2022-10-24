import { Button } from "../button/Button";
import * as Styled from "./SubHeader.styled";

type SubHeaderProps = {
  title: string;
  amount: number;
  subtitle: string;
  handleModal: () => void;
};

export const SubHeader = ({ title, amount, subtitle, handleModal }: SubHeaderProps) => {
  return (
    <Styled.SubHeader data-cy="sub-header">
      <Styled.EntryContainer>
        <Styled.Title>{title}</Styled.Title>
        <Styled.SubTitle>
          <Styled.Divider>|</Styled.Divider>
          {amount} {subtitle}
        </Styled.SubTitle>
      </Styled.EntryContainer>
      <Styled.ButtonWrapper>
        <Button data-cy="add-button" hasIcon label="New time entry" onClick={() => handleModal()} />
      </Styled.ButtonWrapper>
    </Styled.SubHeader>
  );
};
