import { createPortal } from "react-dom";
import * as Styled from "./TimeEntryModal.styled";

interface ModalProps {
  isActive: boolean;
  onClose: () => void;
}

export const TimeEntryModal = ({ isActive, onClose }: ModalProps) =>
  isActive
    ? createPortal(
        <Styled.ModalBackDrop onClick={onClose}>
          <Styled.Modal onClick={(e) => e.stopPropagation()}>Test</Styled.Modal>
        </Styled.ModalBackDrop>,
        document.body,
      )
    : null;
