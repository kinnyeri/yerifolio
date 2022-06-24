import styled from "styled-components";

const ContentsWrapperBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContentsWrapper = ({ children }) => {
  return <ContentsWrapperBox>{children}</ContentsWrapperBox>;
};
