import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  justify-content: center;
  padding-top: 20px;
`;

export const Form = styled.form``;

export const AvatarWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  font-family: ${({ theme }) => theme.fontSecondary};
  padding: 10px 13px 10px 15px;
  width: 100%;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.fontPrimaryColor};
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 14px;
  padding: 10px 0px;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Avatar = styled.img`
  border-radius: 100%;
  height: 80px;
  margin: 2px;
  width: 80px;
`;

export const Title = styled.h2`
  color: #4b5464;
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 18px;
  padding: 10px 0px;
`;
