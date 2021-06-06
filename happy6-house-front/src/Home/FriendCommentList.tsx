import React from 'react';
import { useQuery } from 'react-query';
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
function useShortComment() {
  // const { isLoading, error, mutate } = useMutation(() => {
  //   return fetch(`http://localhost:3001/posts/comments/${id}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8'
  //     }, body: JSON.stringify({
  //       author: "김만옥",
  //       comment: input,
  //     })
  //   }).then(res => res.json)
  // }, {
  //   onSuccess: () => queryClient.invalidateQueries('posts')
  // })

}

interface ShortComment { 
  nickname: string
  author : string,
  comment : string,
  createdDate : string,
}
const FriendCommentList = () => {

  const { isLoading, error, data } = useQuery('shortcomment', () => {
    return fetch('http://localhost:3001/shortcomment').then(res => res.json() as Promise<{ data : ShortComment[]}>)
  });


  if (isLoading) return <div>'Loading...'</div>
  if (error) return <div>'An error has occurred: ' + error;</div>
  return (
    <div>
      { data?.data.map((value, index) => {
        console.log(value);
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