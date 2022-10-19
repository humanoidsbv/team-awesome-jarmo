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
  color: ${({ theme }) => theme.fontPrimaryColor};
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 14px;
  padding: 0px 5px 0px 30px;

  @media (${({ theme }) => theme.tablet}) {
    font-size: 12px;
    padding: 0px 5px;
  }
`;

export const Select = styled.select`
  border: 1px solid #e6eaee;
  border-radius: 4px;
  color: ${({ theme }) => theme.fontPrimaryColor};
  font-size: 14px;
  padding: 4px;
  @media (${({ theme }) => theme.tablet}) {
    font-size: 12px;
  }
`;

export const Container = styled.div`
  align-items: center;
  background-color: #f5f7f9;
  display: flex;
  justify-content: flex-end;
  padding: 20px 10px;
`;
