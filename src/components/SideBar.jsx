import React from "react";
import styled from "styled-components";

const SideBarBox = styled.div`
  min-width: 150px;
  height: 100vh;
  color: black;
  background-color: var(--color-main);

  position: sticky;
  top: 0;

  @media screen and (max-width: 682px) {
    display: none;
  }
`;

export const SideBar = () => {
  return (
    <SideBarBox>
      <div>Skills</div>
      <div>Skills</div>
      <div>Skills</div>
      <div>Skills</div>
    </SideBarBox>
  );
};
