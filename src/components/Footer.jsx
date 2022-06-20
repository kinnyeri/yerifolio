import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterContainer>
      Copyright © 2022 Kim Yeri. All rights reserved.
    </FooterContainer>
  );
};
const FooterContainer = styled("footer")`
  height: 13vh;
  background-color: var(--color-main-dark);
  color: var(--color-main);
  display: flex;
  align-items: center;
  justify-content: center;
`;
