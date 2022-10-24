import Link from "next/link";
import * as Styled from "./Navigation.styled";

type MenuProps = {
  isActive: boolean;
};

export const Navigation = ({ isActive }: MenuProps) => {
  const menuItems = [
    { name: "Timesheet", link: "/", id: 1 },
    { name: "Team Members", link: "/team-members", id: 2 },
    { name: "Projects", link: "/projects", id: 3 },
    { name: "Clients", link: "/client", id: 4 },
    { name: "Documents", link: "/documents", id: 5 },
  ];

  return (
    <Styled.Nav isActive={isActive}>
      <Styled.MenuList data-cy="menu">
        {menuItems.map((menuItem) => (
          <Styled.MenuItem key={menuItem.id} data-cy="menu-item">
            <Link href={menuItem.link} passHref>
              <Styled.Link>{menuItem.name}</Styled.Link>
            </Link>
          </Styled.MenuItem>
        ))}
      </Styled.MenuList>
    </Styled.Nav>
  );
};
