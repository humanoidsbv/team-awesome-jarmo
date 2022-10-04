import styled from "styled-components";

export const DayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
`;

export const Main = styled.main`
  background-color: #f5f7f9;
  padding: 0px 10%;
  height: 100vh;

  @media (${({ theme }) => theme.tablet}) {
    padding: 0;
  }
`;

export const Title = styled.h2`
  color: #4b5464;
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 18px;
`;
