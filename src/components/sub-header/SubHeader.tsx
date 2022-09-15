import React from "react";
import * as Styled from "./SubHeader.styled";

interface SubHeaderProps {
  message: string;
}

export const SubHeader = ({ message }: SubHeaderProps) => (
  <Styled.SubHead>
    <Styled.SubLeft>{message}</Styled.SubLeft>
    <Styled.SubRight>{message}</Styled.SubRight>
  </Styled.SubHead>
);
