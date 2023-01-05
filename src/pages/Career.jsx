import styled from "styled-components";
import { HighLight, PageWrapper, Content } from "../components";
import { PROFILE } from "../data";

export const Career = () => {
  return (
    <PageWrapper icon="🌠" title="Career">
      <CarrerBox>
        {PROFILE.carrers.map((carrer) => (
          <Content key={carrer.title} {...carrer} />
        ))}
      </CarrerBox>
    </PageWrapper>
  );
};

const CarrerBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;
