import { useState } from "react";
import { Button } from "../button/Button";
import * as Styled from "./SubHeader.styled";
import { Modal } from "../modal/Modal";

type SubHeaderProps = {
  title: string;
  amount: number;
  subtitle: string;
};

export const SubHeader = ({ title, amount, subtitle }: SubHeaderProps) => {
  const [isModalActive, setIsModalActive] = useState(false);
  return (
    <Styled.SubHeader>
      <Styled.EntrieHolder>
        <Styled.Title>{title}</Styled.Title>
        <Styled.SubTitle>
          <Styled.Divider>|</Styled.Divider>
          {amount} {subtitle}
        </Styled.SubTitle>
      </Styled.EntrieHolder>
      <Styled.ButtonHolder>
        <Button icon label="New time entry" onClick={() => setIsModalActive(true)} />
      </Styled.ButtonHolder>
      <Modal isActive={isModalActive} onClose={() => setIsModalActive(false)} />
    </Styled.SubHeader>
  );
};
