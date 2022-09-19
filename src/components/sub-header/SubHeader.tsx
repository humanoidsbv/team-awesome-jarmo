import React from "react";
import { Button } from "../button/Button";
import * as Styled from "./SubHeader.styled";

type SubHeaderProps = {
  title: string;
  amount: number;
  subtitle: string;
};

export const SubHeader = ({ title, amount, subtitle }: SubHeaderProps) => (
  <Styled.SubHeader>
    <Styled.SubLeft>
      <Styled.Title>{title}</Styled.Title>
      <Styled.SubTitle>
        <Styled.Divider>|</Styled.Divider>
        {amount} {subtitle}
      </Styled.SubTitle>
    </Styled.SubLeft>
    <Styled.SubRight>
      <Button icon label=" New time entry" />
    </Styled.SubRight>
  </Styled.SubHeader>
);
