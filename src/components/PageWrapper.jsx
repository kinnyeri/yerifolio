import styled from "styled-components";
import { HighLight } from "./HighLight";
export const PageWrapper = ({ icon, title, children }) => {
  return (
    <PageContainer>
      <PageTitleContainer>
        <PageTitleIconBox>{icon}</PageTitleIconBox>
        <PageTitleBox>
          <HighLight>{title}</HighLight>
        </PageTitleBox>
      </PageTitleContainer>
      <PageContentBox>{children}</PageContentBox>
    </PageContainer>
  );
};
const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 90px auto;
`;

const PageTitleContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 40px;
  line-height: 40px;
  padding: 20px;
`;
const PageTitleIconBox = styled.div``;
const PageTitleBox = styled.div``;
const PageContentBox = styled.div`
  padding-top: 20px;
`;

// display: flex;
// flex-direction: column;
// align-items: center;
