import * as Styled from "./Button.styled";
import PlusIcon from "../../../public/icons/plus.svg";

interface ButtonProps {
  label: string;
}

export const Button = ({ label }: ButtonProps) => (
  <Styled.Button>
    <PlusIcon />
    {label}
  </Styled.Button>
);
