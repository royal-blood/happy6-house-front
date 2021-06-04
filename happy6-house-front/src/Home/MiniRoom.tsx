import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top:10px;
  margin-bottom:10px;
`
const Header = styled.div`
  font-family:none;
  font-weight:900;
  font-size:1.1rem;
  color:#08B2D8;
  margin-bottom:3px;
`
const Subheader = styled.span`
  font-size:0.7rem;
  color:#919291;
  font-family: "GF_GuardianAngel_12px";
  font-size:11px;
`
const Hr = styled.hr` 
  margin:3px 0;
  padding:0;
  border:1px solid rgb(196,196,196);
`

const MinimiSpace = styled.div`
  box-sizing:border-box;
  max-width:1000px;
  margin:0 auto;
  border:1px solid rgb(196,196,196);
  background-repeat: no-repeat;
`
const Inner = styled.div`
  position:relative;
  padding-top:47%;
  background-image:url('/miniroom.png');
  background-size:cover;
  background-repeat:no-repeat;

  & img {
    position:absolute;
  }
`
const MiniRoom = () => {

  return (
    <Container>
      <Header>미니룸 <Subheader> miniroom </Subheader></Header>
      <Hr/>
      <MinimiSpace>
        <Inner>
          <img src="/sorry_2.gif" width="17%" style={{ bottom: '10px', left: '60px' }}></img>
          <img src="/minimi.gif" width="15%" style={{ bottom: '30px', right: '70px' }}></img>
        </Inner>
      </MinimiSpace>
    </Container>
  )
}

export default MiniRoom;