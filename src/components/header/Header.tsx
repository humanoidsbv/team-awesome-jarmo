import { useState } from "react";
import * as Styled from "./Header.styled";
import { Logo } from "../logo/Logo";
import { Navigation } from "../navigation/Navigation";

import HamburgerIcon from "../../../public/icons/open.svg";
import CloseIcon from "../../../public/icons/close.svg";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Styled.Header>
      <Styled.LeftMenu>
        <Logo />
        <Navigation isActive={isActive} />
      </Styled.LeftMenu>

      <Styled.RightMenu>
        <Styled.Button isActive={!isActive} onClick={handleClick}>
          <HamburgerIcon />
        </Styled.Button>
        <Styled.Button isActive={isActive} onClick={handleClick}>
          <CloseIcon />
        </Styled.Button>
      </Styled.RightMenu>
    </Styled.Header>
  );
};
