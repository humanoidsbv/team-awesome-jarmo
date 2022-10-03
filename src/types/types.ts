export interface EntryProps {
  client: string;
  date?: string;
  startTime: string;
  endTime: string;
  id?: string;
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
