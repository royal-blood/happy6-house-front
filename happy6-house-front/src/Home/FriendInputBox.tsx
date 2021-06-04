

import React from 'react';

import styled from 'styled-components';

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




const FriendInputBox = () => {
  return (
    <FriendInputBoxContainer>
      <div className="tag">방명록</div>
      <input placeholder="6반과 나누고 싶은 이야기를 남겨보세요~!"></input>
      <button>확인</button>
    </FriendInputBoxContainer>)
}
export default FriendInputBox