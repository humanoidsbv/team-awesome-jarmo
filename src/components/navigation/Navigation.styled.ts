import styled from "styled-components";

type MenuProps = {
  isActive: boolean;
};

export const Nav = styled.div`
  @media (${({ theme }) => theme.tablet}) {
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundSecondaryColor};
    flex-direction: column;
    height: 100%;
    left: ${(props: MenuProps) => (props.isActive ? "0" : "-100%")};
    position: fixed;
    top: 70px;
    transition: 0.3s;
    width: 100%;

    &.active {
      align-items: center;
      flex-direction: column;
      height: 100%;
      left: 0;
      position: fixed;
      top: 70px;
      width: 100%;
    }
  }
`;

export const MenuList = styled.ul`
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 14px;
  gap: 14px;
  list-style: none;
  width: 100%;

  @media (${({ theme }) => theme.tablet}) {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    padding: 0;
    text-align: center;
  }
`;

export const Link = styled.a`
  color: white;
  display: inline-block;
  margin: 0px 25px;
  padding: 5px 0px;
  position: relative;
  text-decoration: none;

  &:after {
    background: #fff;
    bottom: 0;
    content: "";
    display: block;
    height: 1px;
    position: absolute;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    left: 0;
    width: 100%;
  }
`;

export const MenuItem = styled.li`
  display: inline;

  @media (${({ theme }) => theme.tablet}) {
    display: block;
    padding: 24px 0px;
  }
`;
