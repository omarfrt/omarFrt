import React from "react";
import styled,{keyframes}from "styled-components";
import { Scard } from "./Cards";


const ContentContainer = styled.div`
padding-left: 20px;
padding-top: 50px;
display: flex;
flex-direction: column;
gap: 25px;
`
const MenuText = styled.div`
display: flex;
gap: 25px;
font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
display: flex;
align-items: center;
text-transform: capitalize;
color: #C5C2C2;
`;
const fadeToBlack = keyframes` 
    from{
        box-shadow: 0px 0px 10px #FFF510;
    }
  to {
    box-shadow: 0px 0px 25px #FFF510;
  }
`;
const YellowBlob = styled.div`
width: 11px;
height: 11px;
background: #FFF510;
border: 2px solid #FFF510;

animation: ${fadeToBlack} alternate  2s infinite;
border-radius:100%;
`;

class MenuCard extends React.Component{

    render(){
        return(
            <Scard>
                <ContentContainer>
                <MenuText>Portfolio <YellowBlob/></MenuText>
                <MenuText>GitHub</MenuText>
                <MenuText>LinkedIn</MenuText>
                <MenuText>Contact Me !</MenuText>
                </ContentContainer>
            </Scard>
        )
    }
}
export default MenuCard;