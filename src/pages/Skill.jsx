import styled from "styled-components";
import { DetailContainer, PageWrapper } from "../components";
import { PROFILE } from "../data";
const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
export const Skill = () => {
  return (
    <PageWrapper icon="📚" title="Skills">
      <SkillBox>
        {PROFILE.skills.map((data) => (
          <DetailContainer key={data.title} {...data}></DetailContainer>
        ))}
      </SkillBox>
    </PageWrapper>
  );
};
