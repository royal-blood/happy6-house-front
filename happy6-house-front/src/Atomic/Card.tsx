import styled from 'styled-components';
import React from 'react';
import Header from './Header';
import { FaComments } from 'react-icons/fa';


const StyledImg = styled.img`
    position:absolute;
    bottom:0;
    right:0;
    width:50%;
    transition:transform 0.3s;

`

const StyledCard = styled.div`

    position:relative;
    box-sizing:border-box;
    padding:20px 20px;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    background: #fff;
    margin: 1rem;
    position: relative;
    overflow:hidden;
    height:300px;
    transition : box-shadow 0.5s;
    z-index:1;
    color:#4e5968;

    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    &:hover ${StyledImg} {
        transform: scale(1.1);
    }
`

const StyledDiv = styled.div`
    position:absolute;
    bottom:20px;
    left:20px;
    z-index:2;
`
const StyledFlex = styled.div`
    display:flex;
    align-items:center;
    font-weight:normal;
    color:#b0b8c1;
    size:0.8rem;
    font-weight:normal;
`

interface CardProps {
    subject: string
    text : string;
    imgSrc:string;
}

const Card = ( props : CardProps ) => {
    const { subject, text, imgSrc} = props;
    return (
    <>  
        <StyledCard>
            <Header size={"medium"} text={"취업에 쓸만한 기술블로그 정리"}/>
            <StyledFlex>

            <FaComments></FaComments> 
            <div>&nbsp;2</div>
            </StyledFlex>
            
            <StyledDiv>
            <strong>SSAFY</strong><br/>
            김싸피 
            </StyledDiv>
            <StyledImg src={imgSrc}></StyledImg>
        </StyledCard>
    </>)

}

export default Card;