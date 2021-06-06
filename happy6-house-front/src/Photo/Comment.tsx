import styled from "styled-components";

const CommentGroup = styled.div`
  display:flex;
  align-items:center;
  font-size:0.8rem;
  margin-bottom:3px;
  & span:nth-child(1) {
    color : #00326b;
  }

  & span:nth-child(3) {
    font-size:0.7rem;
    color:#DFDFDF;
  }
`

export interface Comment {
  author: string,
  comment : string,
  createdDate : string,
}

interface CommentProps { 
  comment : Comment,
  id : string,
}

const Comment = ({ comment: { author, comment, createdDate}} : CommentProps) => {
  return (
    <CommentGroup>
      <span>{author}</span>
      <span> : {comment}</span>
      <span>&nbsp;({createdDate})</span>
    </CommentGroup>
  )
}
export default Comment;