import styled from "styled-components";
import { DetailDropdown, PageWrapper } from "../components";
import { PROFILE } from "../data";
const SkillBox = styled.div`
  width: 80%;
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
