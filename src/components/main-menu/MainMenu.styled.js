import styled from "styled-components";

export const List = styled.li`
  display: inline;

  @media only screen and (max-width: 825px) {
    display: block;
    padding: 24px 0px;
  }
`;
export const Menu = styled.div`
  @media only screen and (max-width: 825px) {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 70px;
    left: ${(props) => (props.isActive ? "0" : "-100%")};
    flex-direction: column;
    align-items: center;
    background-color: #4f88ef;
    transition: 0.3s;

    &.active {
      height: 100%;
      width: 100%;
      position: fixed;
      top: 70px;
      left: 0;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
  display: inline-block;
  padding: 5px 20px;
  position: relative;

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 1px;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

export const MenuList = styled.ul`
  font-family: proxima;
  font-size: 14px;
  list-style: none;
  width: 100%;
  gap: 14px;

  @media only screen and (max-width: 825px) {
    padding: 0;
    font-size: 24px;
    line-height: 24px;

    text-align: center;
    font-style: normal;
    font-weight: 400;
  }
`;
