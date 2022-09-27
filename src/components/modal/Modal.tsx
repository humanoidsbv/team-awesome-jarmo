import { createPortal } from "react-dom";
import * as Styled from "./Modal.styled";
import CloseIcon from "../../../public/icons/closeicon.svg";

interface ModalProps {
  isActive: boolean;
  onClose: () => void;
}

export const Modal = ({ isActive, onClose }: ModalProps) =>
  isActive
    ? createPortal(
        // eslint-disable-next-line react/jsx-indent
        <Styled.ModalBackDrop onClick={onClose}>
          <Styled.Modal onClick={(e) => e.stopPropagation()}>
            <Styled.Title>New Time Entry</Styled.Title>
            <Styled.Button type="button" onClick={onClose}>
              <CloseIcon />
            </Styled.Button>
          </Styled.Modal>
        </Styled.ModalBackDrop>,
        document.body,
      )
    : null;
