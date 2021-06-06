import styled from "styled-components";
import folder from './folder.gif';

const Container = styled.div`
box-sizing:border-box;
padding:13px;
display:flex;
flex-direction:column;
height:100%;
border:1px solid rgba(118,118,118, 0.8);
border-radius:3px;
box-shadow: 0 0px 10px rgba(0,0,0,0.1), 0 3px 3px rgba(0,0,0,0.1);
width:100%;
`

const Header = styled.div`
  color : #08B2D8;
  width:100%;
  font-weight:bolder;

  & hr {
    border:1px solid rgba(118,118,118, 0.2);
  }
`
const Row = styled.div`
  display:flex;
  align-items:center;
  margin-bottom:7px;
  & span {
  }
  color : #282782;
`


const Explorer = () => {
  return (
    <Container>
      <Header>
        <div> 게시판 </div>
        <hr/>
      </Header>
      <Row>
        <img src={folder}></img>
        <span>주간일보</span>
      </Row>
      <Row>
        <img src={folder}></img>
        <span>자유게시판</span>
      </Row>
    </Container>
  )
}

export default Explorer;