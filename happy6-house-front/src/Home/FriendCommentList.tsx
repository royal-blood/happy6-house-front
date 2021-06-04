import React from 'react';
import styled from 'styled-components';

const Hr = styled.hr` 
  margin:8px 0;
  padding:0;
  border:0.5px solid rgb(196,196,196);
  opacity: 0.5;

`
const Span = styled.span`
  
`
const FLEX = styled.div`
  font-family : none;
  display:flex;
  align-items:center;
  margin-top:8px;
`


const FriendCommentList = () => {
  const list = [{ comment: "너무 즐거웠고 감사했습니다! 화이팅~!", author: "김김", nickname: "용가리"},{ comment: "너무 즐거웠고 감사했습니다! 화이팅~!", author: "김김", nickname: "용가리"}, { comment: "너무 즐거웠고 감사했습니다! 화이팅~!", author: "김김", nickname: "용가리"},]
  return (
    <div>
      { list.map((value, index) => {
        return (
          <>
            <FLEX key={index}>-&nbsp;<span>{value.comment} &nbsp; </span> <Span> ( {value.nickname} <span style={{color:"#262782"}}> {value.author} </span> ) </Span> </FLEX>
            <Hr />
          </>
        )
      })}
    </div>)
}
export default FriendCommentList