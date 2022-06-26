import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronDown,
  faCircleChevronUp,
} from "@fortawesome/free-solid-svg-icons";

export const DetailDropdown = ({ title, content, size }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container onClick={handleClick}>
      <TitleContainer size={size}>
        <IconBox>
          <FontAwesomeIcon
            icon={isOpen ? faCircleChevronUp : faCircleChevronDown}
          />
        </IconBox>
        <TitleBox>{title}</TitleBox>
      </TitleContainer>
      {isOpen && <ContentContainer size={size}>{content}</ContentContainer>}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  background: var(--color-detail-back);
  border: 1px solid var(--color-main);
`;
const TitleContainer = styled.div`
  padding: ${(props) => props.size};
  font-size: 1.2rem;
  @media screen and (max-width: 682px) {
    font-size: 1rem;
  }
`;
const IconBox = styled.span`
  color: var(--color-main);
`;
const TitleBox = styled.span`
  margin-left: 15px;
`;

const ContentContainer = styled.div`
  padding: 0 ${(props) => props.size} ${(props) => props.size}
    ${(props) => props.size};
  font-size: 1rem;
  @media screen and (max-width: 682px) {
    font-size: 0.8rem;
  }
`;
