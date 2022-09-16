import React from "react";
import * as Styled from "./Button.styled";
import PlusIcon from "../../../public/icons/plus.svg";

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
}

export const Button = ({ onClick, label }: ButtonProps) => (
  <Styled.Button onClick={onClick}>
    <PlusIcon />
    {label}
  </Styled.Button>
);
