import styled from "styled-components";

export const Button = styled.button`
  align-items: center;
  background-color: #37b047;
  border-radius: 4px;
  border: 1px;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  height: 50px;
  justify-content: center;
  width: fit-content;

  :hover {
    background: tomato;
  }

  @media (${({ theme }) => theme.tablet}) {
    width: 100%;
  }
`;
