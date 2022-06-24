import React from "react";
import styled from "styled-components";
import { LIST, PROFILE } from "../data";

export const SideBar = () => {
  return (
    <SideBarBox>
      <SideBarContentContainer>
        {LIST.map(({ main, subs }) => {
          return (
            <ListContainer key={main}>
              <MainBox>{main}</MainBox>
              {subs.map((sub) => (
                <SubBox key={sub}>{sub}</SubBox>
              ))}
            </ListContainer>
          );
        })}
      </SideBarContentContainer>
      <UpdatedDateBox>updated at {PROFILE.updatedDate}</UpdatedDateBox>
    </SideBarBox>
  );
};

const SideBarBox = styled("nav")`
  min-width: 100px;
  height: 100vh;

  color: black;
  background-color: var(--color-main);

  position: sticky;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 682px) {
    display: none;
  }
`;
const SideBarContentContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;
const MainBox = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;
const SubBox = styled.div`
  font-size: 1rem;
`;
const UpdatedDateBox = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 0.9rem;
  padding-left: 8px;
`;
