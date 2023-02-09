import React from 'react';
import styled from "styled-components";
import { TestMcard } from "./Cards";
import Articles from "../mediumArticles.json"

const ArticleContainer= styled(TestMcard)`
background: #FFFFFF;
display: flex;
flex-direction: column;
padding: 50px 35px 0px 35px ;
gap:30px
`;
const InfoImgContainer = styled.div`
display: flex;
justify-content: space-between;
gap:10px`;
const InfoContainer = styled.div`
display: flex;
flex-direction: column;
gap: 25px
`
const PrevTitle = styled.a`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 28px;
color: #000000;
text-decoration-line: none;
&:hover{
    text-decoration-line: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 6px;
    cursor: pointer;
}
`;
const PrevDescription = styled.div`

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 28px;

/* or 175% */

color: #454545;

`
const PrevLink = styled.a`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 28px;

/* or 215% */

color: #646464;
&:hover{
    text-decoration-line: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 6px;
    cursor: pointer;
}

`
const PrevImg = styled.div`
width: 1120px;
height: 220px;
border-radius: 20px;
background-image: url(${Articles.thumbnail_url});

`
export const MediumArticle = ()=>{

    return (
        <a href={Articles.url} target="_blank" rel='noreferrer' style={{textDecoration: "none"}}>
            <ArticleContainer  whileHover={{ scale: 1.05, }}
            whileTap={{ scale: 1.2  }} >
            <InfoImgContainer>
                <InfoContainer>
                <PrevTitle href={Articles.url} target="_blank">{Articles.title}</PrevTitle>
             <PrevDescription>{Articles.description }</PrevDescription>
                </InfoContainer>
             <PrevImg />
            </InfoImgContainer>
             <PrevLink>{Articles.url}</PrevLink>
            </ArticleContainer>
        </a>
        
    )
}
