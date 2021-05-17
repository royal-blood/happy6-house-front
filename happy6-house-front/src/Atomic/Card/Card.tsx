import styled from 'styled-components';
import React from 'react';
import Header from '../Header';
import { FaComments } from 'react-icons/fa';
import Styled from './CardStyles';

const SUserThumbnail = styled.img`
    position:absolute;
    bottom:0;
    right:0;
    width:50%;
    transition:transform 0.3s;
`

const SCardContainer = styled.div`
    position:relative;
    margin: 1rem;
    overflow:hidden;
    height:300px;
    z-index:1;
    box-sizing:border-box;
    padding:20px 20px;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    background: #fff;
    transition : box-shadow 0.5s;
    color:#4e5968;
    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    &:hover ${SUserThumbnail} {
        transform: scale(1.1);
    }
    `

export interface CardProps {
    children : React.ReactNode;
    onClicked? : () => void;
}

const Card = ( props : CardProps ) => {
    const { children, onClicked } = props;
    return (
    <>  
        <Styled.Container onClick={onClicked}>
            {children}
        </Styled.Container>
    </>)
}

export default Card;