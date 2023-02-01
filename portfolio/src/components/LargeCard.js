import React from "react";
import styled from "styled-components";

const LCard= styled.div`

width: 650px;
height: 560px;
left: 65px;
top: 30px;
border-radius: 20px;
background: #FFFFFF;

`

class LargeCard extends React.Component{

    render(){
        return(
          <LCard></LCard>
        )
    }
}
export default LargeCard;