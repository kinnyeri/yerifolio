import styled from "styled-components";
export const PageWrapper = ({ icon, title, children }) => {
  return (
    <PageContainer>
      <PageTitleContainer>
        <PageTitleIconBox>{icon}</PageTitleIconBox>
        <PageTitleBox>{title}</PageTitleBox>
      </PageTitleContainer>
      <PageContentBox>{children}</PageContentBox>
    </PageContainer>
  );
};
const PageContainer = styled.div`
  width: 100%;
  margin-bottom: 5vh;
  display: grid;
  grid-template-rows: 90px auto;
  overflow-y: hidden;
  border-top: 2vh solid var(--color-main-dark);
`;

const PageTitleContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 40px;
  line-height: 40px;
  padding: 25px;
`;
const PageTitleIconBox = styled.div``;
const PageTitleBox = styled.div``;
const PageContentBox = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: columns;
  align-items: center;
  justify-content: center;
`;

// display: flex;
// flex-direction: column;
// align-items: center;
