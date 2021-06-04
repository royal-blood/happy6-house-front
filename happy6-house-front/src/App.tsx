import React from "react";
import Login from "./Pages/Login";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Board from "./Pages/Board";
import QuoteBoard from "./Pages/QuoteBoard/QuoteBoard";
import AuthRoute from "./AuthRoute";
import styled from "styled-components";
import Home from "./Home/Home";
import Photo from "./Photo/Photo";
import { useEffect } from "react";
import { useRef } from "react";
import YouTube, { Options } from "react-youtube";
import NavButtons from "./NavButton/NavButtons";


const BackgroundImage = styled.div`
  background: url(/pwin_back.gif);
  height:100vh;
`

const Container = styled.div`
  box-sizing:border-box;
  background: #08B2D8;
  width:70%;
  height:80%;
  border-radius:8px;
  position:absolute;
  left:50%;
  top:50%;
  transform : translate(-50%, -50%);
  border: 1px solid black;
  padding:32px;
`

const Dash = styled.div`
  box-sizing:border-box;
  width:100%;
  height:100%;
  padding:5px;
  border-radius:8px;
  border: 1px dashed white;
`

const Test = styled.div`
position:relative;
box-sizing:border-box;
width:100%;
height:100%;
background:#F0F0F0;
border-radius:8px;
border: 1px solid black;
padding:5px;
display:flex;
flex-direction:column;
`

const Header = styled.div`
display:flex;
align-items:flex-end;
max-height:30px;
min-height:30px;
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
function App() {
  const opts: Options = {
    height: '390',
    width: '640',
    playerVars: {
      "fs": 1,
      autoplay: 1,
    },
  };



  // export interface Options {
  //   height?: string;
  //   width?: string;
  //   host?: string;
  //   playerVars?: PlayerVars;
  // }
  //  /* font-family: 'GF_GuardianAngel_12px'; */

  return (
    <BackgroundImage>
      {/* <YouTube videoId={`2g811Eo7K8U`} opts={opts}/> */}
      {/* <audio src="/freestyle.mp3" ref={ref}/>  */}
      <Container>
        <Dash>
          <Test>
            <Router>
              <NavButtons />
              <Header>
                <Left style={{ textAlign: 'center', padding: '0 16px', fontFamily: "GF_GuardianAngel_12px" }}><span>TODAY 12 | TOTAL 120 </span></Left>
                <Right style={{ fontFamily: 'none', height: '100%', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}><span style={{ marginRight: 'auto', fontSize: "1.3rem", fontWeight: "bolder", color: "#272782" }}>서울 6반의 미니홈피</span> <span style={{ fontSize: '9px' }}> http://ssafy.com/seoul/6</span> </Right>
              </Header>
              <Switch>
                <Route path={"/photo"}>
                  <Photo />
                </Route>
                <Route path={["/", "/home"]}>
                  <Home />
                </Route>
                {/* <AuthRoute
                path="/board"
                render={() => <Board></Board>}
                authenticated={false}
              /> */}
                {/* <Route path="/quoteboard">
                <QuoteBoard />
              </Route> */}
              </Switch>
            </Router>
          </Test>
        </Dash>
      </Container>

    </BackgroundImage>
  );
}
export default App;
