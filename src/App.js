import React, { useRef, useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  MovePageBtn,
  ContentsWrapper,
  Footer,
  ProgressBar,
} from "./components";
import { Profile, Project, Skill, Education, Experience, Extra } from "./pages";

function App() {
  const OuterPageBoxRef = useRef();
  // const [isDown, setIsDown] = useState(true);
  // // const [scrollTop, setScrollTop] = useState(0);
  // useEffect(() => {
  //   const wheelHandler = (e) => {
  //     const { scrollTop } = OuterPageBoxRef.current;
  //     if (isDown && scrollTop >= window.innerHeight - 4) {
  //       setIsDown(false);
  //     } else if (!isDown && scrollTop < window.innerHeight - 4) {
  //       setIsDown(true);
  //     }
  //   };
  //   const boxRefCurrent = OuterPageBoxRef.current;
  //   boxRefCurrent.addEventListener("wheel", wheelHandler);
  //   return () => {
  //     boxRefCurrent.removeEventListener("wheel", wheelHandler);
  //   };
  // }, [isDown]);
  return (
    <>
      <GlobalStyles />
      <OuterPageBox ref={OuterPageBoxRef}>
        <ProgressBar OuterPageBoxRef={OuterPageBoxRef} />
        <Profile />
        <ContentPageBox id="contents">
          <ContentsWrapper>
            <Skill />
            <Project />
            <Education />
            <Experience />
            <Extra />
          </ContentsWrapper>
        </ContentPageBox>
        <MovePageBtn />
        <Footer />
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
    --color-back-dark: #DCDCDC;
    --color-detail-back : #f4f4f4;
    a {
      color: var(--color-main-dark);
    }
  }
`;
const OuterPageBox = styled.div`
  height: 100vh;
  overflow-y: auto;
`;

const ContentPageBox = styled.div``;
export default App;
