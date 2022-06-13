import React from "react";
import styled from "styled-components";

const SideBarBox = styled.div`
  width: 20vw;
  height: 100vh;
  color: black;
  background-color: var(--color-main);

  position: sticky;
  top: 0;
`;

const SideBar = () => {
  return (
    <SideBarBox>
      <div>Skills</div>
      <div>Skills</div>
      <div>Skills</div>
      <div>Skills</div>
    </SideBarBox>
  );
};

export default SideBar;
