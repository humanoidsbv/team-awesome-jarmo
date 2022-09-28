import * as Styled from "./Button.styled";
import PlusIcon from "../../../public/icons/plus.svg";

interface ButtonProps {
  label: string;
  hasIcon?: boolean;
  onSubmit?: () => void;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export const Button = ({ hasIcon, onClick, label, variant, onSubmit }: ButtonProps) => (
  <Styled.Button variant={variant} onClick={onClick} onSubmit={onSubmit}>
    {hasIcon ? <PlusIcon /> : null}
    {label}
  </Styled.Button>
);
