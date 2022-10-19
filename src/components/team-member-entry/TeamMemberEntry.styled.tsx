import styled from "styled-components";

export const Avatar = styled.img`
  border-radius: 100%;
  height: 50px;
  margin: 2px;
  width: 50px;
`;

export const Profile = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  padding: 10px;
`;
export const TeamMember = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid #e6eaee;
  border-left: 4px solid #4f88ef;
  display: flex;
  justify-content: space-between;
  margin: 0px 10px 10px 10px;

  @media (${({ theme }) => theme.tablet}) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const Data = styled.div`
  align-items: center;
  gap: 20px;
`;

export const JobDescription = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 20px;
  @media (${({ theme }) => theme.tablet}) {
    border-top: 1px solid #e6eaee;
    padding: 20px;
    width: 100%;
  }
`;

export const Title = styled.h2`
  color: #4b5464;
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 18px;
`;

export const Role = styled.h3`
  color: #7f8fa4;
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 14px;
  text-align: left;
`;

export const Label = styled.h3`
  color: #7f8fa4;
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 14px;
  text-align: right;
  @media (${({ theme }) => theme.tablet}) {
    text-align: left;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;
