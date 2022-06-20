import styled from "styled-components";
import { DetailDropdown, HighLight, PageWrapper } from "../components";
import { PROFILE } from "../data";
const Content = ({ title, details }) => {
  return (
    <ContentContainer>
      <TitleBox>
        <HighLight>{title}</HighLight>
      </TitleBox>
      <DetailsContainer>
        {details.map(({ icon, content, link }) => (
          <DetailContainer>
            <IconBox>{icon}</IconBox>
            <DetailBox>
              {link !== undefined ? (
                <Detail>
                  <a href={link}>{content}</a>
                </Detail>
              ) : (
                <Detail>{content}</Detail>
              )}
            </DetailBox>
          </DetailContainer>
        ))}
      </DetailsContainer>
    </ContentContainer>
  );
};
export const Education = () => {
  return (
    <PageWrapper icon="🎓" title="Education">
      <EducationBox>
        {PROFILE.educations.map((education) => (
          <Content {...education} />
        ))}
      </EducationBox>
    </PageWrapper>
  );
};
const EducationBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TitleBox = styled.div`
  font-size: 30px;
  line-height: 40px;
`;
const DetailsContainer = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 1.2rem;
`;
const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 45px auto;
`;
const IconBox = styled.div`
  line-height: 25px;
`;
const DetailBox = styled.div`
  line-height: 25px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Detail = styled.div`
  & > a {
    color: var(--color-main-dark);
  }
`;
