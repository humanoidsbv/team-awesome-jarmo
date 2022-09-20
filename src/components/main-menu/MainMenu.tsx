import * as Styled from "./MainMenu.styled";

type MenuProps = {
  isActive: boolean;
};

export const MainMenu = ({ isActive }: MenuProps) => {
  const menuItems = ["Timesheet", "Team Members", "Projects", "Clients", "Documents"];

  return (
    <Styled.MenuItem isActive={isActive}>
      <Styled.MenuList>
        {menuItems.map((menuItem) => (
          <Styled.List key={menuItem}>
            <Styled.Link href="#">{menuItem}</Styled.Link>
          </Styled.List>
        ))}
      </Styled.MenuList>
    </Styled.MenuItem>
  );
};
