import { createPortal } from "react-dom";
import * as Styled from "./TimeEntryModal.styled";

interface ModalProps {
  isActive: boolean;
  onClose: () => void;
}

export const TimeEntryModal = ({ isActive, onClose }: ModalProps) =>
  isActive
    ? createPortal(
        // eslint-disable-next-line react/jsx-indent
        <Styled.ModalBackDrop onClick={onClose}>
          <Styled.Modal onClick={(e) => e.stopPropagation()} onKeyDown={onClose}>
            <Styled.ButtonHandler
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-labelledby="dialog"
              aria-modal="true"
            >
              <Styled.Button type="button" onClick={onClose}>
                X
              </Styled.Button>
            </Styled.ButtonHandler>
          </Styled.Modal>
        </Styled.ModalBackDrop>,
        document.body,
      )
    : null;
