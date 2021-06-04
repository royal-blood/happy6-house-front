import styled from "styled-components";

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
    margin-left:8px;
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
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" style={{fill:"#F7E01E", stroke:"#F0F0F0"}}><path d="M2.165,19.551C2.351,19.831,2.664,20,3,20h15c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944 C21.649,11.169,21.336,11,21,11h-1V8c0-1.103-0.897-2-2-2h-6.655L8.789,4H4C2.897,4,2,4.897,2,6v13h0.007 C2.007,19.192,2.056,19.385,2.165,19.551z M18,8v3H6c-0.4,0-0.762,0.238-0.919,0.606L4,14.129V8h6.655H11H18z"></path></svg>
        <span>주간일보</span>
      </Row>
      <Row>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" style={{fill:"#F7E01E", stroke:"#F0F0F0"}}><path d="M2.165,19.551C2.351,19.831,2.664,20,3,20h15c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944 C21.649,11.169,21.336,11,21,11h-1V8c0-1.103-0.897-2-2-2h-6.655L8.789,4H4C2.897,4,2,4.897,2,6v13h0.007 C2.007,19.192,2.056,19.385,2.165,19.551z M18,8v3H6c-0.4,0-0.762,0.238-0.919,0.606L4,14.129V8h6.655H11H18z"></path></svg>
        <span>자유게시판</span>
      </Row>
    </Container>
  )
}

export default Explorer;