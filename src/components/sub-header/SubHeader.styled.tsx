import styled from "styled-components";

export const SubHead = styled.div`
  background-color: white;
  display: flex;
`;

export const SubLeft = styled.div`
  flex: 1 0 50%;

  @media only screen and (max-width: 825px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
export const SubRight = styled.div``;
