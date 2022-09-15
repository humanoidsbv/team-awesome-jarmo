import React from "react";
import { Button } from "../button/Button";
import * as Styled from "./SubHeader.styled";

type SubHeaderProps = {
  title: string;
  subtitle: string;
};

export const SubHeader = ({ title, subtitle }: SubHeaderProps) => (
  <Styled.SubHead>
    <Styled.SubLeft>
      <h2>{title}</h2>
      <span>|</span>
      <p>{subtitle}</p>
    </Styled.SubLeft>
    <Styled.SubRight>
      <Button label="New time entry" />
    </Styled.SubRight>
  </Styled.SubHead>
);
