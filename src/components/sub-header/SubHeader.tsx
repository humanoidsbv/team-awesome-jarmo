import { Button } from "../button/Button";
import * as Styled from "./SubHeader.styled";

type SubHeaderProps = {
  title: string;
  amount: number;
  subtitle: string;
  setIsModalActive: any;
};

export const SubHeader = ({ title, amount, subtitle, setIsModalActive }: SubHeaderProps) => {
  return (
    <Styled.SubHeader>
      <Styled.EntryContainer>
        <Styled.Title>{title}</Styled.Title>
        <Styled.SubTitle>
          <Styled.Divider>|</Styled.Divider>
          {amount} {subtitle}
        </Styled.SubTitle>
      </Styled.EntryContainer>
      <Styled.ButtonWrapper>
        <Button icon label="New time entry" onClick={() => setIsModalActive(true)} />
      </Styled.ButtonWrapper>
    </Styled.SubHeader>
  );
};
