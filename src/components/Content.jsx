import styled from "styled-components";
import { HighLight } from "./HighLight";
export const Content = ({ title, details }) => {
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
  gap: 5px;
  font-size: 1.2rem;
`;
const DetailContainer = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 682px) {
    display: grid;
    grid-template-columns: 35px auto;
  }
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
const Detail = styled.div``;