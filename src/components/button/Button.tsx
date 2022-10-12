import PlusIcon from "../../../public/icons/plus.svg";
import * as Styled from "./Button.styled";
import * as Types from "../../types/types";

export const Button = ({ hasIcon, onClick, label, variant, disabled }: Types.ButtonProps) => (
  <Styled.Button variant={variant} onClick={onClick} disabled={disabled}>
    {hasIcon ? <PlusIcon /> : null}
    {label}
  </Styled.Button>
);
