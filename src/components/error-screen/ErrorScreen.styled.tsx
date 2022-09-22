import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.primaryBackground};
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  margin: 10px 0px;
  padding: 20px 20px;
  border: 1px solid #e6eaee;
  border-radius: 4px;
  height: 100px;
`;

export const Message = styled.h2`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fontSecondary};
  color: ${({ theme }) => theme.fontColorSecondary};
`;
