import React, { useRef, useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { MovePageBtn, ContentsWrapper, SideBar } from "./components";
import { Profile, Project, Skill, Education } from "./pages";

function App() {
  const OuterPageBoxRef = useRef();
  const [isDown, setIsDown] = useState(true);
  // const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const wheelHandler = (e) => {
      const { scrollTop } = OuterPageBoxRef.current;
      if (isDown && scrollTop >= window.innerHeight - 4) {
        setIsDown(false);
      } else if (!isDown && scrollTop < window.innerHeight - 4) {
        setIsDown(true);
      }
    };
    const boxRefCurrent = OuterPageBoxRef.current;
    boxRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      boxRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, [isDown]);
  return (
    <>
      <GlobalStyles />
      <OuterPageBox ref={OuterPageBoxRef}>
        <Profile></Profile>
        <ContentPageBox id="contents">
          <SideBar />
          <ContentsWrapper>
            <Skill />
            <Project />
            <Education />
          </ContentsWrapper>
        </ContentPageBox>
        <MovePageBtn isDown={isDown} OuterPageBoxRef={OuterPageBoxRef} />
      </OuterPageBox>
    </>
  );
}

const GlobalStyles = createGlobalStyle`
  html {
    --color-main: #BCAFD4;
    --color-main-dark: #6C509F;
    --color-back: #efefef;
    --color-back-light: #F9F9F9;
    --color-detail-back : #f4f4f4;
  }
`;
const OuterPageBox = styled.div`
  height: 100vh;
  overflow-y: auto;
`;

const ContentPageBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  @media screen and (max-width: 682px) {
    grid-template-columns: 1fr;
  }
`;
export default App;
