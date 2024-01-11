import { IPostSummary } from "types/community";
import { IBannerInfo } from "types/home";
import { IMember } from "types/mentor";
import { IPortfolioSummary } from "types/portfolio";
import { IProject, IProjectReviewSummary } from "types/project";

export const DUMMY_REVIEWS: IProjectReviewSummary[] = [
  {
    id: 1,
    profileImg: "path/to/profile1.jpg",
    writer: "John Doe",
    date: "2024-01-09",
    rating: 4.5,
    content: "This is a great project! I really enjoyed working on it.",
  },
  {
    id: 2,
    profileImg: "path/to/profile2.jpg",
    writer: "Jane Smith",
    date: "2024-01-08",
    rating: 3.8,
    content: "The project had some challenges, but overall a good experience.",
  },
  {
    id: 3,
    profileImg: "path/to/profile3.jpg",
    writer: "Alice Johnson",
    date: "2024-01-07",
    rating: 5.0,
    content: "Fantastic project and teamwork! Highly recommended.",
  },
  {
    id: 4,
    profileImg: "path/to/profile4.jpg",
    writer: "Bob Williams",
    date: "2024-01-06",
    rating: 4.2,
    content: "Enjoyed the collaboration. Looking forward to future projects.",
  },
  {
    id: 5,
    profileImg: "path/to/profile5.jpg",
    writer: "Eva Davis",
    date: "2024-01-05",
    rating: 4.7,
    content:
      "A well-managed project with clear goals. Happy to be a part of it.",
  },
  {
    id: 6,
    profileImg: "path/to/profile6.jpg",
    writer: "Michael Brown",
    date: "2024-01-04",
    rating: 3.5,
    content: "Decent project, but there were some communication issues.",
  },
];

export const DUMMY_MENTORS: IMember[] = [
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
    isMentor: true,
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
    isMentor: true,
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
    isMentor: true,
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
    isMentor: true,
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
    isMentor: true,
  },
];

