import styled from "styled-components";

type ButtonProps = {
  isActive: boolean;
};

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: ${(props: ButtonProps) => (props.isActive ? "block" : "none")};
`;

export const Header = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 70px;
  justify-content: space-between;
  padding: 20px 30px;
  width: 100vw;

  @media (${({ theme }) => theme.tablet}) {
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundSecondary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LeftMenu = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding: 0px;
`;

export const RightMenu = styled.div`
  display: none;
  @media (${({ theme }) => theme.tablet}) {
    display: block;
  }
`;
