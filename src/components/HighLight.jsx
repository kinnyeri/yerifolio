import styled from "styled-components";

export const HighLight = ({ children }) => {
  return (
    <HightLightBox>
      {children}
      <HighLighter />
    </HightLightBox>
  );
};

const HightLightBox = styled.div`
  display: inline-block;
  min-width: fit-content;
`;

const HighLighter = styled.div`
  height: 1vh;
  background-color: var(--color-main);
`;
