import styled from "styled-components";

const PageWrapperBox = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
`;
export const PageWrapper = ({ children }) => {
  return <PageWrapperBox>{children}</PageWrapperBox>;
};
