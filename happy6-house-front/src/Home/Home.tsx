import React from "react"
import styled from "styled-components"
import FriendCommentList from "./FriendCommentList"
import FriendInputBox from "./FriendInputBox"
import MiniRoom from "./MiniRoom"
import Profile from "./Profile"



const Body = styled.div`
position:relative;
z-index:2;
display:flex;
background:white;
border: 1px solid black;
border-radius:5px;
height:100%;
overflow:scroll;
`

const Left = styled.div`
max-width:200px;
min-width:200px;
`

const Right = styled.div`
overflow:scroll;
flex:1;
box-sizing:border-box;
height:100%;
`

const ContentContainer = styled.div`
position:relative;
overflow:scroll;
box-sizing:border-box;
border:1px solid rgba(118,118,118, 0.7);
height:100%;
border-radius:4px;
padding:9px 30px;
box-shadow: 0 0px 10px rgba(0,0,0,0.1), 0 3px 3px rgba(0,0,0,0.1);
z-index:2;
background:white;
`

const Home = () => {

  return (
      <Body>
        <Left style={{ padding: '8px' }}>
          <Profile />
        </Left>
        <Right style={{ padding: '8px' }}>
          <ContentContainer>
            <MiniRoom></MiniRoom>
            <FriendInputBox></FriendInputBox>
            <FriendCommentList></FriendCommentList>
          </ContentContainer>
        </Right>
      </Body>
  )
}
export default Home;