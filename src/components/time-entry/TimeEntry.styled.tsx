import styled from "styled-components";

export const Container = styled.div`
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

export const DateContainer = styled.div`
  align-items: center;
  gap: 20px;
  display: flex;
  flex-direction: row; ;
`;

export const DayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 10px 20px;
`;

export const Title = styled.h2`
  color: #4b5464;
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 18px;
`;

export const Time = styled.h2`
  color: #4b5464;
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 18px;
  text-align: right;
`;

export const Hours = styled.h3`
  color: #7f8fa4;
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 14px;
  text-align: right;
`;
