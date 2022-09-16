import styled from "styled-components";

export const Divider = styled.span`
  padding: 0 15px;

  @media (${({ theme }) => theme.tablet}) {
    display: none;
  }
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.fontColorThird};
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 14px;
`;

export const SubHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.fontColorThird};
  display: flex;
  padding: 20px 30px;

  @media (${({ theme }) => theme.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const SubLeft = styled.div`
  align-items: center;
  display: flex;
  flex: 50%;
  justify-content: flex-start;

  @media (${({ theme }) => theme.tablet}) {
    justify-content: space-between;
  }
`;

export const SubRight = styled.div`
  display: flex;
  flex: 50%;
  justify-content: flex-end;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.fontColorSecondary};
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 18px;
`;
