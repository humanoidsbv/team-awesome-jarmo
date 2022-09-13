
import * as Styled from './Header.styled.js'
import { Logo } from '../logo/Logo.jsx'
import { MainMenu } from '../main-menu/MainMenu.jsx'
import { MenuButton } from '../menu-button/MenuButton.jsx'
import { useState } from 'react'

import {OpenIcon} from "../../../icons/open.svg"



export const Header = (props) => {

    const [isActive, setIsactive ] = useState(true);

    const handleClick = () => {
        setIsactive(!isActive)
    }
    
  return (
    <>
        <Styled.Header>
            <Styled.LeftMenu>
                <Logo />
                <MainMenu/>
                  
            </Styled.LeftMenu>
            <Styled.RightMenu>
            
            <button style={{display: isActive ? "block" : "none"}} onClick={handleClick}>
            open
            </button>
            <button style={{display: isActive ? "none" : "block"}} onClick={handleClick}>close</button>

            </Styled.RightMenu>
        </Styled.Header>
    </>
  )
}
