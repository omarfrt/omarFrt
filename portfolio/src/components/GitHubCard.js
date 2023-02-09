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
export const GitHubCard = ()=>{
  return(
    <a href={"https://github.com/omarfrt"} target="_blank" rel='noreferrer' style={{textDecoration: "none"}}>

      <GitHub whileHover={{ scale: 1.05, }}
              whileTap={{ scale: 1.2  }}>
                <motion.img drag whileDrag={{ scale: 0.8 }} dragSnapToOrigin={true} src="./Mark.png" width="115px" height="114px"/>
              </GitHub>
    </a>
  )
}

export default GitHubCard;