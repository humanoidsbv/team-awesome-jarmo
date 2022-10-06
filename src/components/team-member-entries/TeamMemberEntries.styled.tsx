import styled from "styled-components";

export const Main = styled.main`
  background-color: #f5f7f9;
  padding: 0px 10%;
  height: 100vh;

  @media (${({ theme }) => theme.tablet}) {
    padding: 0;
  }
`;
