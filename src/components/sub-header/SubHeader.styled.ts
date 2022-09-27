import styled from "styled-components";

export const Divider = styled.span`
  padding: 0 15px;

  @media (${({ theme }) => theme.tablet}) {
    display: none;
  }
`;

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.fontSecondaryColor};
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 14px;
`;

export const SubHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.borderPrimaryColor};
  display: flex;
  padding: 20px 30px;

  @media (${({ theme }) => theme.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const EntrieHolder = styled.div`
  align-items: center;
  display: flex;
  flex: 50%;
  justify-content: flex-start;

  @media (${({ theme }) => theme.tablet}) {
    justify-content: space-between;
  }
`;

export const ButtonHolder = styled.div`
  display: flex;
  flex: 50%;
  justify-content: flex-end;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.fontPrimaryColor};
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 18px;
`;
