export interface EntryProps {
  client: string;
  startTime: string;
  endTime: string;
  id: number;
}

export interface AtBuildProps {
  initialTimeEntries: EntryProps[];
}

export interface ModalProps {
  isActive: boolean;
  onClose: () => void;
}
