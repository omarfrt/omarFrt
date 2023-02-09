import React from "react";
import styled from "styled-components"
import { Scard} from "../components/Cards";
import GitHubCard from "../components/GitHubCard";
import LinkedInCard from "../components/LinkedInCard";
import GfreeCard from "../components/GfreeCard";
import MenuCard from "../components/MenuCard";
import {RepoCard} from "../components/RepoCard";
import {MediumArticle} from "../components/MediumArticle";

const FaceContainer = styled.div`
display: flex;
gap: 10px;
padding-top: 50px;
padding-left: 100px;
`
const LeftContainer= styled.div`
display: flex;
flex-direction: column;
gap:10px;
`
const GitHubReposContainer = styled.div`
display: flex;
flex-direction: row;
gap:10px`;
const InfoContainer =styled.div`
display: flex;
flex-wrap: wrap;
align-content: flex-start;
gap: 10px;
`


export const Face = ()=>{
    return(
        <FaceContainer>
        <LeftContainer>
        <GfreeCard/>
        <GitHubReposContainer>
            <RepoCard Title={"GfreeAPI"} 
            Description={"ExpressJS RESTful API"} 
            Language={"JavaScript"} 
            Url={"https://github.com/omarfrt/GfreeAPI"}/>
             <RepoCard Title={"store-api"} 
            Description={"MexicoBookStore shop backend api "} 
            Language={"JavaScript"} 
            Url={"https://github.com/omarfrt/store-api"}/>
        </GitHubReposContainer>
        </LeftContainer>
        <InfoContainer>
        <GitHubCard/>
        <MenuCard/>
        <Scard/>
        <LinkedInCard/>
        <MediumArticle/>
        </InfoContainer>
        </FaceContainer>  
    )
}



export default Face