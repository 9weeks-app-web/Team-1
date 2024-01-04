import { IPostSummary } from "types/community";
import { IBannerInfo } from "types/home";
import { IMentor } from "types/mentor";
import { IPortfolioSummary } from "types/portfolio";
import { IProject } from "types/project";

export const DUMMY_MENTORS: IMentor[] = [
  {
    id: 1,
    name: "John Doe",
    occupation: "개발",
    profileImg:
      "https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802075_Il6LeUG0NCK4JOELmkC7Ki81g0CiLpxU.jpg",
    introduction:
      "안녕하세요! 저는 소프트웨어 엔지니어로 일하고 있는 John Doe입니다. 새로운 기술과 도전에 항상 열려있어요.",
    rating: 4.5,
    career: "시니어 (9년이상)",
  },
  {
    id: 2,
    name: "Jane Smith",
    occupation: "UX/UI",
    profileImg:
      "https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802075_Il6LeUG0NCK4JOELmkC7Ki81g0CiLpxU.jpg",

    introduction:
      "안녕하세요! 저는 사용자 경험 및 인터페이스 디자이너로 일하고 있는 Jane Smith입니다. 함께 디자인을 향상시켜보아요!",
    rating: 4.5,
    career: "시니어 (9년이상)",
  },
  {
    id: 3,
    name: "Alex Johnson",
    occupation: "디자인",
    profileImg:
      "https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802075_Il6LeUG0NCK4JOELmkC7Ki81g0CiLpxU.jpg",
    introduction:
      "안녕하세요! 그래픽 디자이너로 활동 중인 Alex Johnson입니다. 창의적이고 효과적인 디자인에 관심이 많아요.",
    career: "시니어 (9년이상)",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Emily Park",
    occupation: "개발",
    profileImg:
      "https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802075_Il6LeUG0NCK4JOELmkC7Ki81g0CiLpxU.jpg",

    introduction:
      "안녕하세요! 웹 개발자로 활동하고 있는 Emily Park입니다. 협업과 문제 해결에 열정을 가지고 있어요.",
    career: "시니어 (9년이상)",
    rating: 4.5,
  },
  {
    id: 5,
    name: "David Kim",
    occupation: "UX/UI",
    profileImg:
      "https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802075_Il6LeUG0NCK4JOELmkC7Ki81g0CiLpxU.jpg",

    introduction:
      "안녕하세요! UX/UI 디자이너로 일하는 David Kim입니다. 사용자 중심의 디자인에 대한 고민을 공유하고 싶어요.",
    career: "시니어 (9년이상)",
    rating: 4.5,
  },
];

