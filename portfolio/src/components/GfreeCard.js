import React from "react";
import styled from "styled-components";
import { LCard } from "./Cards";
import GfreeSite from "../Gfree.json"

const GfreeImg = GfreeSite.thumbnail_url
const Gfree = styled(LCard)`
background-image: url(${GfreeImg});
background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  &:hover,
  &:focus-within {
    box-shadow: 0px 30px 100px rgba(168, 172, 176, 0.19);
  }
`;
export const GfreeCard = ()=>{
  return (
    <a href={"https://gfree.co/"} target="_blank" rel='noreferrer' style={{textDecoration: "none"}}>
      <Gfree  whileHover={{ scale: 1.05, }}
            whileTap={{ scale: 1.2  }}/>
    </a>
  )
}

export default GfreeCard;