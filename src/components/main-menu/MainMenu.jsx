import * as Styled from './MainMenu.styled'

export const MainMenu = ({ isActive }) => {

    const menu = ['Timesheet', 'Team Members', 'Projects', 'Clients', 'Documents']

  return (
    <Styled.Nav isActive={isActive}>
        <Styled.MenuList>
            {menu.map((menu) =>
                <Styled.List key={menu}>
                <Styled.Link href="#">{menu}</Styled.Link>
                </Styled.List>
            )}
        </Styled.MenuList>
    </Styled.Nav>
  )
}

