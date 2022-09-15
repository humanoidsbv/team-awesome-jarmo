import styled from "styled-components";

export const Divider = styled.span`
  padding: 0 15px;

  @media (${({ theme }) => theme.tablet}) {
    display: none;
  }
`;
export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 18px;
  color: ${({ theme }) => theme.fontColorSecondary};
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.fontColorThird};
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 14px;
`;

export const SubHeader = styled.div`
  display: flex;
  padding: 20px 30px;

  @media (${({ theme }) => theme.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const SubLeft = styled.div`
  flex: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (${({ theme }) => theme.tablet}) {
    justify-content: space-between;
  }
`;
export const SubRight = styled.div`
  flex: 50%;
  display: flex;
  justify-content: flex-end;
`;
