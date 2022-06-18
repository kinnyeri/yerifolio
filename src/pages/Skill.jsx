import styled from "styled-components";
import { DetailContainer } from "../components";
const SkillBox = styled.div`
  width: 100%;
  height: 100vh;
  background-color: yellow;
`;
export const Skill = () => {
  return (
    <SkillBox>
      <DetailContainer></DetailContainer>
    </SkillBox>
  );
};
