import styled from "styled-components";

export const DayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 10px 20px;
`;

export const Main = styled.main`
  background-color: #f5f7f9;
`;

export const Title = styled.h2`
  color: #4b5464;
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 18px;
`;
