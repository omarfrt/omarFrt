import React from "react";
import styled from "styled-components";
import { Scard } from "./Cards";

const LinkedIn = styled(Scard)`
background-image: url(./Linkedin-background.png);
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
align-items: center;
justify-content: center;
`;

class LinkedInCard extends React.Component{
    render(){
        return(
            <LinkedIn>
            <img src="./LinkedIn-Logo.png"/>
            </LinkedIn>
        )
    }
}

export default LinkedInCard;