import * as Styled from "./Navigation.styled";

type MenuProps = {
  isActive: boolean;
};

export const Navigation = ({ isActive }: MenuProps) => {
  const menuItems = ["Timesheet", "Team Members", "Projects", "Clients", "Documents"];

  return (
    <Styled.Nav isActive={isActive}>
      <Styled.MenuList>
        {menuItems.map((menuItem) => (
          <Styled.MenuItem key={menuItem}>
            <Styled.Link href="#">{menuItem}</Styled.Link>
          </Styled.MenuItem>
        ))}
      </Styled.MenuList>
    </Styled.Nav>
  );
};
