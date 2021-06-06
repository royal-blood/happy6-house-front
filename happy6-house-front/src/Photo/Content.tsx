import styled from "styled-components"
import CommentArea from "./CommentArea"
import {Comment} from './Comment';

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

interface ContentProps {
  id : string,
  title : string,
  imageSrc : string,
  author : string,
  createdDate : string,
  comments : Comment[]
}

const Content = ({ id, title, imageSrc, author, createdDate, comments } : ContentProps) => {
  return (
    <>
      <Header>{title}</Header>
      <Meta>
        <AuthorText>{author}</AuthorText>
        <SmallText>2020</SmallText>
      </Meta>
      <img src={`http://localhost:3001/${imageSrc}`} width="100%"></img>
      <CommentArea comments={comments} id={id}></CommentArea>
    </>
  )
}

export default Content;