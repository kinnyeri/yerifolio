const PROFILE = {
  updatedDate: "2022.08.15",
  contact: {
    github: "https://github.com/kinnyeri",
    blog: "https://velog.io/@kinnyeri",
    email: "mailto:98sena@naver.com?body=[from portfolio]",
  },
  skills: [
    {
      title: "JavaScript",
      content:
        "문법을 활용하여 자료구조와 알고리즘을 구현할 수 있습니다. 호이스팅, 클로저 등 특징을 이해하고 있습니다.",
    },
    {
      title: "HTML/CSS",
      content:
        "시멘틱 태그 등을 활용하여 사이트의 구조를 구성할 수 있고, 기본 CSS를 이용하여 구조를 꾸밀 수 있습니다. 또한, styled-components를 활용할 수 있습니다.",
    },
    {
      title: "React",
      content:
        "컴포넌트를 구성하고, 적절하게 재활용하여 사이트의 구조를 구성할 수 있습니다. useState,useEffect,useContext 등 다양한 hook을 사용하여 웹을 만들 수 있습니다. Redux를 공부하고 있습니다.",
    },
    {
      title: "Git",
      content:
        "깃을 통해 작업 내역과 버전 관리를 할 수 있습니다. rebase, merge 등을 통해 branch 관리를 할 수 있습니다. 커멘드를 사용하여 협업에 참여할 수 있습니다.",
    },
    {
      title: "Android",
      content:
        "안드로이드 스튜디오를 통해 안드로이드 앱을 만들 수 있습니다. Activity, Fragment를 이용하여 페이지를 구성할 수 있습니다.",
    },
  ],
  projects: [
    {
      title: "Collector's",
      subTitle: "수많은 사람들의 상상을 실현시켜줄 수 있는 쇼핑몰",
      time: "2022.05.23 - 06.04",
      team: "팀장 & FE in 팀 프로젝트 (FE 2명, BE 2명)",
      details: [
        "마블 캐릭터의 장비 및 능력을 판매하는 쇼핑몰로 구매시 사용자의 능력치, 레벨이 올라가 재미를 더했습니다.",
        "상품 상세, 목록, 장바구니 및 주문, 관리자 페이지 구현을 맡아 개발하였습니다.",
      ],
      links: [
        {
          title: "Git Hub",
          link: "https://github.com/Elice-Team-20/Collectors",
        },
        {
          title: "배포 사이트",
          link: "https://collectors-twenty.herokuapp.com/",
        },
      ],
      stacks: [
        {
          title: "JavaScript",
          content:
            "함수와 컴포넌트를 통해 활용하여 화면을 동적으로 구성하였습니다. 비동기를 활용하여 MongoDB에서 데이터를 받아 표시하였습니다.",
        },
        {
          title: "HTML/CSS",
          content:
            "바닐라 HTML/CSS를 활용하여 사이트를 구성하였습니다. 접근성을 높이기 위해 시맨틱 태그를 활용하였습니다.",
        },
      ],
    },
    {
      title: "GBTI",
      subTitle: "나만의 MBTI 결과를 받아보자",
      time: "2022.01 - 03",
      team: "FE in 팀 프로젝트 (FE 2명, 디자이너 1명)",
      details: [
        "트렌드인 MBTI를 개강 시즌 대학생 컨셉으로 기획하여 테스트 사이트를 만들었습니다.",
        "사람은 모여있기도, 개성있는 것도 좋아합니다. 그래서 나만의 결과 카드를 가질 수 있도록 재미를 더했습니다.",
        "MBTI 테스트 페이지, 나만의 결과 카드 꾸미기 페이지 구현하였습니다.",
        "나만의 결과 카드 꾸미기를 위해 Konva를 사용하여 스티커 붙이기, 리사이징, 전체 삭제 기능 등 기능 구현을 맡아 개발하였습니다.",
        "배포 후 1주일간 약 6천여명이 방문하여 사용했으며, 현재까지는 7천명이 방문하였습니다.",
        "여러 피드백을 받아 볼 수 있어 FE로서 가져야 할 태도와 개발 방향에 대해 생각해볼 수 있던 기회였습니다.",
      ],
      links: [
        { link: "https://github.com/GaeBTI/GBTI_FE", title: "Git Hub" },
        { link: "https://www.gbti.site", title: "배포 사이트" },
      ],
      stacks: [
        {
          title: "React",
          content:
            "재활용할 수 있는 컴포넌트가 있어 선택하였습니다. hook을 통해 테스트 기능을 구현하였습니다.",
        },
        {
          title: "styled-components",
          content:
            "flex, grid 등을 이용하여 화면을 구성하고, 꾸밀 수 있습니다.",
        },
        {
          title: "Konva",
          content:
            "캔버스를 구성하여 꾸미기 기능을 구현하기 위해 사용하였습니다. 캔버스 위에 노드를 구성하여 리사이징, 이동, 삭제 등을 구현하였습니다.",
        },
      ],
    },
    {
      title: "오또칼렌",
      subTitle: "바쁜 현대인들을 위한 일정 정리 자동화 솔루션!",
      time: "2021.03 - 05",
      team: "팀장 & Flutter 개발 in 팀 프로젝트 (Flutter 2명, BE 1명)",
      details: [
        "수기로 작성한 일정을 사진 촬영하면 일정에 맞게 태그가 되어 앱에 연동합니다.",
        "흩어져 있는 일정들을 태그별로 분류하여 한눈에 알아보기 쉽고, 일정 관리가 수월해집니다.",
        "캘린더, 일정 등록, 태그별 캘린더 및 관리 등 기능을 맡아 개발하였고, 일정 분류 및 일정 전치리 코드 개발에 참여하였습니다.",
      ],
      links: [
        {
          title: "Git Hub",
          link: "https://github.com/LuttSpace/AutoCalen",
        },
        {
          title: "소개 영상",
          link: "https://youtu.be/4prgEn_bIYg",
        },
      ],
      stacks: [
        {
          title: "Flutter",
          content:
            "크로스 플랫폼을 활용하여 iOS, AOS 앱을 동시 개발하였습니다. 다양한 패키지와 빌트인 위젯 사용이 가능하여 사용하게 되었습니다.",
        },
        {
          title: "Firebase",
          content:
            "구글 Authentication을 통한 로그인과 Firestore을 통해 사용자, 일정, 태그 정보들을 저장하였습니다.",
        },
        {
          title: "Python",
          content:
            "Naver Cloud Platform CLOVA OCR과 Kakao Brain Pororo NLP를 활용하기 위해 사용하게 되었습니다. 오픈소스들을 활용해 앱의 주요 기능 들을 구현하기 위해 필터링 코드를 개발하였습니다.",
        },
        {
          title: "CLOVA OCR",
          content:
            "OCR을 활용하여 수기로 작성한 일정을 촬영하고, 그 기록을 인식하여 글자로 변환하여 DB에 저장하였습니다.",
        },
        {
          title: "PORORO NLP",
          content:
            "NLP를 활용하여 일정 내용을 분석하여 사용자가 정해둔 태그에 맞게 분류하는 기능을 구현하였습니다.",
        },
      ],
    },
    {
      title: "DailyMap",
      subTitle: "장소 기반 일기장",
      time: "2019.11 - 12",
      team: "팀장 & Android 개발 in 팀 프로젝트 (Android 3명)",
      details: [
        "사람은 기억을 떠올릴 때 특정 날짜를 기억하기 보다는 장소를 통해서 기억하게 됩니다. 이를 이용하여 기억이 시간 순에 제한 받지 않고 좀 더 자유로운 기억 저장소가 됩니다.",
        "한 눈에 자신의 기록을 지도로 봄으로써 추억을 회상할 수 있습니다.",
        "일기장 등록, 장소별, 날짜별 일기 목록을 구현을 맡았습니다.",
        "과제 점수 130점 중 125점을 받을 수 있었고, 최종적으로 A+를 받을 수 있었습니다.",
      ],
      links: [
        {
          title: "Git Hub",
          link: "https://github.com/kinnyeri/DailyMap",
        },
        {
          title: "소개 영상",
          link: "https://youtu.be/B-4G6ynEttA",
        },
      ],
      stacks: [
        {
          title: "JAVA",
          content:
            "JAVA를 통해 안드로이드 앱을 구현하였습니다. 멀티 스레드를 구현하여 공유 다이어리에 공유원이 일기를 올리면 알림을 보내주는 기능을 구현하였습니다.",
        },
        {
          title: "Android",
          content:
            "안드로이드 앱을 개발하기 위해 사용하였습니다. Activity, Fragment를 통해 페이지를 구성하였고, intent를 활용하여 공유 기능을 구현하였습니다.",
        },
        {
          title: "Firebase",
          content:
            "구글 Authentication을 통한 로그인과 Firestore을 통해 사용자, 일기 정보들을 저장하였습니다.",
        },
        {
          title: "Google Map API",
          content:
            "일기장이 표시될 장소를 마킹하기 위하여 구글 지도 API를 활용하여 구현하였습니다. 사용자가 기록한 일기의 장소를 마킹하고, 관련 일기를 목록으로 보여줍니다.",
        },
      ],
    },
  ],
  educations: [
    {
      title: "🏫 숭실대학교",
      details: [
        {
          type: "default",
          icon: "전공",
          content: "글로벌미디어학부",
          link: "http://media.ssu.ac.kr/sub.php?code=ACNMZXH",
        },
        {
          type: "default",
          icon: "기간",
          content: "2018.02 - 2022.08 (졸업 예정)",
        },
        { type: "default", icon: "학점", content: "4.17/4.5" },
        { type: "default", icon: "전공 학점", content: "4.39/4.5" },
        {
          type: "file",
          icon: "📁",
          content: "성적 증명서",
          file: "/files/ssu_gpa.pdf",
        },
      ],
    },
    {
      title: "SSAFY 8기",
      details: [
        { type: "default", icon: "⏱", content: "2022.07 -" },
        {
          type: "default",
          icon: "➿",
          content:
            "Java, 알고리즘을 학습하고 있으며, 앞으로 Java Spring, Vue.js 등을 배울 예정입니다. 총 1년동안 주 5일 매일 8시간씩 학습합니다.",
        },
      ],
    },
    {
      title: "엘리스 SW 엔지니어 트랙 2기",
      details: [
        { type: "default", icon: "⏱", content: "2022.04 - 07" },
        {
          type: "default",
          icon: "➿",
          content:
            "JavaScript, HTML/CSS, TypeScript, React 등 FE 전반적인 교육과 Node.js를 교육받았습니다. 총 4달 간 두 번의 프로젝트를 진행하였고, 주 5일 매일 7시간씩 학습하였습니다.",
        },
      ],
    },
  ],
  experiences: [
    {
      title: "ICT 인턴십 2021 하반기",
      details: [
        { type: "default", icon: "⏱", content: "2021.09 - 12" },
        {
          type: "default",
          icon: "회사",
          content: "HCLAB (자세 교정 헬스 ioT 관련)",
          link: "https://www.hclab.kr/",
        },
        {
          type: "default",
          icon: "➿",
          content:
            "모바일 앱 개발 인턴으로 기존 앱 유지 및 보수와 새로운 앱 기획 및 개발을 진행하였습니다.",
        },
        {
          type: "link",
          icon: "🔗",
          content: "참여 프로젝트 (펀딩)",
          link: "https://www.wadiz.kr/web/campaign/detail/129557?utm_source=maker_unknown&utm_medium=129557_hclab_redirect",
        },
        {
          type: "file",
          icon: "📁",
          content: "인턴 확인서",
          file: "/files/internship.pdf",
        },
      ],
    },
    {
      title: "숭실대학교 CGLAB 학부 연구생",
      details: [
        { type: "default", icon: "⏱", content: "2019.11 - 2021.01" },
        {
          type: "default",
          icon: "➿",
          content:
            "유전 알고리즘을 활용하여 게임 맵 레벨별 자동 생성 연구 진행 및 골프 퍼팅 게임 개발에 참여하였습니다. (20.08 - 21.01)",
        },
        {
          type: "default",
          icon: "➿",
          content:
            "태양광 설치 게임형 교육 프로그램 개발 과제 참여하여 4파트 중 전기 시공 파트를 맡아 개발하였습니다. (19.11 - 20.04)",
        },
        {
          type: "link",
          icon: "🔗",
          content: "태양광 설치 게임형 교육 프로그램 시연 영상",
          link: "https://youtu.be/ei1SCu3DOh8",
        },
      ],
    },
    {
      title: "월드프렌즈 ICT 봉사단",
      details: [
        { type: "default", icon: "⏱", content: "2019.07.13 - 08.11" },
        {
          type: "default",
          icon: "➿",
          content:
            "몽골 울란바토르의 NMCT학교에서 한 달동안 IT 교육 봉사 활동을 진행하였습니다.",
        },
        {
          type: "default",
          icon: "➿",
          content:
            "C와 JavaScript 교육을 진행하여 최종적으로 개인 사이트와 게임을 개발할 수 있도록 하였습니다.",
        },
        {
          type: "link",
          icon: "🔗 ",
          content: "활동 인스타그램",
          link: "https://instagram.com/navit2019?igshid=YmMyMTA2M2Y=",
        },
        {
          type: "file",
          icon: "📁",
          content: "봉사 확인서",
          file: "/files/volunteer_worldfriends.pdf",
        },
      ],
    },
    {
      title: "CES & 실리콘 밸리 연수",
      details: [
        { type: "default", icon: "⏱", content: "2019.01.07 - 13" },
        {
          type: "default",
          icon: "➿",
          content:
            "IT 창업 관련 교육 연수로 실리콘 밸리를 3일간 견학 후 CES 2019에 참석하였습니다. 삼성, 구글, 퀄컴 등 여러 기업들이 선보인 혁신 기술을 체험할 수 있었고, 새로운 트렌드에 대해 배울 수 있었습니다.",
        },
      ],
    },
  ],
  extras: [
    {
      title: "어학 자격증",
      details: [
        { type: "default", icon: "토익", content: "935점" },
        { type: "default", icon: "토익 스피킹", content: "Level 6, 150점" },
        {
          type: "file",
          icon: "📁",
          content: "어학 성적 확인서",
          file: "/files/toeic.pdf",
        },
      ],
    },
    {
      title: "수상 내역",
      details: [
        {
          type: "withFile",
          icon: "스마트 팩토리와 AI를 활용한 아이디어 공모전",
          content: "장려상 수상 / 2021.01.29",
          file: "/files/aword_smartfactory.pdf",
          fileName: "상장",
        },
        {
          type: "withFile",
          icon: "스파르탄 위닝 창업 경진 대회",
          content: "우수상 수상 / 2018.11.17",
          file: "/files/aword_spartan.pdf",
          fileName: "수상 확인서",
        },
      ],
    },
  ],
};

export { PROFILE };
