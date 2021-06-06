

import React, { useCallback, useState } from 'react';
import l_ok from './l_ok.gif';

import styled from 'styled-components';
import { useMutation, useQueryClient } from 'react-query';

const FriendInputBoxContainer = styled.div`
  font-family: noto;
  font-weight:900;
  color: #08B2D8;
  font-size:0.9rem;
  background:#F4F4F4;
  padding:10px 15px;
  display:flex;
  align-items:center;
  border:1px solid rgb(238,238,238);

  & .tag {
    margin-right:10px;
  }

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
  }
`



function useShortCommentManager() {

  const [input, setInput] = useState('');
  const queryClient = useQueryClient();
  const { isLoading, error, mutate } = useMutation(() => {
    return fetch(`http://localhost:3001/shortcomment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }, body: JSON.stringify({
        nickname: "김만옥",
        author: "안냥",
        comment: input,
        createdDate : "2020-01-04"
      })
    }).then(res => res.json)
  }, {
    onSuccess: () => queryClient.invalidateQueries('shortcomment')
  })

  const updatar = useCallback(() => {
    return mutate();
  }, []);

  return {
    query: { isLoading, error },
    updatar,
    input: { input, setInput }
  }
}


const FriendInputBox = () => {
  const { query : { isLoading, error} , updatar, input : { input, setInput } } = useShortCommentManager();

  return (
    <FriendInputBoxContainer>
      <div className="tag">방명록</div>
      <input placeholder="6반과 나누고 싶은 이야기를 남겨보세요~!" value={input} onChange={(e) => setInput(e.currentTarget.value)}></input>
      <img src={l_ok} onClick={updatar}/>
    </FriendInputBoxContainer>
    )
}
export default FriendInputBox