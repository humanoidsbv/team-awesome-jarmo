import * as Styled from "./Button.styled";

interface ButtonProps {
  label: string;
}

export const Button = ({ label }: ButtonProps) => <Styled.Button>{label}</Styled.Button>;
