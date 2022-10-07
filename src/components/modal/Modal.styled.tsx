import styled from "styled-components";

export const Button = styled.button``;

export const ModalBackDrop = styled.div`
  align-items: center;
  background: rgba(75, 84, 100, 0.8);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const ModalWrapper = styled.div`
  align-items: baseline;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalContainer = styled.div`
  padding-top: 20px;
`;

export const Modal = styled.div`
  background: #ffffff;
  border-radius: 4px;
  display: flex;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 560px;

  @media (${({ theme }) => theme.tablet}) {
    padding-top: 50px;
    height: 100vh;
    width: 100vw;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.fontSecondaryColor};
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 24px;
  font-weight: 400;

  @media (${({ theme }) => theme.tablet}) {
    font-size: 18px;
  }
`;
