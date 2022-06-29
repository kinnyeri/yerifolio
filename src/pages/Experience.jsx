import styled from "styled-components";
import { PageWrapper, Content } from "../components";
import { PROFILE } from "../data";

export const Experience = () => {
  return (
    <PageWrapper icon="👾" title="Experience">
      <ExperienceBox>
        {PROFILE.experiences.map((experience) => (
          <Content key={experience.title} {...experience} />
        ))}
      </ExperienceBox>
    </PageWrapper>
  );
};

const ExperienceBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;
