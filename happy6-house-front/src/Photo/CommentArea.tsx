import styled from "styled-components";
import l_ok from './l_ok.gif';
import { Comment } from './Comment';
import { useCallback, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

const Background = styled.div`
  box-sizing:border-box;
  background : #F6F6F6;
  width:100%;
  padding:10px;
`

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

const InputGroup = styled.div`
  border-top: 1px dashed #DFDFDF;
  display:flex;
  margin-top:10px;
  padding-top:10px;
  align-items:center;
  font-size:0.8rem;
  display:flex;


  & input {
    flex:1;
  }


  & button {
    box-sizing:border-box;
    margin-left:10px;
    background:white;
    border-radius:1px;
    border: 1px solid #767676;
    font-weight:bold;
    font-size:0.7rem;
  }
`

interface CommentAreaProps {
  comments: Comment[];
  id: string
}


function useCommentManager(id: string) {
  
  const [input, setInput] = useState('');
  const queryClient = useQueryClient();
  const { isLoading, error, mutate } = useMutation(() => {
    return fetch(`http://localhost:3001/posts/comments/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }, body: JSON.stringify({
        author: "김만옥",
        comment: input,
      })
    }).then(res => res.json)
  }, {
    onSuccess: () => queryClient.invalidateQueries('posts')
  })

  const updatar = useCallback(() => {
    return mutate();
  }, [id]);

  return {
    query: { isLoading, error },
    updatar,
    input: { input, setInput }
  }
}
const CommentArea = ({ comments, id }: CommentAreaProps) => {

  const { query: { isLoading, error }, updatar, input: { input, setInput } } = useCommentManager(id);


  if (isLoading) return <div>loading..</div>;
  if (error) return <div>error..</div>;

  return (
    <Background>
      {comments.map((value, index) => {
        return (
          <CommentGroup key={index}>
            <span>{value.author}</span>
            <span>: {value.comment}</span>
            <span>({value.createdDate})</span>
          </CommentGroup>
        )
      })}

      <InputGroup>
        <span>댓글 &nbsp;</span>
        <input onChange={(e) => setInput(e.currentTarget.value)} value={input} />
        <img src={l_ok} onClick={updatar}></img>
      </InputGroup>
    </Background>
  )
}

export default CommentArea;