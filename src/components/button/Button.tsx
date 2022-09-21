import * as Styled from "./Button.styled";
import PlusIcon from "../../../public/icons/plus.svg";

interface ButtonProps {
  label: string;
  icon?: boolean;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export const Button = ({ icon, onClick, label, variant }: ButtonProps) => (
  <Styled.Button onClick={onClick}>
    {icon ? <PlusIcon /> : null}
    {label}
    {variant}
  </Styled.Button>
);
