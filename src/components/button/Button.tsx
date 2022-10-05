import PlusIcon from "../../../public/icons/plus.svg";
import * as Styled from "./Button.styled";

interface ButtonProps {
  label: string;
  hasIcon?: boolean;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export const Button = ({ hasIcon, onClick, label, variant, disabled }: ButtonProps) => (
  <Styled.Button variant={variant} onClick={onClick} disabled={disabled}>
    {hasIcon ? <PlusIcon /> : null}
    {label}
  </Styled.Button>
);
