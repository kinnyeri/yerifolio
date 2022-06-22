import { useState, useEffect } from "react";
import styled from "styled-components";
export const StackTag = ({ title, content, size, handleOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    console.log("click");
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    console.log("handle");
    if (isOpen) {
      handleOpen(() => content);
    } else {
      handleOpen(() => "");
    }
  }, [isOpen]);
  return (
    <StackTagContainer onClick={handleClick}>
      <TitleContainer size={size}>
        <TitleBox>{title}</TitleBox>
      </TitleContainer>
      {isOpen && <ContentContainer></ContentContainer>}
    </StackTagContainer>
  );
};
const StackTagContainer = styled.div`
  background-color: var(--color-back-dark);
  border-radius: 5px;
`;
const TitleContainer = styled.div`
  padding: 5px 10px;
  font-size: 1.2rem;
`;
const IconBox = styled.span`
  color: var(--color-main);
`;
const TitleBox = styled.span``;

const ContentContainer = styled.div``;
