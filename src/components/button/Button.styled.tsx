import styled from "styled-components";

export const Button = styled.button`
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
  width: 190px;

  :hover {
    background: tomato;
  }

  @media (${({ theme }) => theme.tablet}) {
    width: 100%;
  }
`;
