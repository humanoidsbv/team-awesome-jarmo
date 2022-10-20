import styled, { css } from "styled-components";

type ButtonProps = {
  variant?: string;
  onClick?: () => void;
};

export const Button = styled.button<ButtonProps>`
  align-items: center;
  background: #1e990a;
  border-radius: 4px;
  border: 1px;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  gap: 15px;
  height: 40px;
  justify-content: center;
  padding: 0 40px;

  :hover {
    background: #1e990a;
  }

  :disabled {
    background: ${({ theme }) => theme.buttonSecondaryColor};
    border: 1px solid #e6eaee;
    color: ${({ theme }) => theme.fontPrimaryColor};
    cursor: not-allowed;

    :hover {
      background: ${({ theme }) => theme.borderPrimaryColor};
    }
  }

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background: ${({ theme }) => theme.buttonSecondaryColor};
      border: 1px solid #e6eaee;
      color: ${({ theme }) => theme.fontPrimaryColor};
      padding: 0 60px;

      :hover {
        background: ${({ theme }) => theme.borderPrimaryColor};
      }
    `}
  @media (${({ theme }) => theme.tablet}) {
    width: 100%;
  }
`;
