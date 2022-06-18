import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

export const DetailContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = {
    title: "JavaScript",
    content: "클로저 개념을 명확히 압니다.",
  };
  const handleClick = () => {
    console.log("click");
    setIsOpen(!isOpen);
  };
  return (
    <Container onClick={handleClick}>
      <TitleContainer>
        <IconBox>
          <FontAwesomeIcon icon={faCircleChevronDown} />
        </IconBox>
        <TitleBox>{data.title}</TitleBox>
      </TitleContainer>
      {isOpen && <ContentContainer>{data.content}</ContentContainer>}
    </Container>
  );
};
const Container = styled.div`
  width: 80%;
  background: #f4f4f4;
  border: 1px solid var(--color-main);
`;
const TitleContainer = styled.div`
  padding: 5px;
`;
const IconBox = styled.span`
  color: var(--color-main);
`;
const TitleBox = styled.span`
  margin-left: 10px;
`;

const ContentContainer = styled.div`
  padding: 5px;
  padding-left: 30px;
`;
