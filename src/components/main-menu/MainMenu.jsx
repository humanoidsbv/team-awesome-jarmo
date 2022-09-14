import React from "react";
import * as Styled from "./MainMenu.styled";

export const MainMenu = ({ isActive }) => {
  const menuItems = ["Timesheet", "Team Members", "Projects", "Clients", "Documents"];

  return (
    <Styled.Menu isActive={isActive}>
      <Styled.MenuList>
        {menuItems.map((menu) => (
          <Styled.List key={menu}>
            <Styled.Link href="#">{menu}</Styled.Link>
          </Styled.List>
        ))}
      </Styled.MenuList>
    </Styled.Menu>
  );
};
