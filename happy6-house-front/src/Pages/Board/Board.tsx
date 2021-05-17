import React from "react";

import Card from "../../Atomic/Card/Card";
import Header from "../../Atomic/Header";
import S from "./styles"

const Board = () => {
  return (
    <>
      <S.Header>
        <Header size="big" text="방명록"/>
        <strong>6반 학생들이 남긴 방명록을 확인해보세요.</strong>
      </S.Header>
      <S.Grid>
        {/* <Card realname={"조의상"} nickname={"청소왕가리"} title={"바탕화면 정리는 이렇게 하세요"} imgSrc={"./you.png"} comment={5}/> */}
      </S.Grid>
    </>
  )
}

export default Board;