import React from "react";
import styled from "styled-components";

const SideBarBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  min-width: 150px;
  height: 100vh;
  color: black;
  background-color: var(--color-main);

  position: sticky;
  top: 5px;

  font-family: PyeongChangPeace-Bold;

  @media screen and (max-width: 682px) {
    display: none;
  }
`;
const ContainerBox = styled.div`
  height: 70%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-size: 30px;
`;
const IndexName = styled.a`
  &:hover {
    color: white;
    transition: 0.2s;
  }
`;

export const SideBar = () => {
  return (
    <SideBarBox>
      <ContainerBox>
        <div>
          <IndexName href="#Stack">Stack</IndexName>
        </div>
        <div>
          <IndexName href="#Projects">Projects</IndexName>
        </div>
        <div>
          <IndexName href="#Education">Education</IndexName>
        </div>
        <div>
          <IndexName href="#Experience">Experience</IndexName>
        </div>
        <div>
          <IndexName href="#etc.">etc.</IndexName>
        </div>
      </ContainerBox>
    </SideBarBox>
  );
};
