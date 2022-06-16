import React, { useRef, useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { MovePageBtn, PageWrapper, SideBar } from "./components";
import { Profile, Project, Skill } from "./pages";

const GlobalStyles = createGlobalStyle`
  html {
    --color-main: #BCAFD4;
    --color-back: #efefef;
  }
`;
const OuterPageBox = styled.div`
  height: 100vh;
  overflow-y: auto;
`;

const ContentPageBox = styled.div`
  display: flex;
`;
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
          <PageWrapper>
            <Skill />
            <Project />
          </PageWrapper>
        </ContentPageBox>
        <MovePageBtn isDown={isDown} />
      </OuterPageBox>
    </>
  );
}

export default App;
