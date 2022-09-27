import { createPortal } from "react-dom";
import React from "react";
import * as Styled from "./Modal.styled";
import CloseIcon from "../../../public/icons/closeicon.svg";

interface ModalProps {
  isActive: boolean;
  onClose: () => void;
  children: React.ReactElement;
}

export const Modal = ({ isActive, onClose, children }: ModalProps) =>
  isActive
    ? createPortal(
        // eslint-disable-next-line react/jsx-indent
        <Styled.ModalBackDrop onClick={onClose}>
          <Styled.Modal onClick={(e) => e.stopPropagation()}>
            <Styled.ModalWrapper>
              <Styled.Title>New Time Entry</Styled.Title>
              <Styled.Button type="button" onClick={onClose}>
                <CloseIcon />
              </Styled.Button>
            </Styled.ModalWrapper>
            <Styled.FormContainer>{children}</Styled.FormContainer>
          </Styled.Modal>
        </Styled.ModalBackDrop>,
        document.body,
      )
    : null;
