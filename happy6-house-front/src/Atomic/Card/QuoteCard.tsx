import React from 'react';
import styled, { css } from 'styled-components';
import Card from './Card';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'

export type QuoteCardOption = {
    title : string,
    author : string
}
export interface QuoteCardProps {
    option: QuoteCardOption;
    onClicked : () => void;
}

const Position = {
    topLeft : css`
        top : -30px;
        left : -5px;
    `,
    topRight : css`
        bottom: -30px;
        right: -5px;
    `
}

// TODO : https://www.daleseo.com/react-button-component/
// TODO : 외부에서 설정 - 추상화 필요 논의

type PositionKey = keyof typeof Position;
type key = { positionKey : PositionKey} 

const QuoteWrapper = styled.div<key>`
    position:absolute;
    ${props => Position[props.positionKey]}
    margin:0;
    padding:0;
    color:lightGrey;
    z-index: -1;
`

// TODO : size 동적으로 변화하게 만들기.
const MarginedWrapper = styled.div`
    position:relative;
    font-size:20px;
    margin:30px;
`

// TODO : absolute 남용 제거?
// TODO : 스타일 통일화 (추상화 레벨 다시 잡기)
const NameGroup = styled.div`
    position:absolute;
    bottom: 10px;
    right: 10px;
    text-align:right;
`

const QuoteCard = () => {
    return (
        <>
            <Card>
                <QuoteWrapper positionKey="topLeft">
                    <FaQuoteLeft size={100}/>
                </QuoteWrapper>
                <QuoteWrapper positionKey="topRight">
                    <FaQuoteRight size={100}/>
                </QuoteWrapper>
                <MarginedWrapper>
                    <div>
                        안녕하세요 제 이름은 최지우 입니다. <br/>
                        이 방명록은 테스트 입니다. 테스트를 많이 남겨주세요.
                    </div>
                </MarginedWrapper>
                <NameGroup>
                    <strong>최지우</strong>
                    <div>최지우입니다</div>
                </NameGroup>
            </Card>
        </>
    )
}

export default QuoteCard;