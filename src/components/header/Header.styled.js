import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    background-color: #4F88EF;
    width:100vw;
    padding: 20px 30px;
   
    @media only screen and (max-width: 825px) {
    
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: #4F88EF;
        


}
`;

export const LeftMenu = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 30px;

`;

export const RightMenu = styled.div`


`;