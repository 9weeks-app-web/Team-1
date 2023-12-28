import { IMentor } from "types/mentor";
import { IPortfolioSummary } from "types/portfolio";

export const DUMMY_MENTORS: IMentor[] = [
  {
    id: 1,
    name: "John Doe",
    occupation: "개발",
    profileImg: "john_doe_profileImg.jpg",
    introduction:
      "안녕하세요! 저는 소프트웨어 엔지니어로 일하고 있는 John Doe입니다. 새로운 기술과 도전에 항상 열려있어요.",
  },
  {
    id: 2,
    name: "Jane Smith",
    occupation: "UX/UI",
    profileImg: "jane_smith_profileImg.jpg",
    introduction:
      "안녕하세요! 저는 사용자 경험 및 인터페이스 디자이너로 일하고 있는 Jane Smith입니다. 함께 디자인을 향상시켜보아요!",
  },
  {
    id: 3,
    name: "Alex Johnson",
    occupation: "디자인",
    profileImg: "alex_johnson_profileImg.jpg",
    introduction:
      "안녕하세요! 그래픽 디자이너로 활동 중인 Alex Johnson입니다. 창의적이고 효과적인 디자인에 관심이 많아요.",
  },
  {
    id: 4,
    name: "Emily Park",
    occupation: "개발",
    profileImg: "emily_park_profileImg.jpg",
    introduction:
      "안녕하세요! 웹 개발자로 활동하고 있는 Emily Park입니다. 협업과 문제 해결에 열정을 가지고 있어요.",
  },
  {
    id: 5,
    name: "David Kim",
    occupation: "UX/UI",
    profileImg: "david_kim_profileImg.jpg",
    introduction:
      "안녕하세요! UX/UI 디자이너로 일하는 David Kim입니다. 사용자 중심의 디자인에 대한 고민을 공유하고 싶어요.",
  },
];

export const DUMMY_PORTFOLIO_SUMMARY: IPortfolioSummary[] = [
  {
    id: 1,
    thumbnail: "",
    category: "UI/UX",
    title: "Introduction to TypeScript Introduction to TypeScript",
    views: 1000,
    likes: 500,
    isVerified: true,
  },
];
