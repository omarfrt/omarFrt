import React from "react";
import styled from "styled-components"
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
const FaceContainer = styled.div`
display: flex;
gap: 10px;
align-items: center;
margin-Left: 100px
`
const LeftContainer= styled.div`
display: flex;
flex-direction: column;
gap:10px;
`
const GitHubReposContainer = styled.div`
display: flex;
flex-direction: row;
gap:10px`
class Face extends React.Component{

    render(){
        return(
            <FaceContainer>
            <LeftContainer>
            <LargeCard/>
            <GitHubReposContainer>
            <SmallCard/>
            <SmallCard/>
            </GitHubReposContainer>
            </LeftContainer>
            <SmallCard/>
            <SmallCard/>
            <SmallCard/>
            <MediumCard/>
            </FaceContainer>
        )
    }
}
export default Face