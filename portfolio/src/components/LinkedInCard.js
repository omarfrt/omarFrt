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

export const LinkedInCard = ()=>{
    return(
        <a href={"https://www.linkedin.com/in/omar-fertat-30953717b/"} target="_blank" rel='noreferrer' style={{textDecoration: "none"}}>
        <LinkedIn whileHover={{ scale: 1.05, }}
              whileTap={{ scale: 1.2  }}>
        <img src="./LinkedIn-Logo.png" alt="Linkedin"/>
        </LinkedIn>
        </a>
    )
}

export default LinkedInCard;