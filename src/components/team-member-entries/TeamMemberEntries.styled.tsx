import styled from "styled-components";

export const Main = styled.main`
  background-color: #f5f7f9;
  padding: 20px 10%;
  height: 100vh;

  @media (${({ theme }) => theme.tablet}) {
    padding: 0;
  }
`;

export const Label = styled.label`
  font-family: ${({ theme }) => theme.fontSecondary};
  padding: 0px 5px;
`;

export const Select = styled.select``;

export const Container = styled.div`
  align-items: center;
  background-color: #f5f7f9;
  display: flex;
  justify-content: flex-end;
  padding: 20px 10px;
`;