export const DUMMY_PORTFOLIO_SUMMARY: IPortfolioSummary[] = [
  {
    id: 1,
    thumbnail: "https://picsum.photos/964/300",
    category: "UI/UX",
    title: "Introduction to TypeScript Introduction to TypeScript",
    views: 1000,
    likes: 500,
    isVerified: true,
    writer: {
      id: 0,
      name: "저니녁",
      profileImg:
        "https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802075_Il6LeUG0NCK4JOELmkC7Ki81g0CiLpxU.jpg",
    },
  },
  {
    id: 2,
    thumbnail: "https://picsum.photos/964/300",
    category: "디자인",
    title: "Introduction to TypeScript Introduction to TypeScript",
    views: 12240,
    likes: 500,
    isVerified: true,
    writer: {
      id: 1,
      name: "김밥",
      profileImg:
        "https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802075_Il6LeUG0NCK4JOELmkC7Ki81g0CiLpxU.jpg",
    },
  },
  {
    id: 3,
    thumbnail: "https://picsum.photos/964/300",
    category: "UI/UX",
    title: "Introduction to TypeScript Introduction to TypeScript",
    views: 1000,
    likes: 500,
    isVerified: true,
    writer: {
      id: 2,
      name: "치킨",
      profileImg:
        "https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802075_Il6LeUG0NCK4JOELmkC7Ki81g0CiLpxU.jpg",
    },
  },
  {
    id: 4,
    thumbnail: "https://picsum.photos/964/300",
    category: "UI/UX",
    title: "Introduction to TypeScript Introduction to TypeScript",
    views: 1000,
    likes: 500,
    isVerified: true,
    writer: {
      id: 3,
      name: "피자",
      profileImg:
        "https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802075_Il6LeUG0NCK4JOELmkC7Ki81g0CiLpxU.jpg",
    },
  },
  {
    id: 5,
    thumbnail: "https://picsum.photos/964/300",
    category: "UI/UX",
    title: "Introduction to TypeScript Introduction to TypeScript",
    views: 1000,
    likes: 500,
    isVerified: true,
    writer: {
      id: 3,
      name: "피자",
      profileImg:
        "https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802075_Il6LeUG0NCK4JOELmkC7Ki81g0CiLpxU.jpg",
    },
  },
  {
    id: 6,
    thumbnail: "https://picsum.photos/964/300",
    category: "UI/UX",
    title: "Introduction to TypeScript Introduction to TypeScript",
    views: 1000,
    likes: 500,
    isVerified: true,
    writer: {
      id: 3,
      name: "피자",
      profileImg:
        "https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802075_Il6LeUG0NCK4JOELmkC7Ki81g0CiLpxU.jpg",
    },
  },
  {
    id: 7,
    thumbnail: "https://picsum.photos/964/300",
    category: "UI/UX",
    title: "Introduction to TypeScript Introduction to TypeScript",
    views: 1000,
    likes: 500,
    isVerified: true,
    writer: {
      id: 3,
      name: "피자",
      profileImg:
        "https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802075_Il6LeUG0NCK4JOELmkC7Ki81g0CiLpxU.jpg",
    },
  },
  {
    id: 8,
    thumbnail: "https://picsum.photos/964/300",
    category: "UI/UX",
    title: "Introduction to TypeScript Introduction to TypeScript",
    views: 1000,
    likes: 500,
    isVerified: true,
    writer: {
      id: 3,
      name: "피자",
      profileImg:
        "https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802075_Il6LeUG0NCK4JOELmkC7Ki81g0CiLpxU.jpg",
    },
  },
];

export const DUMMY_SLIDER_BANNERS: IBannerInfo[] = [
  {
    id: 0,
    imgSrc: "https://picsum.photos/964/300",
    link: "https://naver.com",
  },
  {
    id: 2,
    imgSrc: "https://picsum.photos/964/300",
    link: "https://naver.com",
  },
  {
    id: 3,
    imgSrc: "https://picsum.photos/964/300",
    link: "https://naver.com",
  },
  {
    id: 4,
    imgSrc: "https://picsum.photos/964/300",
    link: "https://naver.com",
  },
  {
    id: 5,
    imgSrc: "https://picsum.photos/964/300",
    link: "https://naver.com",
  },
];

export const DUMMY_PROJECTS: IProject[] = [
  {
    id: 1,
    title: "Project One",
    description: "This is the description for Project One.",
    category: "Web Development",
    views: 1200,
    likes: 350,
    deadline: "2024-02-15",
    nowPeopleCnt: 8,
    maxPeopleCnt: 10,
    thumbnail: "https://picsum.photos/298/150",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description for Project Two.",
    category: "Mobile App Development",
    views: 800,
    likes: 200,
    deadline: "2024-03-10",
    nowPeopleCnt: 5,
    maxPeopleCnt: 8,
    thumbnail: "https://picsum.photos/298/150",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Project Three is all about...",
    category: "Data Science",
    views: 1500,
    likes: 450,
    deadline: "2024-04-05",
    nowPeopleCnt: 12,
    maxPeopleCnt: 15,
    thumbnail: "https://picsum.photos/298/150",
  },
  {
    id: 4,
    title: "Project Four",
    description: "A unique project with...",
    category: "Machine Learning",
    views: 600,
    likes: 120,
    deadline: "2024-05-20",
    nowPeopleCnt: 6,
    maxPeopleCnt: 10,
    thumbnail: "https://picsum.photos/298/150",
  },
  {
    id: 5,
    title: "Project Five",
    description: "Description for Project Five.",
    category: "UI/UX Design",
    views: 1000,
    likes: 300,
    deadline: "2024-06-15",
    nowPeopleCnt: 10,
    maxPeopleCnt: 12,
    thumbnail: "https://picsum.photos/298/150",
  },
  {
    id: 6,
    title: "Project Five",
    description: "Description for Project Five.",
    category: "UI/UX Design",
    views: 1000,
    likes: 300,
    deadline: "2024-06-15",
    nowPeopleCnt: 10,
    maxPeopleCnt: 12,
    thumbnail: "https://picsum.photos/298/150",
  },
  {
    id: 7,
    title: "Project Five",
    description: "Description for Project Five.",
    category: "UI/UX Design",
    views: 1000,
    likes: 300,
    deadline: "2024-06-15",
    nowPeopleCnt: 10,
    maxPeopleCnt: 12,
    thumbnail: "https://picsum.photos/298/150",
  },
  {
    id: 8,
    title: "Project Five",
    description: "Description for Project Five.",
    category: "UI/UX Design",
    views: 1000,
    likes: 300,
    deadline: "2024-06-15",
    nowPeopleCnt: 10,
    maxPeopleCnt: 12,
    thumbnail: "https://picsum.photos/298/150",
  },
];

