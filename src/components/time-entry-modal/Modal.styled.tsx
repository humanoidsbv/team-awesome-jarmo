import styled from "styled-components";

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

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

export const Modal = styled.div`
  display: flex;
  align-items: flex-start;
  background: #ffffff;
  border-radius: 4px;
  width: 560px;
  height: 436px;
  padding: 20px;

  @media (${({ theme }) => theme.tablet}) {
    height: 100%;
    width: 100vw;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.fontSecondaryColor};
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 24px;
`;
