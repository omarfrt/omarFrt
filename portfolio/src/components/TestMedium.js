import React from "react";
import styled from "styled-components";
import { TestMcard } from "./Cards";
import Articles from "../mediumArticles.json"
const ArticleContainer= styled(TestMcard)`
background: #FFFFFF;
position: relative;
display: flex;
flex-direction: column;
padding-left: 50px;
`;
const PrevTitle = styled.div`


font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 28px;


color: #000000;


`;
const PrevDescription = styled.div`

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 28px;

/* or 175% */

color: #454545;

`
const PrevLink = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 28px;

/* or 215% */

color: #646464;

`
const PrevImg = styled.div`
width: 203px;
height: 161px;
border-radius: 20px;
position: absolute;
top: 20px;
right: 10px;

`
// http://api.linkpreview.net/?key=5b54e80a65c77848ceaa4630331e8384950e09d392365&q=https://medium.com/@iroonix5/can-blockchain-fix-fairtrade-problems-43e28c4578b5
class TestMediumArticle extends React.Component{
        constructor(props){
            super(props);
            this.state={
                error: null,
                isLoaded: false,
                items:Articles[0]
            }
        }
    render(){
        return(
            <ArticleContainer drag whileHover={{ scale: 1.1, }}
            whileTap={{ scale: 1.2  }} whileDrag={{ scale: 1.2 }}>
             <PrevTitle>{this.state.items.title}</PrevTitle>
             <PrevDescription>{this.state.items.description }</PrevDescription>
             <PrevLink>{this.state.items.url}</PrevLink>
             <PrevImg ><img src={this.state.items.thumbnail_url} alt="preview" width="100%" height="100%" /></PrevImg>
             {console.log({art: Articles})}
            </ArticleContainer>
        )
    }
}

export default TestMediumArticle;