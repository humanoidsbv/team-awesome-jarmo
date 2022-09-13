import * as Styled from './MainMenu.styled.js'

export const MainMenu = () => {

    const menu = ['Timesheet', 'Team Members', 'Projects', 'Clients', 'Documents']

  return (
    <><Styled.MainMenu>
        <Styled.MenuList>
        
            
            {menu.map((menu) =>
                <Styled.MenuListItem>
                <Styled.MenuItems>{menu}</Styled.MenuItems>
</Styled.MenuListItem>
            )}
            
            
        </Styled.MenuList>
    </Styled.MainMenu></>
  )
}

