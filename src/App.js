import React, { useRef, useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  MovePageBtn,
  ContentsWrapper,
  Footer,
  ProgressBar,
  SideBar,
} from "./components";
import { Profile, Project, Skill, Education, Experience, Extra } from "./pages";

function App() {
  const OuterPageBoxRef = useRef();
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const wheelHandler = (e) => {
      const { scrollTop } = OuterPageBoxRef.current;
      if (scrollTop > 0) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    const boxRefCurrent = OuterPageBoxRef.current;
    boxRefCurrent.addEventListener("scroll", wheelHandler);
    return () => {
      boxRefCurrent.removeEventListener("scroll", wheelHandler);
    };
  }, []);
  const handleClick = () => {
    console.log("clicked");
    OuterPageBoxRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <GlobalStyles />
      <OuterPageBox ref={OuterPageBoxRef}>
        <ProgressBar OuterPageBoxRef={OuterPageBoxRef} />
        <Profile />
        <ContentPageBox id="contents">
          <SideBar />
          <ContentsWrapper>
            <Skill />
            <Project />
            <Education />
            <Experience />
            <Extra />
          </ContentsWrapper>
        </ContentPageBox>
        {showTopBtn && <MovePageBtn handleClick={handleClick} />}
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
      text-decoration-line: none;
    }
  }
`;
const OuterPageBox = styled.div`
  height: 100vh;
  overflow-y: auto;
`;

const ContentPageBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;
export default App;
