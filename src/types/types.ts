export interface EntryProps {
  client: string;
  startTime: string;
  endTime: string;
  id: number;
}

export interface AtBuildProps {
  initialTimeEntries: EntryProps[];
  isModalActive: boolean;
  setIsModalActive: boolean;
}

export interface ModalProps {
  isActive: boolean;
  onClose: () => void;
}