export const DUMMY_MENTEES: IMember[] = [
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
    isMentor: false,
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
    isMentor: false,
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
    isMentor: false,
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
    isMentor: false,
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
    isMentor: false,
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
    title: "글로벌 음악 투표 플랫폼",
    description:
      "안녕하세요! 오리지널 곡이 아닌 커버곡이 너무 좋았던 경험이 있나요? 이 가수가 이 노래를 커버를 해줬으면 좋겠다 했",
    category: "UI/UX디자인, 웹프론트엔드",
    views: 7123,
    likes: 5510,
    deadline: "2024-01-16",
    nowPeopleCnt: 2,
    maxPeopleCnt: 5,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/da77/7f81/607e07a9d83f1ed8d5f5a592a1b637ec?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XwxcTnVuPCP5GfgoVHBITfWpRl6XrpEh8A2FLptKr7-S3DYmSe4rnyjdYFiavgFC32jPz-aq510MhZW-kkdwtw-WYrkxmul~AHnXDe0TKOZTSzuTONsNF2w-Uprjg7cmVda3o0Dz4Rfmn25~YMx8-ik-VrbABVGYZBupj6DMrDGk2enbPBNyi6izVOv7YVS9jccNtw2NQ2NaBZVep-Ab-TNASt8sM54onfuPwNpduk0LhvXWfeYSnvEhnoW05wS2rcPF8Zn4A8Az8wrtCVb5VCPK3bGJDG71SbGfOGNWNljYidqIWpyMf5zeecGyPYNHslY~eIHjIWPemJR3~uyRBg__",
  },
  {
    id: 2,
    title: "DIA (개발자 면접 도우미)",
    description:
      "안녕하세요 3년차 서버 개발자입니다. 개발자 면접 도우미 (Developer Interview Assistant) 앱을 만드는 데 함께해주",
    category: "UI/UX기획, UI/UX디자인",
    views: 6510,
    likes: 3510,
    deadline: "2024-01-26",
    nowPeopleCnt: 2,
    maxPeopleCnt: 3,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/ad5f/3243/e513b14565bd27e7032205b7ddb137ef?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jiEWVxGBDMpfWGynsc3Xzfpb0Nao2jtFaonniMyk8rJJiioeygjEKjNtg8AnLEXxe3eRkW4do08PH00myyzCHOlZCBgHrGFFJl9YDEJ3~oW9KBz3EYeuNSZ7aRbpWV1NIXPPRFiJ38HiU7Bsyn4P8kzFU-ZANMDCbWefX1kPdgcIpBXXkMFUe7uUi3~eCZV2PfBmzVMdNidhjzUMLff21ORsT5~dt2e6dPtyYIwKIfeW9v5m~dKBVYg5LbhVIzc1tRFMp6kH9yo2C0TNyisPePG61oFtIjNB86W5oHv9d6M7fYi4YAElAENrTtg8GLgyNcblfkvd5ilWeEdSwoQ-7Q__",
  },
  {
    id: 3,
    title: "비친족 가구를 위한 정산 공유가계부",
    description:
      "안녕하세요. 팀 플로니입니다. 플로니는 2023년 12월 1일 iOS 어플리케이션을 런칭했으며, 앞으로 저희와 함께한 ",
    category: "그래픽디자인, Android, 웹서버",
    views: 4123,
    likes: 3219,
    deadline: "2024-01-16",
    nowPeopleCnt: 0,
    maxPeopleCnt: 1,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/41bb/81d1/cabdf5f4ca8206855d4bcd8a375afcce?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G-Qsx5Lcnbo2WvBMti4RCNwkkXWXo-Z9F-5f8fkkhrwjZ~gfL8r6L607H6zgJvCA8VW7y9kiCjIFgWSaiGKLnCKl~mZY9sF8XKUhu3eGZSWIva~T6Z9aL1MIlmimnrEvja6JXh3GULySNwnW53ghast92b-Gb2pE5apM8rvXdb6lIu4AEitdneTjfl4L8c6R~id~GTzn7oyYgRz9su6Py8C3U1q9zJIVSCQiGngzwmRwYt5lnG3nRpNOk82u4kUgdbbAhpBj~Qvy3HNiqJfVIqK-VGn~1p1ygCPf-Mn5JhFgUj1dsXJ80dLyscFQB22wqCYjh3iqYU86ZHaSUbdGSA__",
  },
  {
    id: 4,
    title: "울고웃고화내는 AI 영어스피킹앱",
    description:
      "시중에 나와있는 영어스피킹앱들이 너무 비싸서, 싼 값에 하고 싶어서 서비스를 만들었습니다.",
    category: "Android, IOS, UIUX디자인",
    views: 1843,
    likes: 154,
    deadline: "2024-03-09",
    nowPeopleCnt: 2,
    maxPeopleCnt: 4,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/b7c2/cfd4/8789869a435e028578f8a110ad48d308?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kAHXIsMf2F5uzQIWX6DZ5NbKXe4g3WBSGMHwhYm934KZY7LhW5tZmqz-5RAJTGQDo~O0LUUNB9iTdgOjGvQgP-hOzoZChEanVASeWAi2BZdaHRYCkrniKiKKrQnY9kMkmxUy4JnfkTP66dlVp0jTh1u8XRhHcb2VsUZTLjqMKh4e0kkYccU9ufWe2DxhdOr6QAUQCRcKLBaak2QaTaDWBQBR7~YacMttS3yjtIGd0Z8xOWEq5mGfIAhlz0hYGNltP721GIsRLUz0jNGq8W0FszlsBB1RTidBP7vxjgW5kxwgt1-uuMfCZPVOrbJUL3Rkx-090uge2RdQSJ3YjU7KVg__",
  },
  {
    id: 5,
    title: "개인프로젝트 프론트엔드1",
    description: "스터디 주제: 프론트엔드 스터디 목표: 개인프로젝트입니다",
    category: "웹 프론트엔드",
    views: 1269,
    likes: 15,
    deadline: "2024-01-16",
    nowPeopleCnt: 0,
    maxPeopleCnt: 1,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/c2d4/5888/3cbcf68b919cc5df42a46304e8c23f48?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UGi~g0iwuokNPUcSWrPksZEj66Idu4rhqgpvrMIXeTWEIm5lUaFJe8FHQPrUmQqe-1BZZip6FnZjZB70pdeV5zYKzAhMWJKFayJSHED4kzc-~EsEcOXBrzL9sb9BRStxpSx7xyzuEXNKsZHzRH~p1iZuktTFpAV5jvHjLykyaXHuMCWWksqJOgqnKFlOGxdTWSnbNgR5TKJFlMZ6TqI~CPwSfSGbr~5tNSCmG195xz2vbB2Gv5srRNY3dGqptpsXqlWGHwe7kS-9JqxRIul27wBR8Xjr2nZROejbDqczAcJg1i43y3Pq1caXpF-L~he5u5siODu9cRSxm5bib-AhLQ__",
  },
  {
    id: 6,
    title: "세미프로젝트 - 걱정 공유",
    description:
      "안녕하세요 저는 프론트엔드 개발자로 4년째 일하고 있어요. 최근 디자이너아 협업을 해보",
    category: "웹프론트엔드, IOS, Android, UI/UX",
    views: 1249,
    likes: 150,
    deadline: "2024-02-10",
    nowPeopleCnt: 1,
    maxPeopleCnt: 3,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/d1f8/8adf/d23880cd25622ee85c912426989d6d2a?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CGXLf2p2yDoekrg54luxaXo0zbcWdrVgooCSXaSIGaxlogJWb2T65~lcqHQ-o7fqys8dUDFRCX7AEttHOIp1AgPxz7Qga8bkHXQN2yrx-l4skpk5OoKdaZV4psXO7HTs228l8QnCjCwXdSPEcZl7EFQi1Uql7XLewzV-LeJK0Rn2ppsnbTYq7iPl95vW0xt10qbbGTdimpS~VgbX2mtlxT64DtlxQrXSQ-g1pDdPf3FOYvyNig42v0V8pIiyXFar68gDMgagJWm0yssWxTdLaWLO7IaLBC403Uos-zw35fhyPELyrKKrhUs6AtDwojTZdSjixQYNbqeJnm12~ROtkg__",
  },
  {
    id: 7,
    title: "FE 개발자 사이드 프로젝트 팀원 공고",
    description: "학생 스타트업에서 사이드 프로젝트 팀원 구합니다",
    category: "웹 프론트엔드",
    views: 1601,
    likes: 201,
    deadline: "2024-01-23",
    nowPeopleCnt: 0,
    maxPeopleCnt: 1,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/b4af/6478/a3559c38556e3574f4d0ea8f4fa6c82d?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mS41zwjVEqz0da145OXE0tX51N4acc2EZiid7L1WglYOcOGtD3XpjLKzxk-J5DgA~ju45P~4zu5~mVoF3bruM52HjbuLhLRgtPIuNSKkrOz7pRtLNHXpBOtCnG~caABgkFBitgL3CWsFrUqlmfCD~vt9FSfZrlS7JfDcm2LT-F3hE5O1mlFV0RnGnEI6MOqVcCrSmyePqmNlAGfJ3KXuuGOBZhQVx2IYQlDlX666Sr1E7XwNv6jTJq9x6oXUOEqetRldLOCCG0H7uVQc0T2ACi~C9Yg8Et1mQDEWSjJZ2ntg~GNU~evWJVexitgb8VdNIOK4lNJA~AR4GJx-5MkIIA__",
  },
  {
    id: 8,
    title: "화장품 APP - Project RN 팀원 공고",
    description:
      "안녕하세요, Project RN 입니다! 저희가 현재 진행하고 있는 프로젝트는 6인으로 구성",
    category: "웹 프론트앤드, 프로덕트매니저/오너",
    views: 890,
    likes: 359,
    deadline: "2024-03-16",
    nowPeopleCnt: 10,
    maxPeopleCnt: 12,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/7a0b/95c4/0dcb7a162aa218d9ac0bb1f2b7f612da?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VR~ecDabi-3Fz49c7~m2-hO07iMRHTMD65x-oup23~07drk8rGnblArAGxivPRpwDOjp2MNc0Iar4mWrrGQvuU3hPjDKN~-iAUfQHkqrwEmFr30ePsuhI1D2qbrnrdRrXioNu6UEFdG0RD48lyS1P6PxRyCF3-RLMugJkCpb5P8ierjzRME2iS4E1u7BapG~wAN3yIsv09zRiYbgokjW7MSQIE-8bpZzl3n6i8aJP-0Nni~21GeCY1FPXWGAk1OrgVozBHYTCWBgceXjHn8lHgJrIY~iIcXViYV-HKyIMW~T42eSb-HsarU1dADP4qXyKDz5ERV5XQlyWNHOAdlB4g__",
  },
  {
    id: 9,
    title: "화장품 APP - Project RN 팀원 공고",
    description:
      "안녕하세요, Project RN 입니다! 저희가 현재 진행하고 있는 프로젝트는 6인으로 구성",
    category: "웹 프론트앤드, 프로덕트매니저/오너",
    views: 890,
    likes: 359,
    deadline: "2024-03-15",
    nowPeopleCnt: 8,
    maxPeopleCnt: 10,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/7a0b/95c4/0dcb7a162aa218d9ac0bb1f2b7f612da?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VR~ecDabi-3Fz49c7~m2-hO07iMRHTMD65x-oup23~07drk8rGnblArAGxivPRpwDOjp2MNc0Iar4mWrrGQvuU3hPjDKN~-iAUfQHkqrwEmFr30ePsuhI1D2qbrnrdRrXioNu6UEFdG0RD48lyS1P6PxRyCF3-RLMugJkCpb5P8ierjzRME2iS4E1u7BapG~wAN3yIsv09zRiYbgokjW7MSQIE-8bpZzl3n6i8aJP-0Nni~21GeCY1FPXWGAk1OrgVozBHYTCWBgceXjHn8lHgJrIY~iIcXViYV-HKyIMW~T42eSb-HsarU1dADP4qXyKDz5ERV5XQlyWNHOAdlB4g__",
  },
  {
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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
    id: 21,
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
    id: 22,
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
    id: 23,
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
    id: 24,
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

export const DUMMY_HOT_PROJECTS: IProject[] = [
  {
    id: 26,
    title: "Project One",
    description: "This is the description for Project One.",
    category: "Web Development",
    views: 1200,
    likes: 350,
    deadline: "2024-01-06",
    nowPeopleCnt: 8,
    maxPeopleCnt: 10,
    thumbnail: "https://picsum.photos/298/150",
  },
  {
    id: 27,
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
    id: 28,
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
    id: 29,
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

export const DUMMY_PROJECT_DETAIL = {};
