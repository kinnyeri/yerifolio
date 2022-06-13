import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { PageWrapper, SideBar } from "./components";
import { Profile, Project, Skill } from "./pages";

const GlobalStyles = createGlobalStyle`
  html {
    --color-main: #BCAFD4;
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
  return (
    <>
      <GlobalStyles />
      <OuterPageBox>
        <Profile></Profile>
        <ContentPageBox>
          <SideBar />
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
