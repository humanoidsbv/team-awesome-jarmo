import styled from "styled-components";

export const ButtonContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 14px;
`;

export const Form = styled.form`
  padding: 0;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (${({ theme }) => theme.tablet}) {
  }
`;

export const Hours = styled.h2`
  font-size: 18px;
`;

export const Input = styled.input`
  font-family: ${({ theme }) => theme.fontSecondary};
  width: 100%;
  padding: 10px 13px 10px 15px;
  gap: 10px;
`;

export const Label = styled.label`
  padding: 10px 0px;
  font-family: ${({ theme }) => theme.fontSecondary};
  color: ${({ theme }) => theme.fontPrimaryColor};
  font-size: 14px;
`;

export const LabelTotal = styled.label`
  padding: 10px 0px;
  font-family: ${({ theme }) => theme.fontSecondary};
  color: ${({ theme }) => theme.fontPrimaryColor};
  margin-left: auto;
  font-size: 14px;
`;
