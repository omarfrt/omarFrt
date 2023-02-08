import React from "react";
import styled from "styled-components";
import { Scard } from "./Cards";
import {motion} from "framer-motion"

const GitHub = styled(Scard)`
background-image: url(./GitHub-Background.png);
background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`

class GitHubCard extends React.Component{
  
    render(){
     
        return(
          <GitHub R>
            <motion.img drag whileDrag={{ scale: 0.8 }} dragSnapToOrigin={true} src="./Mark.png" width="115px" height="114px"/>
          </GitHub>
        )
    }
}
export default GitHubCard;