export const DUMMY_POSTS: IPostSummary[] = [
  {
    id: 1,
    writer: {
      id: 3,
      name: "피자",
      profileImg:
        "https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802075_Il6LeUG0NCK4JOELmkC7Ki81g0CiLpxU.jpg",
    },
    createdAt: "2024-01-02T12:00:00Z",
    title: "첫 번째 포스트 이거는 넘치는 텍스트 완전 길어 짜자자자잔",
    content:
      "이것은 첫 번째 포스트의 내용입니다. 이거는 넘치는 텍스트 완전 길어 짜자자자잔",
    category: ["#UI/UX", "#디자인", "#리액트", "#Vue.JS", "#코딩왕"],
  },
  {
    id: 2,
    writer: {
      id: 3,
      name: "피자",
      profileImg:
        "https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802075_Il6LeUG0NCK4JOELmkC7Ki81g0CiLpxU.jpg",
    },
    createdAt: "2024-01-03T14:30:00Z",
    title: "두 번째 포스트",
    content: "두 번째 포스트의 내용입니다.",
    category: ["카테고리2", "카테고리3"],
  },
  {
    id: 3,
    writer: {
      id: 3,
      name: "피자",
      profileImg:
        "https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802075_Il6LeUG0NCK4JOELmkC7Ki81g0CiLpxU.jpg",
    },
    createdAt: "2024-01-04T10:45:00Z",
    title: "세 번째 포스트",
    content: "세 번째 포스트의 내용입니다.",
    category: ["카테고리1", "카테고리3"],
  },
  {
    id: 4,
    writer: {
      id: 3,
      name: "피자",
      profileImg:
        "https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802075_Il6LeUG0NCK4JOELmkC7Ki81g0CiLpxU.jpg",
    },
    createdAt: "2024-01-05T08:15:00Z",
    title: "네 번째 포스트",
    content: "네 번째 포스트의 내용입니다.",
    category: ["카테고리1", "카테고리2", "카테고리3"],
  },
  {
    id: 5,
    writer: {
      id: 3,
      name: "피자",
      profileImg:
        "https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802075_Il6LeUG0NCK4JOELmkC7Ki81g0CiLpxU.jpg",
    },
    createdAt: "2024-01-06T16:20:00Z",
    title: "다섯 번째 포스트",
    content: "다섯 번째 포스트의 내용입니다.",
    category: ["카테고리2"],
  },
  {
    id: 6,
    writer: {
      id: 3,
      name: "피자",
      profileImg:
        "https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802075_Il6LeUG0NCK4JOELmkC7Ki81g0CiLpxU.jpg",
    },
    createdAt: "2024-01-07T11:10:00Z",
    title: "여섯 번째 포스트",
    content: "여섯 번째 포스트의 내용입니다.",
    category: ["카테고리3"],
  },
];
