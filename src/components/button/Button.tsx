import PlusIcon from "../../../public/icons/plus.svg";
import * as Styled from "./Button.styled";

interface ButtonProps {
  label: string;
  hasIcon?: boolean;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export const Button = ({ hasIcon, onClick, label, variant }: ButtonProps) => (
  <Styled.Button variant={variant} onClick={onClick}>
    {hasIcon ? <PlusIcon /> : null}
    {label}
  </Styled.Button>
);
