import React from "react";
import styled from "styled-components";

const Scard= styled.div`
position: absolute;
width: 320px;
height: 275px;
left: 725px;
top: 30px;

background: #D9D9D9;
border-radius: 20px;`

class SmallCard extends React.Component{
    render(){
        return(
           <Scard>

           </Scard>
        )
    }
}
export default SmallCard