import React from "react";
// import styled from "styled-components";
// import Button from "./Atomic/Button";
// import Input from "./Atomic/Input";
// import InputGroup from "./Atomic/InputGroup";
// import InputLabel from "./Atomic/InputGroup";
// import Lottie from "react-lottie";
// import Board from "./page/Board/index";
import Login from "./Pages/Login";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Board from "./Pages/Board";
import QuoteBoard from "./Pages/QuoteBoard/QuoteBoard";

// const BodyWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   height:100vh;
// `;

// const Body = styled.div`
//   display:flex;
//   flex-direction:column;
//   width:600px;
//   height:400px;
//   margin:auto;
//   padding: 0 20px;
// `

// const LottieWrapper = styled.div`
//   margin:-40px;
// `

// const Margin = styled.div`
//   height:20px;
// `

// const Grid = styled.div`
//   display:grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr;
// `
// const StyledTemp = styled.div`
//     padding:15px;
//     color:#4e5968;
// `



function App() {
  // const defaultOptions = {
  //   loop: false,
  //   autoplay: false,
  //   animationData: login,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice"
  //   }
  // }

  return (
    <Router>
      <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/board">
            <Board/>
          </Route>
          <Route path="/quoteboard">
            <QuoteBoard/>
          </Route>
      </Switch>
    </Router>
    // <Board/>
    // <Board>
    // <StyledTemp>
    // <Header size="big" text="방명록"/>
    //   <strong>6반 학생들이 남긴 방명록을 확인해보세요.</strong>
    // </StyledTemp>
    //   <Grid>
    //   <Card author={"author"} nickname={"nickname"} content={"abc"} subject={"토스 데이터의 흐름과 활용"} imgSrc={"./you.png"}/>
    // </Grid>
    // <BodyWrapper>
    //   <Body
    //   >
    //     <LottieWrapper>
    //       <Lottie 
    //         isStopped={true}
    //         options={defaultOptions}
    //         // isClickToPauseDisabled={true}
    //         height={200} 
    //         width={200}
    //         />
    //     </LottieWrapper>
    //     <InputGroup id="id" text="아이디" isRequired={true}/>
    //     <InputGroup type={"password"} id="password" text="비밀번호" isRequired={true}/>
    //     <Margin/>
    //     <Button text="로그인하기" isLoading={false}/>
    //   </Body>
    // </BodyWrapper>
    // </Board>
  );
}
export default App;
