const PROFILE = {
  updatedDate: "2022.06.17",
  contact: {
    github: "https://github.com/kinnyeri",
    blog: "https://velog.io/@kinnyeri",
    email: "mailto:98sena@naver.com?body=[from portfolio]",
  },
  Skill: [
    { title: "JavaScript", content: "클로저 개념을 명확히 압니다." },
    { title: "React", content: "클로저 개념을 명확히 압니다." },
    {
      title: "Python",
      content:
        "클로저 개념을 명확히 압니다.클로저 개념을 명확히 압니다.클로저 개념을 명확히 압니다.클로저 개념을 명확히 압니다.클로저 개념을 명확히 압니다.클로저 개념을 명확히 압니다.클로저 개념을 명확히 압니다.클로저 개념을 명확히 압니다.클로저 개념을 명확히 압니다.클로저 개념을 명확히 압니다.",
    },
    { title: "Android", content: "클로저 개념을 명확히 압니다." },
    { title: "Java", content: "클로저 개념을 명확히 압니다." },
  ],
  Project: [
    {
      title: "Collector's",
      subTitle: "수많은 사람들의 상상을 실현시켜줄 수 있는 쇼핑몰",
      time: "2022.5.11-27",
      team: "팀 프로젝트 (FE 2명, BE 2명)",
      details: [
        "팀장과 FE를 맡았습니다.",
        "상품 상세 및 검색 페이지 구현",
        "관리자 페이지 구현",
      ],
      links: [
        { title: "Git Hub", link: "" },
        { title: "회고", link: "" },
        {
          title: "배포 사이트",
          link: "http://kdt-sw2-seoul-team20.elicecoding.com/",
        },
      ],
      stacks: [
        { title: "React", content: "리액트는 최고다." },
        {
          title: "React",
          content:
            "리액트는 최고다.리액트는 최고다.리액트는 최고다.리액트는 최고다.리액트는 최고다.리액트는 최고다.리액트는 최고다.",
        },
      ],
    },
    {
      title: "GBTI",
      subTitle: "나만의 MBTI 결과를 받아보자",
      time: "2022.1-3",
      team: "팀 프로젝트 (FE 2명, 디자이너 1명)",
      details: [
        "FE를 맡았습니다.",
        "MBTI 테스트 페이지, 나만의 결과 카드 꾸미기 페이지 구현",
        "나만의 결과 카드 꾸미기를 위해 Konva를 사용하여 스티커 붙이기, 리사이징, 전체 삭제 기능 등을 구현",
      ],
      links: [
        { link: "", title: "Git Hub" },
        { link: "", title: "회고" },
        { link: "https://www.gbti.site", title: "배포 사이트" },
      ],
      stacks: [
        { title: "React", content: "리액트는 최고다." },
        {
          title: "Konva",
          content:
            "리액트는 최고다.리액트는 최고다.리액트는 최고다.리액트는 최고다.리액트는 최고다.리액트는 최고다.리액트는 최고다.",
        },
      ],
    },
  ],
  Education: [
    {
      title: "숭실대학교",
      details: [
        {
          icon: "전공",
          content: "글로벌미디어학부 2018.02 - 2022.08 (졸업 예정)",
        },
        { icon: "학점", content: "4.17/4.5" },
      ],
    },
    {
      title: "엘리스 SW 엔지니어 트랙 2기",
      details: [
        { icon: "⏱", content: "2022.04 - 2022.07" },
        { icon: "➿", content: "풀스택 기반 4달 교육" },
        {
          icon: "🔗",
          content: "관련 포스팅",
          link: "",
        },
      ],
    },
  ],
  Experience: [
    {
      title: "ICT 인턴십 2021 하반기",
      details: [
        { icon: "기간", content: "2021.09 - 12" },
        { icon: "회사", content: "2021.09 - 12" },
      ],
    },
    {
      title: "월드프렌즈 ICT 봉사단",
      details: [
        { icon: "기간", content: "2019.07.13 - 08.11" },
        {
          icon: "내용",
          content:
            "몽골 울란바토르의 NMCT학교에서 한달동안 IT 교육 봉사 활동을 진행함",
        },
      ],
    },
  ],
  etc: [
    {
      title: "어학",
      details: [
        { icon: "토익", content: "945점" },
        { icon: "토익 스피킹", content: "Level 6, 150점" },
      ],
    },
    {
      title: "수상",
      details: [
        { icon: "토익", content: "945점" },
        { icon: "토익 스피킹", content: "Level 6, 150점" },
      ],
    },
  ],
};
const LIST = (() => {
  let list = [];
  Object.keys(PROFILE)
    .filter((key) => {
      if (key === "updatedDate" || key === "contact") return false;
      return true;
    })
    .forEach((key) => {
      let data = { main: key, subs: [] };
      if (key !== "Skill") {
        const subs = PROFILE[key].map(({ title }) => {
          return title;
        });
        data = { ...data, subs };
      }
      list = [...list, data];
      return;
    });
  return list;
})();
console.log(LIST);
export { PROFILE, LIST };
