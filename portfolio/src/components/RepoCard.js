import React from "react";
import styled from "styled-components";
import { Scard } from "./Cards";

const Repo = styled(Scard)`
background-color: #FFFFFF;
display: flex;
flex-direction: column;
gap: 20px;

`;
const GitHubLogoContainer = styled.div`
text-align: center;
padding: 25px 0;

`;
const ContentContainer = styled.div`
display: flex;
flex-direction: column;
gap:16px;
text-align: left;
padding-left: 26px;
`
const TitleContainer = styled.div`
display: flex;
gap:20px;`
const RepoTitle = styled.div`
font-family: 'Helvetica', 'Arial', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 36px;
display: flex;
align-items: center;
text-transform: capitalize;

color: #0969DA;
&:hover{
    text-decoration-line: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 6px;
    cursor: pointer;
}
`;

const PublicRepo= styled.div`
box-sizing: border-box;
width: 57px;
height: 23px;

border: 1px solid #d0d7de;
border-radius: 20px;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
display: flex;
align-items: center;
text-align: center;
text-transform: capitalize;
opacity:1;
color: #57606a;
padding-top: 0px;
padding-right: 7px;
padding-bottom: 0px;
padding-left: 7px;
`

const RepoDescription = styled.div`

font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
display: flex;
align-items: center;
text-transform: capitalize;

color: #000000;


`;
const JsContainer = styled.div`
display: flex;
gap: 5px;
align-items: center;

`
const YelloBut = styled.div`
width: 11px;
height: 11px;
background: #FFF510;
border-radius:100%;
`;
const JavascriptTxt = styled.div`
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
display: flex;
align-items: center;
text-align: center;
text-transform: capitalize;

color: #797777;`


export const RepoCard = (props)=>{
    const { Title, Description, Language, Url } = props;
    return(
        <a href={Url} target="_blank" rel='noreferrer' style={{textDecoration: "none"}}>

            <Repo whileHover={{ scale: 1.05, }}
            whileTap={{ scale: 1.2  }}>
                <GitHubLogoContainer> <img src="./GitHub.png" alt="GitHub" /> </GitHubLogoContainer>
                <ContentContainer>
                    <TitleContainer>
                   <RepoTitle> {Title} </RepoTitle>                   
                   <PublicRepo>Public</PublicRepo>                   
                    </TitleContainer>
                   <RepoDescription>{Description}</RepoDescription>
                   <JsContainer>
                     <YelloBut/>
                     <JavascriptTxt>{Language}</JavascriptTxt>
                   </JsContainer>
                </ContentContainer>
            </Repo>
        </a>
    )
}