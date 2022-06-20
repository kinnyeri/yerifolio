import styled from "styled-components";
import { HighLight, PageWrapper, DetailDropdown } from "../components";
import { PROFILE } from "../data";
const Content = ({ title, subTitle, time, team, details, links, stacks }) => {
  return (
    <ContentContainer>
      <TitleBox>
        <HighLight>{title}</HighLight>
      </TitleBox>
      {subTitle && <SubTitleBox>{subTitle}</SubTitleBox>}
      <DetailsContainer>
        <DetailContainer>
          <IconBox>⏱</IconBox>
          <DetailBox>
            <Detail>{time}</Detail>
          </DetailBox>
        </DetailContainer>
        <DetailContainer>
          <IconBox>🤝‍</IconBox>
          <DetailBox>
            <Detail>{team}</Detail>
          </DetailBox>
        </DetailContainer>
        <DetailContainer>
          <IconBox>➿</IconBox>
          <DetailBox>
            {details.map((detail, idx) => (
              <Detail key={idx}>{detail}</Detail>
            ))}
          </DetailBox>
        </DetailContainer>
        <DetailContainer>
          <IconBox>🔗</IconBox>
          <DetailBox>
            {links.map(({ link, title }, idx) => (
              <Detail key={idx}>
                <a href={link} target="_blank" rel="noreferrer">
                  {title}
                </a>
              </Detail>
            ))}
          </DetailBox>
        </DetailContainer>
        <DetailContainer>
          <IconBox>🗝</IconBox>
          <DetailBox>
            <Detail>사용기술</Detail>
            {stacks.map((stack, idx) => (
              <Detail key={idx}>
                <DetailDropdown {...stack} size="10px"></DetailDropdown>
              </Detail>
            ))}
          </DetailBox>
        </DetailContainer>
      </DetailsContainer>
    </ContentContainer>
  );
};
export const Project = () => {
  return (
    <PageWrapper icon="💻" title="Project">
      <ProjectBox>
        {PROFILE.projects.map((project) => (
          <Content key={project.title} {...project} />
        ))}
      </ProjectBox>
    </PageWrapper>
  );
};

const ProjectBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const TitleBox = styled.div`
  font-size: 2rem;
  line-height: 2rem;
`;
const SubTitleBox = styled.div`
  font-size: 1.2rem;
  line-height: 1.2rem;
`;
const DetailsContainer = styled.div`
  padding-left: 1vw;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 1.2rem;
`;
const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 35px auto;
`;
const IconBox = styled.div`
  line-height: 25px;
`;
const DetailBox = styled.div`
  line-height: 25px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Detail = styled.div`
  & > a {
    color: var(--color-main-dark);
  }
`;
