import styled from "styled-components";
import { DetailDropdown, PageWrapper } from "../components";
import { PROFILE } from "../data";

export const Skill = () => {
  return (
    <PageWrapper icon="📚" title="Skills">
      <SkillBox>
        {PROFILE.Skill.map((data) => (
          <DetailDropdown
            key={data.title}
            {...data}
            size="20px"
          ></DetailDropdown>
        ))}
      </SkillBox>
    </PageWrapper>
  );
};
const SkillBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
