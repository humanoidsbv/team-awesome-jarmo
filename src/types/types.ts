// Van de API
export interface EntryApiProps {
  activity?: string;
  client: string;
  startTime: string;
  endTime: string;
  id?: string;
}

// in de front-end
export interface EntryProps {
  activity?: string;
  client: string;
  startTime: string;
  endTime: string;
  id: string;
}

// in de form
export interface EntryFormProps {
  activity: string;
  client: string;
  date: string;
  startTime: string;
  endTime: string;
}

export interface AtBuildProps {
  initialTimeEntries: EntryFormProps[];
  isModalActive: boolean;
  setIsModalActive?: boolean;
  handleModal: () => void;
  initialFormValues: EntryFormProps[];
}

export interface ModalProps {
  isActive: boolean;
  onClose: () => void;
}
