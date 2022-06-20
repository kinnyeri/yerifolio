import styled from "styled-components";
import { PROFILE } from "../data";

export const Footer = () => {
  return (
    <FooterContainer>
      Copyright © 2022 Kim Yeri. All rights reserved.
      <br />
      updated at {PROFILE.updatedDate}
    </FooterContainer>
  );
};
const FooterContainer = styled("footer")`
  height: 17vh;
  background-color: var(--color-main-dark);
  color: var(--color-main);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
