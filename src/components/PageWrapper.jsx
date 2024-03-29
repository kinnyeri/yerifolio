import styled from "styled-components";
export const PageWrapper = ({ icon, title, children }) => {
  return (
    <PageContainer>
      <PageTitleContainer>
        <PageTitleIconBox>{icon}</PageTitleIconBox>
        <PageTitleBox id={title}>{title}</PageTitleBox>
      </PageTitleContainer>
      <PageContentBox>{children}</PageContentBox>
    </PageContainer>
  );
};
const PageContainer = styled.div`
  width: 80%;
  margin-bottom: 50px;
  display: grid;
  grid-template-rows: 90px auto;
  overflow-y: hidden;
  @media screen and (max-width: 682px) {
    width: 100%;
  }
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
