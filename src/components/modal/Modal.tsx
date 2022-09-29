import React from "react";
import { createPortal } from "react-dom";

import CloseIcon from "../../../public/icons/closeicon.svg";
import * as Styled from "./Modal.styled";

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
            <Styled.ModalContainer>{children}</Styled.ModalContainer>
          </Styled.Modal>
        </Styled.ModalBackDrop>,
        document.body,
      )
    : null;
