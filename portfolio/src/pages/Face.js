import React from "react";
import styled from "styled-components"
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
const FaceContainer = styled.div`

`
class Face extends React.Component{

    render(){
        return(
            <FaceContainer>
            <LargeCard/>
            <SmallCard/>
            <MediumCard/>
            </FaceContainer>
        )
    }
}
export default Face