import React from "react";
import { Button } from "../button/Button";
import * as Styled from "./SubHeader.styled";

type SubHeaderProps = {
  title: string;
  subtitle: string;
};

export const SubHeader = ({ title, subtitle }: SubHeaderProps) => (
  <Styled.SubHeader>
    <Styled.SubLeft>
      <Styled.Title>{title}</Styled.Title>
      <span>|</span>
      <Styled.SubTitle>{subtitle}</Styled.SubTitle>
    </Styled.SubLeft>
    <Styled.SubRight>
      <Button label="New time entry" />
    </Styled.SubRight>
  </Styled.SubHeader>
);
