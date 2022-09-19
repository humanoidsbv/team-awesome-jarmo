import React from "react";
import * as Styled from "./Button.styled";
import PlusIcon from "../../../public/icons/plus.svg";

interface ButtonProps {
  onClick?: () => void;
  label: string;
  icon?: boolean;
  variant?: "primary" | "secondary";
}

export const Button = ({ icon, onClick, label, variant }: ButtonProps) => (
  <Styled.Button onClick={onClick}>
    {icon ? <PlusIcon /> : null}
    {label}
    {variant}
  </Styled.Button>
);
