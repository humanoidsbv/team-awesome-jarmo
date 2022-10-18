import { Dispatch } from "react";

export interface ButtonProps {
  label: string;
  hasIcon?: boolean;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

// Van de API
export interface EntryApiProps {
  activity?: string;
  client: string;
  startTime: string;
  endTime: string;
  id?: string;
}

export interface TeamApiProps {
  client: string;
  email: string;
  firstname: string;
  id?: string;
  lastname: string;
}

// in de front-end
export interface EntryProps {
  activity?: string;
  client: string;
  startTime: string;
  endTime: string;
  id: string;
}

export interface TeamProps {
  client: string;
  email: string;
  firstname: string;
  id: string;
  lastname: string;
}

// in de form
export interface EntryFormProps {
  activity: string;
  client: string;
  date: string;
  startTime: string;
  endTime: string;
  id?: string;
}

export interface TeamFormProps {
  firstname: string;
  lastname: string;
  client: string;
  email: string;
  id?: string;
}

export interface AtBuildProps {
  initialTimeEntries: EntryFormProps[];
  isModalActive: boolean;
  setIsModalActive?: boolean;
  handleModal: () => void;
  initialFormValues: EntryFormProps[];
}

export interface AtBuildTeamProps {
  initialTeamMembers: TeamFormProps[];
  isModalActive: boolean;
  setIsModalActive?: boolean;
  handleModal: () => void;
  initialFormValues: TeamFormProps[];
}

export interface ModalProps {
  isActive: boolean;
  onClose: () => void;
}

export interface FormProps {
  timeEntries: EntryApiProps[];
  setTimeEntries: Dispatch<EntryFormProps[]>;
  handleModal: () => void;
}
