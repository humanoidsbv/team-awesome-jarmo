import styled from "styled-components";

export const SubHead = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 16px;
  padding: 20px 30px;
  color: ${({ theme }) => theme.fontColorSecondary};

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
