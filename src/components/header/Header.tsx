"use client";

import { useState } from "react";

import CloseIcon from "../../../public/icons/close.svg";
import HamburgerIcon from "../../../public/icons/open.svg";
import { Logo } from "../logo/Logo";
import { Navigation } from "../navigation/Navigation";
import * as Styled from "./Header.styled";

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
        <Styled.Button type="button" role="button" isActive onClick={handleClick}>
          <HamburgerIcon />
        </Styled.Button>
        <Styled.Button isActive={isActive} onClick={handleClick}>
          <CloseIcon />
        </Styled.Button>
      </Styled.RightMenu>
    </Styled.Header>
  );
};
