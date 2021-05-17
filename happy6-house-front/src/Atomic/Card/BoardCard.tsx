import styled from 'styled-components';
import React from 'react';
import Header from '../Header';
import { FaComments } from 'react-icons/fa';
import Card from './Card';


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

const SNameGroup = styled.div`
    position:absolute;
    bottom:20px;
    left:20px;
    z-index:2;
`
const SSmallGreyText = styled.div`
    color:#b0b8c1;
    size:0.8rem;
`

const SFlex = styled.div`
    display:flex;
    align-items:center;
`

export type CardOptions = {
    /** 게시글 타이틀 */
    title: string;
    /** 게시글 작성자 실이름. */
    realname: string;
    /** 게시글 작성자 닉네임 */
    nickname: string;
    /** 카드에 들어갈 이미지 */
    imgSrc?:string;
    /** 카드 작성 날짜 */
    date?: string;
    /** 카드 댓글 개수 */
    comment?: number;
}

export interface CardProps {
    options : CardOptions;
    onClicked? : () => void;
}

const BoardCard = ( props : CardProps ) => {
    const { title, realname, nickname, imgSrc, comment} = props.options;
    const { onClicked } = props;
    return (
    <>  
        <Card onClicked={onClicked}>
                <Header size={"medium"} text={title}/>
                <SSmallGreyText>
                    <SFlex>
                        <FaComments/> 
                        <div>&nbsp;{comment}</div>
                    </SFlex>
                </SSmallGreyText>
                <SNameGroup>
                    <strong>{realname}</strong><br/>
                    {nickname}
                </SNameGroup>
                <SUserThumbnail src={imgSrc}></SUserThumbnail>
        </Card>
    </>)

}

export default BoardCard;