import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled, { css } from "styled-components"
import { useHistory , useLocation } from "react-router-dom";

const VARIANTS = {
  normal: css`
    --button-color: white;
    --button-bg-color: #08B2D8;
  `,
  active : css`
    --button-color: black;
    --button-bg-color: white;
  `
};




const RightNavButton = styled.div<{variants:any}>`
  ${ p => p.variants }
  background:var(--button-bg-color);
  color:var(--button-color);
  border-radius: 0 7px 7px 0;
  height:35px;
  width:60px;
  margin-bottom:2px;
  display:flex;
  justify-content:center;
  align-items:center;
  border:1px solid black;
`


const RightNavButtons = styled.div`
  position:absolute;
  right:-53px;
  top:50px;
  z-index:1;
`

type Pages = "home"|"photo"
function useNavButton() {

  const history = useHistory();
  const location = useLocation();

  const [ current, setCurrent ] = useState<Pages>("home");

  useEffect( () => {
    if (location.pathname === "/photo") {
      setCurrent("photo");
    } else {
      setCurrent("home");
    }
  },[location.pathname])


  const goPhoto = useCallback( () => {
    history.push('/photo');
  }, []);

  const goHome = useCallback( () => {
    history.push('/');
  }, [])

  return { value : current, navFunc : { goHome : goHome, goPhoto : goPhoto}};
}

const NavButtons = () => {

  const active = VARIANTS["active"] 
  const normal = VARIANTS["normal"];

  const {value, navFunc : { goHome, goPhoto}} = useNavButton();

  return (
  <RightNavButtons>
    <RightNavButton variants={value === "home" ? active : normal} onClick={goHome}>홈</RightNavButton>
    <RightNavButton variants={value === "photo" ? active : normal} onClick={goPhoto}>사진첩</RightNavButton>
  </RightNavButtons>
  )
}
export default NavButtons;