import styled from "styled-components";

export const MenuItem = styled.div`
  @media only screen and (max-width: 825px) {
    align-items: center;
    background-color: #4f88ef;
    flex-direction: column;
    height: 100%;
    left: ${(props) => (props.isActive ? "0" : "-100%")};
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
  font-family: "Proxima Nova";
  font-size: 14px;
  gap: 14px;
  list-style: none;
  width: 100%;

  @media only screen and (max-width: 825px) {
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
  padding: 5px 20px;
  position: relative;
  text-decoration: none;

  &:after {
    background: none repeat scroll 0 0 transparent;
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

export const List = styled.li`
  display: inline;

  @media only screen and (max-width: 825px) {
    display: block;
    padding: 24px 0px;
  }
`;
