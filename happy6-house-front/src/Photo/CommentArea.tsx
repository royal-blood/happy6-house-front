import styled from "styled-components";

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

const CommentArea = () => {
  return (<Background>
    <CommentGroup>
      <span>김만옥</span>
      <span> : 정말 멋집니다 수고하셨습니다!</span>
      <span>&nbsp;(2021-01-05)</span>
    </CommentGroup>
    <CommentGroup>
      <span>김만옥</span>
      <span> : 정말 멋집니다 수고하셨습니다!</span>
      <span>&nbsp;(2021-01-05)</span>
    </CommentGroup>
    <CommentGroup>
      <span>김만옥</span>
      <span> : 정말 멋집니다 수고하셨습니다!</span>
      <span>&nbsp;(2021-01-05)</span>
    </CommentGroup>
    <CommentGroup>
      <span>김만옥</span>
      <span> : 정말 멋집니다 수고하셨습니다!</span>
      <span>&nbsp;(2021-01-05)</span>
    </CommentGroup>

    <InputGroup>
      <span>댓글 &nbsp;</span>
      <input/>
      <button>확인</button>
    </InputGroup>
  </Background>)
}

export default CommentArea;