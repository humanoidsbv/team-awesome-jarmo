"use client";

import React, { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import * as Types from "../../types/types";

interface TeamProviderProps {
  children: ReactNode | ReactNode[];
  initialTeamMembers: Types.TeamFormProps[];
}

interface TeamContextProps {
  teamMembers: Types.TeamApiProps[];
  setTeamMembers: Dispatch<SetStateAction<Types.TeamApiProps[]>>;
}

export const TeamContext = createContext<TeamContextProps>({} as TeamContextProps);

export const TeamProvider: FC<TeamProviderProps> = ({ children, initialTeamMembers }) => {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);

  const teamEntries = {
    teamMembers,
    setTeamMembers,
  };

  return <TeamContext.Provider value={teamEntries}>{children}</TeamContext.Provider>;
};
