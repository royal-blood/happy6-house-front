import React from 'react';
import styled from 'styled-components';
import Button from './Atomic/Button';
import Input from './Atomic/Input';
import InputGroup from './Atomic/InputGroup';
import InputLabel from './Atomic/InputGroup';
import Lottie from 'react-lottie';
import login from './login.json'
import { useState } from 'react';
import { useForm } from "react-hook-form";



const BodyWrapper = styled.div`
  display: flex;
  align-items: center;
  height:100vh;
`

const Body = styled.div`
  display:flex;
  flex-direction:column;
  width:600px;
  height:400px;
  margin:auto;
  padding: 0 20px;
`
const LottieWrapper = styled.div`
  margin:-40px;
`

const Margin = styled.div`
  height:20px;
`
function App() {

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: login,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <>
    <BodyWrapper>
      <Body>
        <LottieWrapper>
          <Lottie 
            isStopped={true}
            options={defaultOptions}
            isClickToPauseDisabled={true}
            height={200} 
            width={200}
            />
        </LottieWrapper>
        <InputGroup id="id" text="아이디" isRequired={true}/>
        <InputGroup type={"password"} id="password" text="비밀번호" isRequired={true}/>
        <Margin/>
        <Button text="로그인하기" isLoading={false}/>
      </Body>
    </BodyWrapper>
    </>
  );
}

export default App;
