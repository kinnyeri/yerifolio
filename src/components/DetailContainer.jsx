import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

export const DetailContainer = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

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
        <TitleBox>{title}</TitleBox>
      </TitleContainer>
      {isOpen && <ContentContainer>{content}</ContentContainer>}
    </Container>
  );
};
const Container = styled.div`
  width: 80%;
  background: var(--color-detail-back);
  border: 1px solid var(--color-main);
`;
const TitleContainer = styled.div`
  padding: 20px;
  font-size: 20px;
`;
const IconBox = styled.span`
  color: var(--color-main);
`;
const TitleBox = styled.span`
  margin-left: 15px;
`;

const ContentContainer = styled.div`
  padding: 0 20px 20px 50px;
`;
