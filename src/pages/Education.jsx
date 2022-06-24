import styled from "styled-components";
import { PageWrapper, Content } from "../components";
import { PROFILE } from "../data";

export const Education = () => {
  return (
    <PageWrapper icon="🎓" title="Education">
      <EducationBox>
        {PROFILE.Education.map((education) => (
          <Content key={education.title} {...education} />
        ))}
      </EducationBox>
    </PageWrapper>
  );
};

const EducationBox = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
