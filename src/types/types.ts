export interface EntryProps {
  client: string;
  startTime: string;
  endTime: string;
  id: number;
  removeEntry: () => void;
}

export interface AtBuildProps {
  initialTimeEntries: EntryProps[];
  isModalActive: boolean;
  setIsModalActive?: boolean;
  handleModal: () => void;
}

export interface ModalProps {
  isActive: boolean;
  onClose: () => void;
}
