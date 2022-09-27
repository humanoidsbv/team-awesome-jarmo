import styled from "styled-components";

export const Button = styled.button`
  background: none;
  border: ${({ theme }) => theme.buttonBorder};
  cursor: ${({ theme }) => theme.buttonCursor};
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
  align-items: baseline;
  background: #ffffff;
  border-radius: 4px;
  display: flex;
  height: 436px;
  justify-content: space-between;
  padding: 20px;
  width: 560px;

  @media (${({ theme }) => theme.tablet}) {
    height: 100%;
    width: 100vw;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.fontSecondaryColor};
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 24px;
  font-weight: 400;
`;
