import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  box-sizing:border-box;
  padding:10px 0px;
  display:flex;
  flex-direction:column;
  align-items:center;
  height:100%;
  border:1px solid rgba(118,118,118, 0.8);
  border-radius:3px;
  box-shadow: 0 0px 10px rgba(0,0,0,0.1), 0 3px 3px rgba(0,0,0,0.1);

`

const Feeling = styled.div`
  border-radius:2px;
  border: 1px solid rgba(120,120,120,0.3);
  width:90%;
  padding:4px 8px;
  box-sizing:border-box;
  margin-bottom:0.5rem;
  font-size:0.7rem;
  font-family:'sans-serif';
  text-align:center;
`

const ProfileImage = styled.div`
  width:90%;
  margin-bottom:1rem;
`


const Profile = () => {

  return (
    <Container>
      <Feeling> <span style={{fontSize:'0.5rem', fontWeight:'bolder', letterSpacing: '-1px', color:"#08B2D8"}}>TODAY IS...</span> ❤️ 행복 </Feeling>
      <ProfileImage>
        <img src="/profile.png" width="100%"></img>
      </ProfileImage>
      <div style={{fontFamily:"GF_GuardianAngel_12px"}}>나는 지금 미쳐가고 있다.</div>
    </Container>
  )
}

export default Profile;