import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import PageWrapper from "./components/PageWrapper";
import SideBarBox from "./components/SideBar";
import Project from "./Project";
import Skill from "./Skill";

const GlobalStyles = createGlobalStyle`
  html {
    --color-main: #BCAFD4;
  }
`;
const OuterPageBox = styled.div`
  height: 100vh;
  overflow-y: auto;
`;
const MainPageBox = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-itmes: center;
`;
const ContentPageBox = styled.div`
  display: flex;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <OuterPageBox>
        <MainPageBox></MainPageBox>
        <ContentPageBox>
          <SideBarBox />
          <PageWrapper>
            <Skill />
            <Project />
          </PageWrapper>
        </ContentPageBox>
      </OuterPageBox>
    </>
  );
}

export default App;
