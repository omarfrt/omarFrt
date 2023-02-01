import React from "react";
import styled from "styled-components";

const Mcard = styled.div`

width: 650px;
height: 275px;
left: 725px;
top: 614px;

background: #D9D9D9;
border-radius: 20px;`

class MediumCard extends React.Component{

    render(){
        return(
            <Mcard></Mcard>
        )
    }
}
export default MediumCard;