import React from "react";

interface SelectProps {
  clients: string;
}
export const Select = ({ clients }: SelectProps) => {
  return (
    <select>
      <option value="">--Choose a client--</option>
      <option label="client" value="test">
        {clients}
      </option>
      <option label="client" value="test2">
        {clients}
      </option>
    </select>
  );
};
