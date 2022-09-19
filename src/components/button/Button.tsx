import React from "react";
import * as Styled from "./Button.styled";
import PlusIcon from "../../../public/icons/plus.svg";

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  icon?: boolean;
}

export const Button = ({ icon, onClick, label }: ButtonProps) => (
  <Styled.Button onClick={onClick}>
    {icon ? <PlusIcon /> : null}
    {label}
  </Styled.Button>
);
