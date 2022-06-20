import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { PROFILE } from "../data";
import { HighLight } from "../components";

const Contact = () => {
  return (
    <ContactBox>
      <ContactButton href={PROFILE.contact.github} target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </ContactButton>
      <ContactButton href={PROFILE.contact.blog} target="_blank">
        🏡
      </ContactButton>
      <ContactButton href={PROFILE.contact.email}>📧</ContactButton>
    </ContactBox>
  );
};
export const Profile = () => {
  return (
    <ProfilBox>
      <UpdatedDateBox>updated at {PROFILE.updatedDate}</UpdatedDateBox>
      <Contact />
      <ContentBox>
        <ProfileImgBox>
          <img src="/myprofile.jpg" alt="프로필 이미지" />
        </ProfileImgBox>
        <TitleBox>
          문제 해결이
          <br />
          <span>즐거운</span>{" "}
          <HighLight>
            <NameBox>김예리</NameBox>
          </HighLight>
          <span>입니다</span>
        </TitleBox>
        <SubTitleBox>
          프론트엔드 개발자를 희망하며
          <br />
          어려운 난관을 헤쳐가며 얻는 경험과 배움을 좇습니다.
          <br />
          언제나 도전하는 사람이 되고자 합니다.
        </SubTitleBox>
      </ContentBox>
    </ProfilBox>
  );
};

const ProfilBox = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;

  position: relative; /* contact box 고정시키기위해서 */
`;
// 이름 애니메이션
const letterspacing = keyframes`
  0% {
    letter-spacing: -5rem;
    filter: blur(0.5rem);
    color:var(--color-main);
  }

  50% {
    filter: blur(0.3rem);
  }
`;
const NameBox = styled.div`
  animation: ${letterspacing} 2s alternate cubic-bezier(0.2, 0, 0, 1);
  display: block;
`;
const contentUpAnimation = keyframes`
  0% {
    -webkit-transform: translateY(50px);
            transform: translateY(50px);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
`;
const UpdatedDateBox = styled.div`
  position: absolute;
  bottom: 0;
  color: var(--color-main);
  font-size: 0.9rem;
  padding-left: 8px;
`;
const ContactBox = styled.div`
  width: 8vw;
  min-width: 70px;
  height: 22vw;
  min-height: 190px;

  position: absolute;
  top: 7vh;
  left: 5vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  border-radius: 8vw;
  background-color: var(--color-main);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  animation: ${contentUpAnimation} 0.8s 1 ease-in normal;
  @media screen and (max-width: 682px) {
    top: 3vh;
  }
`;

const ContactButton = styled.a`
  width: 6vw;
  min-width: 52px;
  height: 6vw;
  min-height: 52px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100%;
  background-color: var(--color-back);
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));

  color: black;
  font-size: 200%;
  line-height: 2rem;
`;
const ContentBox = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  animation: ${contentUpAnimation} 1s 1 ease-in normal;
  @media screen and (max-width: 682px) {
    height: 60%;
  }
`;
const ProfileImgBox = styled.div`
  width: 20vw;
  min-width: 200px;
  height: 20vw;
  min-height: 200px;
  border-radius: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
  }
  animation: ${contentUpAnimation} 0.3s 1 ease-in normal;
`;
const TitleBox = styled.div`
  font-size: 5rem;
  line-height: 5rem;
  text-align: center;

  animation: ${contentUpAnimation} 0.5s 1 ease-in normal;

  @media screen and (max-width: 682px) {
    font-size: 45px;
    line-height: 45px;
  }
`;
const SubTitleBox = styled.div`
  font-size: 1.3rem;
  text-align: center;

  animation: ${contentUpAnimation} 0.8s 1 ease-in normal;
  @media screen and (max-width: 682px) {
    font-size: 18px;
  }
`;
