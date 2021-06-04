import React from "react";
import styled from "styled-components";
import CommentArea from "./CommentArea";

const Header = styled.div`
  height: 26px;
  background : #F5F5F5;
  border-top: 1px solid #DFDFDF;
  border-bottom: 1px dashed #DFDFDF;
  text-align:center;
  font-weight:800;
  font-size:0.8rem;
  letter-spacing:1px;
  display: flex;
  align-items:center;
  justify-content:center;
`

const Meta = styled.div`
  padding: 6px;
`

const AuthorText = styled.span`
  font-size:0.8rem;
  color : #00326b;
`

const SmallText = styled.span`
  font-size:0.5rem;
  color : #919191;
  margin-left:5px;
`

const Content = () => {
  return(
    <div>
      <Header>[스크랩] 안녕하세요</Header>
      <Meta>
        <AuthorText>김만옥</AuthorText>
        <SmallText>2020.05.21</SmallText>
        <SmallText>스크랩 : 0</SmallText>
      </Meta>
      <img src="/test.png" width="100%"/>
      <CommentArea/>

    </div>
  )
}

export default Content;