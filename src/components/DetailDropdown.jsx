import styled, { keyframes } from 'styled-components';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown, faCircleChevronUp, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

export const DetailDropdown = ({ title, content, size }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    content && setIsOpen(!isOpen);
  };
  return (
    <Container onClick={handleClick}>
      <TitleContainer size={size}>
        <IconBox>
          <FontAwesomeIcon icon={content ? (isOpen ? faCircleChevronUp : faCircleChevronDown) : faArrowCircleRight} />
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
  &:hover {
    cursor: pointer;
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
  }
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

const downAnimation = keyframes`
  0% {
    transform: translateY(-25%);
  }
  100% {
    transform: translateY(0);
  }
`;
const ContentContainer = styled.div`
  padding: 0 ${(props) => props.size} ${(props) => props.size} ${(props) => props.size};
  font-size: 1rem;

  animation: ${downAnimation} 0.4s ease;
  @media screen and (max-width: 682px) {
    font-size: 0.8rem;
  }
`;
