import styled from "styled-components";

const ContentsWrapperBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContentsWrapper = ({ children }) => {
  return <ContentsWrapperBox>{children}</ContentsWrapperBox>;
};
