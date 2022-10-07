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
`;
export const TeamMember = styled.div`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #e6eaee;
  border-left: 4px solid #4f88ef;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  height: 80px;
  margin: 0 10px;
  padding: 0 10px;
`;

export const Data = styled.div`
  align-items: center;
  gap: 20px;
`;

export const JobDescription = styled.div`
  align-items: center;
  gap: 30px;
  display: flex;
  flex-direction: row; ;
`;

export const DayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
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

export const Date = styled.h2`
  color: #4b5464;
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 18px;
  text-align: right;
`;

export const Label = styled.h3`
  color: #7f8fa4;
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 14px;
  text-align: right;
`;

export const DeleteButton = styled.div`
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;
