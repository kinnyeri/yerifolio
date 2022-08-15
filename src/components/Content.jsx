import { useState } from "react";
import styled from "styled-components";
import { Modal, HighLight } from "../components";
export const Content = ({ title, details }) => {
  const [modal, setModal] = useState(false);
  const [filePath, setFilePath] = useState("");
  const handleClick = (file) => {
    setModal(!modal);
    setFilePath(file !== undefined ? file : "");
    console.log(modal, file);
  };
  return (
    <ContentContainer>
      <TitleBox>
        <HighLight>{title}</HighLight>
      </TitleBox>
      <DetailsContainer>
        {details.map(({ type, icon, content, link, file, fileName }, idx) => (
          <DetailContainer key={idx}>
            <IconBox>{icon}</IconBox>
            <DetailBox>
              {
                {
                  link: (
                    <Detail>
                      <a href={link} target="_blank">
                        {content}
                      </a>
                    </Detail>
                  ),
                  default: <Detail>{content}</Detail>,
                  file: (
                    <Detail>
                      <button onClick={() => handleClick(file)}>
                        {content}
                      </button>
                    </Detail>
                  ),
                  withFile: (
                    <Detail>
                      <span>{content} </span>
                      <button>{fileName}</button>
                    </Detail>
                  ),
                }[type]
              }
            </DetailBox>
          </DetailContainer>
        ))}
        {modal ? <Modal handleClick={handleClick} filePath={filePath} /> : null}
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
