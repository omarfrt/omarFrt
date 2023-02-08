import React from "react";
import styled from "styled-components"
import { Scard, TestMcard} from "../components/Cards";
import GitHubCard from "../components/GitHubCard";
import LinkedInCard from "../components/LinkedInCard";
import GfreeCard from "../components/GfreeCard";
import MenuCard from "../components/MenuCard";
import RepoCard from "../components/RepoCard";
import MediumArticle from "../components/MediumArticle";
import TestMediumArticle from "../components/TestMedium";

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





class Face extends React.Component{

    render(){
        return(
            <FaceContainer>
            <LeftContainer>
            <GfreeCard/>
            <GitHubReposContainer>
                <RepoCard/>
            </GitHubReposContainer>
            </LeftContainer>
            <InfoContainer>
            <GitHubCard/>
            <MenuCard/>
            <Scard/>
            <LinkedInCard/>
            <TestMediumArticle/>
            </InfoContainer>
            </FaceContainer>  
        )
    }
}
export default Face