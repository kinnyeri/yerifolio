import styled from "styled-components";
import { HighLight } from "./HighLight";
export const Content = ({ title, details }) => {
  return (
    <ContentContainer>
      <TitleBox>
        <HighLight>{title}</HighLight>
      </TitleBox>
      <DetailsContainer>
        {details.map(({ icon, content, link }, idx) => (
          <DetailContainer key={idx}>
            <IconBox>{icon}</IconBox>
            <DetailBox>
              {link !== undefined ? (
                <Detail>
                  <a href={link} target="_blank">
                    {content}
                  </a>
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
  padding-left: 1vw;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1.2rem;
  @media screen and (max-width: 682px) {
    font-size: 1rem;
  }
`;
const DetailContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const IconBox = styled.div`
  line-height: 28px;
`;
const DetailBox = styled.div`
  line-height: 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Detail = styled.div``;
