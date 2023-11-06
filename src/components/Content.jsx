import { useState } from "react";
import styled from "styled-components";
import { Modal, HighLight } from "../components";
export const Content = ({ title, details }) => {
  const [modal, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({ filePath: "", fileType: "" });
  const handleClick = ({ file, fileType }) => {
    setModal(!modal);
    setModalProps({
      filePath: file !== undefined ? file : "",
      fileType: fileType !== undefined ? fileType : "",
    });
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
                      <a href={link} target="_blank" rel="noreferrer">
                        {content}
                      </a>
                    </Detail>
                  ),
                  default: <Detail>{content}</Detail>,
                  file: (
                    <Detail>
                      <FileButton
                        onClick={() => handleClick({ file, fileType: "file" })}
                      >
                        {content}
                      </FileButton>
                    </Detail>
                  ),
                  image: (
                    <Detail>
                      <FileButton
                        onClick={() => handleClick({ file, fileType: "image" })}
                      >
                        {content}
                      </FileButton>
                    </Detail>
                  ),
                  withFile: (
                    <Detail>
                      <span>{content} </span>
                      <FileButton
                        onClick={() => handleClick({ file, fileType: "file" })}
                      >
                        {fileName}
                      </FileButton>
                    </Detail>
                  ),
                }[type]
              }
            </DetailBox>
          </DetailContainer>
        ))}
        {modal ? <Modal handleClick={handleClick} {...modalProps} /> : null}
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

const FileButton = styled.button`
  padding: 5px 15px;
  font-size: 0.8rem;
  text-align: center;
  color: black;
  border: 1px solid grey;
  border-radius: 12px;
  background-color: var(--color-detail-back);
  &:hover {
    cursor: pointer;

    background-color: var(--color-main);
    border-color: var(--color-main);
  }
`;
