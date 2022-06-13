import styled from "styled-components";

const PageWrapperBox = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
`;
const PageWrapper = ({ children }) => {
  return <PageWrapperBox>{children}</PageWrapperBox>;
};

export default PageWrapper;
