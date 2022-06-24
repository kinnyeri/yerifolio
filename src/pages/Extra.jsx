import styled from "styled-components";
import { Content, PageWrapper } from "../components";
import { PROFILE } from "../data";

export const Extra = () => {
  return (
    <PageWrapper icon="🎸" title="etc.">
      <ExtraBox>
        {PROFILE.etc.map((extra) => (
          <Content key={extra.title} {...extra} />
        ))}
      </ExtraBox>
    </PageWrapper>
  );
};
const ExtraBox = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
