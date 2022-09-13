import * as Styled from './MainMenu.styled.js'

export const MainMenu = ({ isActive }) => {

    const menu = ['Timesheet', 'Team Members', 'Projects', 'Clients', 'Documents']

  return (
    <Styled.MainMenu isActive={isActive}>
        <Styled.MenuList>
        
            
            {menu.map((menu) =>
                <Styled.MenuListItem key={menu}>
                <Styled.MenuItems >{menu}</Styled.MenuItems>
</Styled.MenuListItem>
            )}
            
            
        </Styled.MenuList>
    </Styled.MainMenu>
  )
}

