import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  justify-content: center;
  padding-top: 20px;
`;

export const Form = styled.form``;

export const FormContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

export const Hours = styled.h2`
  font-size: 18px;
`;

export const Input = styled.input`
  font-family: ${({ theme }) => theme.fontSecondary};
  gap: 10px;
  padding: 10px 13px 10px 15px;
  width: 100%;

  :invalid {
    border-color: red;
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.fontPrimaryColor};
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 14px;
  padding: 10px 0px;
`;

export const LabelTotal = styled.label`
  color: ${({ theme }) => theme.fontPrimaryColor};
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 14px;
  margin-left: auto;
  padding: 10px 0px;
`;

export const ErrorMessage = styled.span`
  display: block;
  font-size: 11px;
`;
