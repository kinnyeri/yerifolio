import styled, { keyframes } from "styled-components";
const ContactBox = styled.div`
  width: 8vw;
  min-width: 70px;
  height: 22vw;
  min-height: 190px;

  left: 118px;
  top: 99px;
  position: fixed;
  border-radius: 8vw;

  top: 7vh;
  left: 7vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-main);
`;
const ContactButton = styled.div`
  width: 7vw;
  min-width: 50px;
  heigth: 7vw;
  min-height: 50px;
  background: #f4f4f4;
`;
const Contact = () => {
  return <ContactBox></ContactBox>;
};
export const Profile = () => {
  return (
    <ProfilBox>
      <Contact />
      <ContentBox>
        <ProfileImgBox>
          <img src="/myprofile.jpg" alt="프로필 이미지" />
        </ProfileImgBox>
        <TitleBox>
          문제 해결이
          <br />
          즐거운 김예리입니다.
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
`;
const ContentUp = keyframes`
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
const ContentBox = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  animation: ${ContentUp} 1s 1 ease-in normal;
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
  animation: ${ContentUp} 0.3s 1 ease-in normal;
`;
const TitleBox = styled.div`
  font-size: 5rem;
  line-height: 5rem;
  text-align: center;

  animation: ${ContentUp} 0.5s 1 ease-in normal;
`;
const SubTitleBox = styled.div`
  font-size: 1.3rem;
  text-align: center;

  animation: ${ContentUp} 0.8s 1 ease-in normal;
`;
