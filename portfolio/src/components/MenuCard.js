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
const MenuText = styled.a`
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
text-decoration: none;
&:hover{
    text-decoration-line: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 6px;
    cursor: pointer;
}
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

export const MenuCard = ()=>{
    return(
        <Scard >
            <ContentContainer>
            <MenuText>Portfolio <YellowBlob/></MenuText>
            <MenuText href={"https://github.com/omarfrt"} target="_blank" rel='noreferrer' >GitHub</MenuText>
            <MenuText href={"https://www.linkedin.com/in/omar-fertat-30953717b/"} target="_blank" rel='noreferrer' >LinkedIn</MenuText>
            <MenuText href={"mailto:omarfertat96@gmail.com"} target="_blank" rel='noreferrer' >Contact Me !</MenuText>
            </ContentContainer>
        </Scard>
    )
}
export default MenuCard;