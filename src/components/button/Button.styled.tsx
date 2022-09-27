import styled, { css } from "styled-components";

type ButtonProps = {
  variant?: string;
  onClick?: () => void;
};

export const Button = styled.button<ButtonProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.buttonPrimaryColor};
  border-radius: 4px;
  border: 1px;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  gap: 15px;
  height: 40px;
  justify-content: center;
  width: 235px;
  height: 40px;

  :hover {
    background: #1e990a;
  }

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      color: ${({ theme }) => theme.fontPrimaryColor};
      border: 1px solid #e6eaee;
      background-color: ${({ theme }) => theme.buttonThirdColor};
      :hover {
        background: ${({ theme }) => theme.borderPrimaryColor};
      }
    `}
  @media (${({ theme }) => theme.tablet}) {
    width: 100%;
  }
`;
