import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundPrimaryColor};
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Message = styled.h2`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fontSecondary};
  color: ${({ theme }) => theme.fontPrimaryColor};
`;
