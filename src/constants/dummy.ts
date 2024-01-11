import { IPostSummary } from "types/community";
import { IBannerInfo } from "types/home";
import { IMember } from "types/mentor";
import { IPortfolioSummary } from "types/portfolio";
import { IProject, IProjectReviewSummary } from "types/project";

export const DUMMY_REVIEWS: IProjectReviewSummary[] = [
  {
    id: 1,
    profileImg: "path/to/profile1.jpg",
    writer: "meeso",
    date: "2024-01-09",
    rating: 4.5,
    content:
      "함께 성공을 이룬 것에 대해 자랑스럽고, 다음 프로젝트에서도 함께 일하고 싶습니다.",
  },
  {
    id: 2,
    profileImg: "path/to/profile2.jpg",
    writer: "이아현",
    date: "2024-01-08",
    rating: 3.8,
    content:
      "프로젝트를 함께 한 동료들과의 경험은 정말 소중했습니다. 서로의 강점을 살려가며 효율적으로 일할 수 있었고, 결과물에 대한 만족감도 크네요. 함께 한 시간이 행복했고, 또 다른 기회가 있다면 또 함께 일하고 싶습니다.",
  },
  {
    id: 3,
    profileImg: "path/to/profile3.jpg",
    writer: "홍지석",
    date: "2024-01-07",
    rating: 5.0,
    content:
      "이번 프로젝트에서 함께 일한 동료들은 정말 열정적이고 책임감이 강했습니다. 함께 노력하고 서로를 응원하며 어려움을 극복해나갔던 경험이 기억에 남아요. 다음에도 이런 팀원들과 함께 일하고 싶습니다.",
  },
  {
    id: 4,
    profileImg: "path/to/profile4.jpg",
    writer: "스튜디오 파도나무",
    date: "2024-01-06",
    rating: 4.2,
    content:
      "서로의 아이디어를 존중하고 피드백을 통해 더 나은 결과물을 만들어내는 과정이 정말 행복했어요.",
  },
  {
    id: 5,
    profileImg: "path/to/profile5.jpg",
    writer: "Hye-gyeong Lee",
    date: "2024-01-05",
    rating: 4.7,
    content:
      "정말 값진 시간이었습니다. 서로의 역량을 존중하고 협력하여 일을 진행하면서 많은 것을 배웠고, 새로운 아이디어와 시야를 넓힐 수 있었어요.",
  },
  {
    id: 6,
    profileImg: "path/to/profile6.jpg",
    writer: "Bspokr Studio",
    date: "2024-01-04",
    rating: 3.5,
    content:
      "프로젝트를 같이 진행한 동료들과의 협업은 정말 훌륭했습니다. 서로의 아이디어를 존중하고 토론을 통해 최선의 결과물을 만들어냈어요. 함께 일하면서 많이 배우고 성장할 수 있었던 소중한 경험이었습니다",
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
];

export const ALL_PROJECTS: IProject[] = [
  {
    id: 1,
    title: "링크 스크랩 서비스 “퀵카이브”",
    description:
      "나중에 봐야 할 링크를 간편하게 저장할 수 있는 AI 스크랩 서비스입니다.",
    category: "웹 서버",
    views: 2171,
    likes: 601,
    deadline: "2024-03-10",
    nowPeopleCnt: 1,
    maxPeopleCnt: 4,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/bef8/0e79/0ac0e6445572d371e4469e98f472ba01?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cFulxmLTcipLaJq31-vR22aZfcHNP3XPFRV3Wm-NEDNNICTIHvL5T1E4eIBXhCuGxS6~6Bg7oKrb6syPGVd4wPYKEA-GxAVwTtSqs8UrCsgHkzEj~m2XVu3uV8Ja4dMhsUVQEf4doS04340A9qs1mfHMZMEK3JIHjPqlbhyGHTgpSUGNuOgDUdBzope7~aOblDJyQPUGbLq4diPDUWAvuRBL-0EE2cnCSjxn9P9q8gme3DfZdRX5jUVNS4Nk~clU101KNwlfuzT8ry6SkyHfr26vzH6cjQCJKW~U3E4wZKinNrQ5A3z1eVdbEF5n2Tb8Y~ApAlM6vbOP3fF8PHGLvA__",
  },
  {
    id: 11,
    title: "물물교환 및 모임/프로젝트 앱",
    description:
      "6개월에서 1년에 하나씩 수익을 창출할 수 있는 앱을 출시하고 싶습니다.",
    category:
      "UI/UX기획, 웹서버, UI/UX 디자인, 그래픽디자인, 안드로이드, 사업기획(BD/BA), 크로스플랫폼",
    views: 1912,
    likes: 821,
    deadline: "2024-01-19",
    nowPeopleCnt: 4,
    maxPeopleCnt: 9,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/0ddb/586c/4e884ad048cf4ab802b130ea1ace6203?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ncJA2nj0VJFn5uxAQS~gunkZElcvSXXIIgyLfidivmt3Gv0o8h-b1PThoOkaMzspd8FXACeLFF5SVF18FOaTPRRss~bJnrVFoqeWwTn5NWP~rXUHSRE6pUsMPR7MUqGcRpw~4i4KC1ucd0nQ2lOdm~iYkstSCZqQWTN5T2IQ8Q9KBalJE6sqLoUHBPD6N5LF~Dkx-v1VCXju~FKW2awPTCYKv1CGPWnjrNLf46cdv9L3-CuNMjGmbppTyZ2IbujIn8Ep8YF7bmPU4ucuhj5v0ISP-qhBWKYK2f3~n244EtI~SUFtLgPrQ5Cfo-xGNNOKWFTVXlZAYyePg29pKD9jXQ__",
  },
  {
    id: 12,
    title: "크로스플랫폼 앱 프로젝트",
    description:
      "React Native나 Flutter를 사용한 크로스플랫폼 앱 개발을 진행해보고 싶어요!",
    category: "웹 프론트엔드",
    views: 512,
    likes: 15,
    deadline: "2024-01-16",
    nowPeopleCnt: 0,
    maxPeopleCnt: 1,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/c2d4/5888/3cbcf68b919cc5df42a46304e8c23f48?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UGi~g0iwuokNPUcSWrPksZEj66Idu4rhqgpvrMIXeTWEIm5lUaFJe8FHQPrUmQqe-1BZZip6FnZjZB70pdeV5zYKzAhMWJKFayJSHED4kzc-~EsEcOXBrzL9sb9BRStxpSx7xyzuEXNKsZHzRH~p1iZuktTFpAV5jvHjLykyaXHuMCWWksqJOgqnKFlOGxdTWSnbNgR5TKJFlMZ6TqI~CPwSfSGbr~5tNSCmG195xz2vbB2Gv5srRNY3dGqptpsXqlWGHwe7kS-9JqxRIul27wBR8Xjr2nZROejbDqczAcJg1i43y3Pq1caXpF-L~he5u5siODu9cRSxm5bib-AhLQ__",
  },
  {
    id: 13,
    title: "세미프로젝트 - 걱정 공유",
    description:
      "안녕하세요 저는 프론트엔드 개발자로 4년째 일하고있습니다. 지금까지의 경력과 사이드 프로젝트를 바탕으로 기획",
    category: "웹 프론트엔드, IOS, Android, UI/UX 디자인",
    views: 1610,
    likes: 200,
    deadline: "2024-01-23",
    nowPeopleCnt: 4,
    maxPeopleCnt: 10,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/7fc4/7216/cf7fb95f040f85f9f50d624411fc53c8?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ETGHjNygunubJESecHfAyE3gj~8hEx44L2OU5vdNiS~0aSmnIj56mymh0xOEiLAr3uXqom9BVyUJALrebDyGzOIw-5QRVkJUCbN7kbswaH0SMzpyBDFy7e9Err0ShQlbvNd5dw-vY8xavDScKfubCLCIllfM~ydMptmZue7Zbg3Op2lQoQd0kUCHPyho~2b4o7jy6OEQfft~99tKvxZ30Dy-L0QfogKxL-DpZrYqgdj0aN40IM7rF5QccqWNZjXhR94rMdlBptmvHfLrxPqCFWCAmJn4SsUE8wwtMJpjTla1ugHDU0~hqyyf2XciCSvQclDSMSd3cBcPvpZ2ebyBSg__",
  },
  {
    id: 14,
    title: "FE 개발자 초기 멤버 공고",
    description: "학생 스타트업에서 프론트엔드를 담당하실 팀원을 구합니다.",
    category: "웹 프론트엔드",
    views: 1610,
    likes: 200,
    deadline: "2024-01-23",
    nowPeopleCnt: 0,
    maxPeopleCnt: 1,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/b4af/6478/a3559c38556e3574f4d0ea8f4fa6c82d?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mS41zwjVEqz0da145OXE0tX51N4acc2EZiid7L1WglYOcOGtD3XpjLKzxk-J5DgA~ju45P~4zu5~mVoF3bruM52HjbuLhLRgtPIuNSKkrOz7pRtLNHXpBOtCnG~caABgkFBitgL3CWsFrUqlmfCD~vt9FSfZrlS7JfDcm2LT-F3hE5O1mlFV0RnGnEI6MOqVcCrSmyePqmNlAGfJ3KXuuGOBZhQVx2IYQlDlX666Sr1E7XwNv6jTJq9x6oXUOEqetRldLOCCG0H7uVQc0T2ACi~C9Yg8Et1mQDEWSjJZ2ntg~GNU~evWJVexitgb8VdNIOK4lNJA~AR4GJx-5MkIIA__",
  },
  {
    id: 15,
    title: "숏폼기반 하이퍼로컬소셜앱, 플레이핑",
    description:
      "초근거리 기반 소통으로 숏폼을 주고받는 하이퍼 로컬 커넥팅 플랫폼에서 IOS 개발자(2명)를 모십니다.",
    category: "IOS",
    views: 50,
    likes: 12,
    deadline: "2024-02-10",
    nowPeopleCnt: 8,
    maxPeopleCnt: 8,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/4e65/7705/0d88a04a07fa82443fc1baabe1bae9f3?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NP~2uWKf-lynFekwKfNVOTXjzQqFzM6MZFoeGUJ3fUGCS43N09plzOjFTtnZ~RbHPT80J-e4YC-Az1XAJcpSccUgOweS30nuIcRPvb1N8ZjyqcTexBG78C4JNyGAXYHjVcnQi-sup2bXsH7CBAuB56zS5iD5VB89bOELCw4yFRaoPg9yBIs8wVIQ7W6tk2R-LabqGmyFFJskko6OzHCV2cx86bZ8mE~k~iuCtZKzE80EQ4FqHwt77vCbTPhc-OuqkObqgkEdgqyGqlXQda5gNC11b7OvB3hhhOfknonfIR6wwsCHr8xvjZZ36ilpz6M-QOx3E6HZek14Y0kEdBfmIg__",
  },
  {
    id: 16,
    title: "10대들의 커뮤니티 앱",
    description:
      "대학생들은 대학생만 이용 가능한 에브리타임이 있지만 10대 연령층은 따로 존재하지 않아요.",
    category: "UI/UX 디자인",
    views: 2810,
    likes: 590,
    deadline: "2024-01-31",
    nowPeopleCnt: 0,
    maxPeopleCnt: 2,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/51c0/a4f9/76012daa42afed73ad13fbdcb8344a2f?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YVVJzPXYopVihQrQodNm~e5AQ98hi-MEUh~-dwJMpum4KAbyOwM8kJhlIc6cZMtVXvNsB9FG60rW0xphOxJHytpgrHcoF3BT3eMyu7eEyqGfFQbdIWZ--pjBfpUjs6PqNJV20MSrgsXbav-z4Z40uhN6ehPaki0S2rpBgPHz~DUgGY0epXnDMlbqHsz19ZrtquBPomZCxVH7NMUtlHc48A7qGy7Rtg8yXY8acBUC5t2RLc4Si2Clm5BbFSYOGFua6MUGBUHKFqaGprOcOS46F0XOhSVQLe2foqSl~1IESn32427ft6IWa3Pw2ox1JZeqzZawe~72edqMYN8dKhDXkQ__",
  },
  {
    id: 17,
    title: "Js 인터랙션 스터디",
    description:
      "바닐라 자바스크립트를 사용한 인터랙션을 함께 공부하실 프로트엔드 개발자 분들을 찾습니다.",
    category: "웹 프론트엔드",
    views: 1610,
    likes: 201,
    deadline: "2024-01-23",
    nowPeopleCnt: 2,
    maxPeopleCnt: 4,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/c42f/1eb4/78458f715e2b683a8a929a3881f5d3d3?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nSOhIkhfkpW1W-rHqHBpakKEZylVU3z~YKBRge~G3wV-LKiQfjeEODq2ueuuXhW6jmjo76--t3nxihJLj9Ft7Ggioht2WVRTH9hDeD7q3ArXPYMfOVSF7yVgKAu8scxgOfH~YoB3Q8RzrnootG6ilSt7mPIJMtzYFZjQEWNBmcKVNegkJfvShn2fIgGbVbYHOG1f8-SaJ6GcKaYz7ezrNS-Duwl7wbx~k3QIQXDJNLRDsopaXST5~WOKvKh3ILew4q8~HSVfhH2--UyAi7eUcgBPmPZW1P~WCLkSo1DOF49jDZvMlBLyaIGK3W7zYB8KaTydUD-UuMnxX~TiSo0PrQ__",
  },
  {
    id: 18,
    title: "공연예술 콘텐츠 큐레이션 플랫폼",
    description:
      "많은 분들이 문의와 지원을 넣어 주고 계신 관계로 답변이 늦어질 수 있는 점 양해 부탁드립니다!",
    category:
      "프로덕트 매니저/오너, UI/UX디자인, IOS, 안드로이드, 웹 서버, 아키텍트 (TA/DA/AA), 기타",
    views: 231,
    likes: 121,
    deadline: "2024-01-25",
    nowPeopleCnt: 3,
    maxPeopleCnt: 6,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/3375/45ac/504526777d1a11c9e27d6ba929cc2cc6?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=duC2tlDi1NXJh2Su67rBvSsGg-DUuqtvwNb7FgfiKhdwRdD94R65x0wBbZo2Hkcg4azIGSAp8q-fQoimlE5tdQ-344B8oQJqhaMJs3deArW4H~T1jCU03kVo~FC3RvvwFDkNHLUpBjIiJqbbI2p~HRYdy8gWbHJ8CYHV5cP4MuFHsXQ0ewjWnrDyzWcIB7WEzSY-6Hi4UM3EPZvyYXIfbZcoolL~O9GesoXplVhdK2aKvOhjknG9RMYN3UIKb8fiRfsv4PXkWSZ5RYYw2Rw56mIhvVK5fPpgfljXcNgGEhZQIr3m0Al0DG8uBd42QI5nPMOfZ2jPNSCf2C2rNa2f5w__",
  },
  {
    id: 19,
    title: "강아지 배변 인식기 앱 개발",
    description:
      "반려동물, 특히 강아지들의 배변 습관을 관리해 줄 수 있는 앱을 만들어보고 싶습니다.",
    category: "UIUX, 기획, 백엔드",
    views: 650,
    likes: 221,
    deadline: "2024-02-03",
    nowPeopleCnt: 2,
    maxPeopleCnt: 5,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/7ade/aaaf/227bb3430c541917c3a849c7aeab0782?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K8ar5GTPOjV3nnSGuEegpLv~SSis5XqVaSR4OxhV6p6ygpjRYoYxbwN545IhAuQYy6vdApWH24a1yhA9VTnchNPNYJIZccHErMHso7qZ7cofHlp~kAS~qE7oZ5f~q9GzA7ooXOvVvmV~rNLdhsLAgToLeDyEqHqvrQbMGCFNi7yakoAz~GwHdkgY0HOU-uAtY6moh6ourOQTlqzu-Vp9Yi4yk1sCW88dLRiFmlBT3~ufBwbjglipdvPA4X0NxtrTC1dQu4Rzc8UhGdXGmfchEVcBgtGFV6OKsWdkOUp9MH3gpzJ4CdKwMOwA6Ni~UAcSOSGJd~QFoLGQR5mUALMwOQ__",
  },
  {
    id: 20,
    title: "FE 클론 코딩 스터디 모집",
    description:
      "정적인 웹 페이지부터 인터랙션이 들어간 케이스까지 단계적으로 장기간 함께 스터디를 진행할 팀원을 찾습니다.",
    category: "웹 프론트엔드",
    views: 1210,
    likes: 15,
    deadline: "2024-01-16",
    nowPeopleCnt: 0,
    maxPeopleCnt: 4,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/30da/720c/f9ddc50d21074b20e489a59e93ebf1a4?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iA3V7i9k5s~RuGxWdO5F2zdHF8Arv4PKxezLwxtuiLusQshdHN7ysUoOa1lx1vKN~7hJNJNVFdIt6o7qJ6kjWAwdiD1dz2WhZpy7S1VZOQ8jybCZzVarn52ZJef8iOdysw76gl7f-QrE9pQmBJEl66LkRGhEBcc82CJSh8F1Apips-fm6nEMiZ21DJX3sg6i2gzS--wm7Am~3ehHJCSSUIvT5bVVi5ea6xbmx7jxtBs7YOe9CBinqbOZZx3CCrzJhl-K1WRedB5uL7UDzeSeuqu6axJYqAhA0sNy94yY5eKb0MxntcFqstn9rovNf4~vTmx0fyvjxXQIx2-3l8GsbA__",
  },
  {
    id: 21,
    title: "일기교환 앱",
    description:
      "정말 간단한 앱을 구상하고 있습니다. 사용자가 일기를 작성하고 다른 사람들과 돌려보는 컨셉이에요.",
    category: "웹 프론트엔드, IOS, Android, UI/UX 디자인",
    views: 1214,
    likes: 151,
    deadline: "2024-02-10",
    nowPeopleCnt: 3,
    maxPeopleCnt: 8,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/fb27/ee5e/4435e2e13ba157c782e5b8b0049d3f19?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iZKkpMTYtDaCOxzxANnDqjEM0bhKEzyg-Ck75GTdpQ7RmRd2MglAuMRbtrvHxZMecoaGLLTeMYRzU-h6VAzuXozosrYw6pWKgdxo2Jhdj0HkAv-fRtCM0j4WJyNb8Cg1uw~3MCTn1VfrwwsdwCvag9xF4-UvGbo1KgMd7-Q89vizAFd40Zjz78~rSjUEUvU~U3FmtPbSlOOyjgENVYKIHUX-y7YthWxXibU9cGvnxE70wBMd9MVjgbf-FLJWTg6K6CE1N7eimy1mwpHP1O8Apx17AgqS02tTrK0meLvqw3rvgYPK7y9AubawcKKmixCxgfYerLzYTCc0ternzrip2Q__",
  },
  {
    id: 22,
    title: "간단한 웹 구현 후 1대1 코드리뷰까지",
    description:
      "도메인이나 주제를 자유롭게 설정하고 구현까지 완료한 후 1대1로 코드에 대해 의견을 나누는 시간을 가지려고 합니다.",
    category: "웹 프론트엔드",
    views: 1610,
    likes: 200,
    deadline: "2024-01-23",
    nowPeopleCnt: 0,
    maxPeopleCnt: 1,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/7133/825a/04517c0b3f58346491fa4b8d8e05c3a0?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KluAqvY57AmaFNHk3o62Onk7HEHazgBJpVnlEiJhsMUdfZha0el2ZSTUFXiy5nB7~x6HXKFjrSAP2jpEdRULESuoRQAR1z6UIc-yge4qP5nQSCp6oJQFx7ckSXUCrfxBvR3~kJ5zqq82-Vb-q9ylcdtX18NTkn3jbEpjwsSq~XCDVmJRXu3mzlX4SsJJJS6GDJo4gqkjQU0ZhncVb12wlnrOH9~SAUmCknWGUEHbCk9-HYu~HUcBN~JeJN1nWM~X0uW~G02Pd-nMwN2Bl8dTlH~24fobikZ17B7BThCeeCw~tg0eBMi0QeEJgPKoScuHHJpivt106r8gaX5nB5mpzA__",
  },
  {
    id: 23,
    title: "화장품 관련 APP, Project RN 팀원 공고",
    description:
      "안녕하세요, Project RN 팀입니다! 저희가 현재 진행하고 있는 프로젝트는 6인으로 구성되어 있고 추가적인 팀원 모집을 진행하려고 합니다.",
    category: "웹프론트앤드, 프로덕트매니저/오너, UI/UX디자인",
    views: 890,
    likes: 359,
    deadline: "2024-03-04",
    nowPeopleCnt: 2,
    maxPeopleCnt: 5,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/2547/c3c0/9de9835509486a5e06b62bad97299478?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ddEbQFtIW~dN~mMM~OKTMlD14LSfSRe1gNydk1Fm80uofVOhwsAfJ37rdtwizZrGTDR~yvtWOx69~ub-7dCCNg-yzDRXwnDMpDGFHbN8TJM02JvHo4LjmEMkt3hqd6xGxsSNnHxB1JFE3K4W9lN0eLdOCWpWMMt6iiQKmLmf7NMTdcxv3ytWpyqAybEf3xB9qrKxViIysC0jGSXdFgU8Gr45zfN0DyOEfyMPjdEe-Mmjf1EgfvEAi7-NXWuWsr0mQA~ptBGjX-MpTxhHe-t49awbL1o3TLE9VcG-oSOzJ6s2~ZdHo5RAi2YzN5pvmQwVR82XdQDMn9X04l~LiPdcVA__",
  },
  {
    id: 24,
    title: "특수동물 라이프케어 서비스",
    description:
      "특수한 환경, 특성을 가진 동물의 삶에 도움을 줄 수 있는 라이프케어 서비스를 기획중입니다.",
    category: "UI/UX Design",
    views: 2141,
    likes: 680,
    deadline: "2024-01-12",
    nowPeopleCnt: 10,
    maxPeopleCnt: 10,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/5f73/4f76/511405838c3ee6b7c2d03abe343d5e8c?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yj1Xj2uzb~5F3Yc4y4ByCmdCHG2RrWBf2Hb-GxlvUZoMiHoeywfdKTchtBUCQxDIUzbPfpI4cJad~NGGZjoc8vVkCilU2CotJ3s08~mpr6OIrvPcJfhMtLYvDBFze~e60FaT0YeP9EsKN2Lrcj3~3vpuPdoZvZMao6~WJoEzal4djNBLfmBpeubN8GwvK~jIjAgww3hLc1dg5FOrlLX6SFjv8MoxhpIxdlylbhimORVYW9ulnujdKSWuLOb2~8eP3zwfGyPx0EEyc5hKItW4x-uzFbj~y7cXQRZ1Gh~RVobmAVlJEeP45FTRN~xtphfSU3ZdPe9Eawlkvnrdbk9hZw__",
  },
  {
    id: 99,
    title: "SNS 앱 컨셉추얼 프로젝트",
    description:
      "간단히 사진을 공유하고 댓글을 달 수 있는 앱을 기획, 디자인까지만 진행해보려고 합니다.",
    category: "프로덕트매니저/오너, UI/UX디자인",
    views: 1210,
    likes: 590,
    deadline: "2024-02-09",
    nowPeopleCnt: 1,
    maxPeopleCnt: 3,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/7233/5f68/896be62d82e42481346d521a9e5fbc18?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bsEujZDw9a07xuwgmTIzVI7smncfoLVWbK0CC18g2jmMq9YZbWGViBsmAxH~m1PUSFiMGMYqeEJePtynf6nScbkqhy1Iq~-yRK3tIwA2FbRqzjS~r4TXmLVS5mV9oJhjfr86f8lSLI9nZVjgmQ0smNSxUe9MINCJvvkec2SdZRjPMJS0j22khQaX-Vym1fp68L7zy2V39WHkXWM2ukcbopEhmEX4iZfmcJy0x41OsXN04xq6tQJ7IIKzHDdZamH7l5XrHSViGnTtLAR6YBEuNmwEnpLGB92f5UiZwvshQHrSGlGFerL5b695Aan77BF2ECLycNlMh1fJZrUQl3arcg__",
  },
  {
    id: 25,
    title: "투자 포트폴리오 모니터링 서비스",
    description:
      "한국투자증권에서 제공하는 REST API를 사용해서 자신이 보유한 투자 포트폴리오를 실시간으로 확인할 수 있는 서비스를 기획중입니다.",
    category: "UI/UX 디자인, 웹프론트엔드, 웹 서브, (기획)기타",
    views: 952,
    likes: 452,
    deadline: "2024-02-04",
    nowPeopleCnt: 5,
    maxPeopleCnt: 5,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/1a1b/c00e/e10a7e1ad64e56e83dc52a5de5b354f0?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F6Zygd0InE6m3~35FCPgkQukDSDjh9cTHNctsYdt~ktwmFsJdrgSvokpa8Jt-iQSeosaXHo2fT7r3kBk~zT7WBRX2lfHvYUGQ~gqYxSeQvLk9REOaDcX~b-enkcag9GKK4pivmiUdVJqAL427ZupEqipk-93kmXDSXhWIHqwAzO--cPooNEtvuWQ22cyjut-ohq1XYOexfrsLp~g0IlcWi8sTrjP2E3EQdGVtFY6l1HAcSDpP-wvLyWjFdERRft5CFrp9VnBq3kM~HqagoJKEqUoy1NOb1xNms9sTIQz8Q8VSJah4RG34CRXB6THkOqfmPkiqsAzB3tOFoL7ChqH7g__",
  },
  {
    id: 26,
    title: "SNS 앱 컨셉추얼 프로젝트",
    description:
      "간단히 사진을 공유하고 댓글을 달 수 있는 앱을 기획, 디자인까지만 진행해보려고 합니다.",
    category: "프로덕트 매니저/오너, UI/UX디자인",
    views: 1241,
    likes: 590,
    deadline: "2024-01-26",
    nowPeopleCnt: 1,
    maxPeopleCnt: 3,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/7233/5f68/896be62d82e42481346d521a9e5fbc18?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bsEujZDw9a07xuwgmTIzVI7smncfoLVWbK0CC18g2jmMq9YZbWGViBsmAxH~m1PUSFiMGMYqeEJePtynf6nScbkqhy1Iq~-yRK3tIwA2FbRqzjS~r4TXmLVS5mV9oJhjfr86f8lSLI9nZVjgmQ0smNSxUe9MINCJvvkec2SdZRjPMJS0j22khQaX-Vym1fp68L7zy2V39WHkXWM2ukcbopEhmEX4iZfmcJy0x41OsXN04xq6tQJ7IIKzHDdZamH7l5XrHSViGnTtLAR6YBEuNmwEnpLGB92f5UiZwvshQHrSGlGFerL5b695Aan77BF2ECLycNlMh1fJZrUQl3arcg__",
  },
  {
    id: 27,
    title: "Swift UI 토이 프로젝트",
    description:
      "점점 Swift UI에 대한 중요성이 커지고 있는 것 같아 토이 프로젝트를 진행해보려고 합니다.",
    category: "Machine Learning",
    views: 781,
    likes: 71,
    deadline: "2024-01-22",
    nowPeopleCnt: 1,
    maxPeopleCnt: 5,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/9070/4022/4530fff47a23e3bb35739bbc6b92a4f7?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pjE5HpUrlYc12~ou4mCWKgz1EsBUp413A0Tf7~oWinMNxfBha0UkIlkCITv5cZM7SRuC2TH3YvPU6UD5SffnGzY-R0uxSpMiRXO1pTxtOY6uceUmyHHYmKkGQJZ01JTMzY6cQCQ-4dzirf6mxabkBtWg67uc5g10BQDuT5ivTSKOB0mh0VW1FFOX7nFrFmHqOn9ufTThUL5B1VQRabxYNzQYnvhCyDjqJ8A3daAezOzi0slrYVW4YfPgICPpBvCDoC-2DWmm54jMu0tcD3aeg1E8nFzgxG1DmzlaOA~0GRJQYLTnNWubHqbG~BUTkag~xNAjUPr2ogzPZHDmbPE-eA__",
  },
  {
    id: 28,
    title: "Kotlin Multiplatform 크로스플랫폼 앱 개발",
    description:
      "Kotlin Multiplatform 라이브러리가 요즘 떠로르는 관계로 간단한 앱을 만들어보고 싶습니다.",
    category: "UI/UX디자인, 웹프론트엔드",
    views: 942,
    likes: 29,
    deadline: "2024-02-9",
    nowPeopleCnt: 0,
    maxPeopleCnt: 3,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/5627/ad22/9c977b90b838aa655a72791a1c1896b7?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RJvibvqg~ZrinQ3SwAm2~0wURhSV6TPlgG9Ag4~cn8SHXGHNZHFEThnZ-ZcoVJyUdzpjOYXXm~2db0wY3Blt97DAEeAr2Aa9i6WEiP13y90fQoNZHpa2M-PfWnYwEyjNdjiJCYZeP3BUAAFxNxQ-Q1aLGJhSEIVmdet14HRI4F6r8XdF2UFoo15MJ0BYSfCyMn9LP5HDEa7meujtt6ZqA4WXnr8yA-JtSvbEt6u3N1aS57j-qXCWvnNlJMX07ovHFoGdZVQQGI4C0-YbZ9LIM0xfsUsQPVdQxQPIWUGo3szvcrNhuhQREwFwrv-O7WQU-DKTLSktMiej5ceVaTsZbw__",
  },
  {
    id: 29,
    title: "인테리어 안전거래 서비스-디자이너모집",
    description:
      "시공부터 사후관리까지 안정적으로 진행할 수 있는 인테리어 전문 서비스를 만들고 싶습니다!",
    category: "UI/UX 디자인, 웹 서버, 웹 프론트엔드, UI/UX 기획",
    views: 689,
    likes: 278,
    deadline: "2024-01-12",
    nowPeopleCnt: 6,
    maxPeopleCnt: 6,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/692b/7fdd/03c7af8be0885d3b187850731bd6c4f1?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dn1fu44AMt8J4-dAJRq4U9NfM-PQc8drJ~ulxaiZO5beUfG3bAWxkn9~YAGQZH8b2GIIHcXUQCmYVASk1DvYCbwbsqm7GAfAs3jZnrvoJVGrGABjJJvwj2WbGONvwKzi8MjQX8Qb4HjC34-8sl~nOdFz1HcbiGF0TyfDk8ta0AZqPCh54ByWg-rTEb4EBE8b9CJeXuoFl7MCjXQ~Mg8XEDPkVzGKIATFqa2WYP3455D-fXr1pghkrvLnJ6pL5nH8kQgXqp-t9zCeO15ljVi4LY54gnxpYv82fbwccL8ItHyEAsDSwUNSSoGTr8KpEhLNEo4i2IZKlerk2FXYYppFEw__",
  },
  {
    id: 30,
    title: "러닝코스 트래킹 앱",
    description:
      "개인적으로 러닝을 즐기는데 나이키 앱을 사용하면서 좀 더 단순한 서비스가 있었으면 좋겠다고 생각했어요.",
    category: "UI/UX디자인, IOS, Android, Back-end",
    views: 9123,
    likes: 590,
    deadline: "2024-01-20",
    nowPeopleCnt: 3,
    maxPeopleCnt: 8,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/3e9b/79f9/2d6180944fe85e2ea1619aaa1df8e7d3?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BnSrl-HcTCzYcnitFqorS1cD~kTlk1Q56R3M3TLBz21cnxGonBYRHAxcKyV~m~YzCFjDdnjSOQo-pyab9Rx~O8HVzMcxWRmry7orvLlVea2tG5hh0EQ0IxN7y3Au5qfYd2qvsWBND8UkRmvAnSJ20pfMezQsAWlr5ZmBpOR7DRu2yHPzTs0zo5Hx2hTxDbD41Ql525Hhyq46FjXENWwMuPdceuh-g2QWIEgIM9pHoour7AmMRL0~OaUTMRkdK4icvWmcPk1u4rGnqluX5Z-bLG6O1O~fFbWENjKOO5L9n7-SnjZhPT5bdlruab8lpAwy4o~0Y3HORrJlUcXvNI8EYQ__",
  },
  {
    id: 31,
    title: "디자인 시스템 오픈소스 만들기",
    description:
      "누구나 자유롭게 사용할 수 있는 무료 디자인 시스템을 만들어보려고 합니다. 실제 개발에서도 쓰일 수 있게 React Component 까지 제작하려고 합니다.",
    category: " UI/UX 디자인, 웹 프론트앤드",
    views: 320,
    likes: 65,
    deadline: "2024-01-26",
    nowPeopleCnt: 4,
    maxPeopleCnt: 6,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/1ab8/6c56/d7bc5a2c2b3bf5c7c7d6fa47a1c14a53?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g0jeMUKypz3RFIqhENoIimiRflaaeyCgwQGwbJl53zVs1xdK6aW~L5vR8-saF-837At4tZnwy59iu~PTq8WLRRTxub8d03Jqdz8BLVSG9j2IS3TTTEtpsXFWFIvOxxvXOZg9aQp53U6jYcO~wACCqb2OUL~V9BrapJ6wp28Zmt4mnsAE1N9tNMsDeJbQS-FZB-xKGBEcuLBWERV5~IHvX-XfgAVIeIrIPaUYCAUZDeZZhUxn7dy1wAy7aVPMoybI8kWTvYCGQTkZEcM19pRKuYRZVMz0xn~L1fnsByJnzAIZr8l-YtX5CeBRcozm4qjEep2~vFmix6wl8LvN3uEhoQ__",
  },
  {
    id: 32,
    title: "노션 서드파티 앱 프로젝트",
    description:
      "노션에서 문서 관리를 좀 더 편하게 도와줄 수 있는 확장 프로그램을 기획하고 있습니다! ",
    category: "UI/UX디자인, 웹서버, 웹프론트엔드, UIUX기획",
    views: 820,
    likes: 56,
    deadline: "2024-01-30",
    nowPeopleCnt: 2,
    maxPeopleCnt: 9,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/36c8/e327/9ea53caa68d04e799498f4254e705bac?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jULFxTuTU4Hch7FlCTFGn-wOGxn8k88RrAfjeSCMG6TxWDbNzXCkmyIfU1EOuuwM9buBKuKEnORgfFdOYQoQ77Gh~I-9YgXlbab~CYwICZq9v1yW7JNXxjXhuDsGu2nbPzz2ddQCsC7KxqpZS62SeGLxYNpyzJNPiGvu6qzKdzzHfVGuCcS-tk3ZTInxf0AEv-a2Eoc36Eu9QLVNRlyC5YkaCahCebswJCLtx4sPt22B0h0l0oQtMSS2zxTewJxHJUXpmz1HLWi1IW66VttgCTmUlfzB8u0LKOI9ekI0ZjO1NN7jRjo5RwkQuh4vKkhC4pFKMS1LSFfzVZeabwnflw__",
  },
  {
    id: 33,
    title: "단편 3D 캐릭터 애니메이션",
    description:
      "함께 모여서 포트폴리오를 만드실 팀원분들을 구합니다! 스토리보드는 이미 만들어 놓은 상태이기 때문에 디자인 아웃풋을 만드실 분들을 구해요",
    category: "캐릭터 디자인, 3D 디자인, 아트 디렉팅",
    views: 9142,
    likes: 590,
    deadline: "2024-01-19",
    nowPeopleCnt: 5,
    maxPeopleCnt: 12,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/ec61/9842/0073c3650a3ff38df03b2d7869982620?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mj5BLpu~RYkCs0w-fICDltKPzuRkBRxCIz4~HJ4jFAo2PeeItQ~T3o-UIu~3uLPiZL6wri5X6Y-BhpMN3EaHOJXxGjaSLk9hgjLBAM2Qnh9K7KAYB1A1OeOQxFS2IbSBaveAh5nr~S0r7fU4rPoyAHSCy31jrrgtE5L9FW~IZQuvyHIrokS0TkwO-5pR3uaNBTuYnOkcaInhlYonL2~b21wUh1ucP~LSUtc4auoTu3yCLLf4aiw4cpcaU7GlmOZ5Wha-Z2ltBFzXeBO1mVD9OuANB~Dbj7MQ9jx0B83xZcQ8PxSVOoXhmIyOp8L9zJ0dlJhvzdrSJf17~ww5ZNNMOA__",
  },
];
// 핫프로젝트 빅카드
export const DUMMY_HOT_PROJECTS: IProject[] = [
  {
    id: 1,
    title: "글로벌 음악 투표 플랫폼",
    description:
      "안녕하세요! 오리지널 곡이 아닌 커버곡이 너무 좋았던 경험이 있나요? 이 가수가 이 노래를 커버를 해줬으면 좋겠다 했던 적이 있으신가요? “이 가수가 이 노래 커버한 걸 들어보고 싶다 정말 잘 어울릴 것 같은데” 하면서요.",
    category: "UI/UX디자인, 웹프론트엔드",
    views: 7132,
    likes: 5512,
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
      "안녕하세요 3년차 서버 개발자입니다. 개발자 면접 도우미 (Developer Interview Assistant) 앱을 만드는 데 함께해주실 분들을 모집합니다. 1. 현재 있는 면접 준비 앱들은 대부분 일반적인 질문으로 구성되어있고, 기술 면접에 대한 질문이 거의 없습니다.",
    category: "Mobile App Development",
    // description: "",
    views: 6512,
    likes: 3512,
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
      "안녕하세요. 팀 플로니입니다. 플로니는 2023년 12월 1일 iOS 어플리케이션을 런칭했으며, 앞으로 저희와 함께할 AOS 개발자, SNS 운영 마케터 팀원을 찾고 있습니다.",
    category: "그래픽디자인, Android, 웹",
    views: 4135,
    likes: 3252,
    deadline: "2024-01-16",
    nowPeopleCnt: 0,
    maxPeopleCnt: 1,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/41bb/81d1/cabdf5f4ca8206855d4bcd8a375afcce?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G-Qsx5Lcnbo2WvBMti4RCNwkkXWXo-Z9F-5f8fkkhrwjZ~gfL8r6L607H6zgJvCA8VW7y9kiCjIFgWSaiGKLnCKl~mZY9sF8XKUhu3eGZSWIva~T6Z9aL1MIlmimnrEvja6JXh3GULySNwnW53ghast92b-Gb2pE5apM8rvXdb6lIu4AEitdneTjfl4L8c6R~id~GTzn7oyYgRz9su6Py8C3U1q9zJIVSCQiGngzwmRwYt5lnG3nRpNOk82u4kUgdbbAhpBj~Qvy3HNiqJfVIqK-VGn~1p1ygCPf-Mn5JhFgUj1dsXJ80dLyscFQB22wqCYjh3iqYU86ZHaSUbdGSA__",
  },
  {
    id: 4,
    title: "울고 웃고 화내는 AI 영어 스피킹 앱",
    description:
      "시중에 나와있는 영어스피킹앱들이 너무 비싸서, 싼 값에 하고 싶어서 서비스를 만들었습니다. https://www.emotion-chat.com/.",
    category: "Android, IOS, UI/UX 디자인",
    views: 2315,
    likes: 2179,
    deadline: "2024-03-09",
    nowPeopleCnt: 2,
    maxPeopleCnt: 4,
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/b7c2/cfd4/8789869a435e028578f8a110ad48d308?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kAHXIsMf2F5uzQIWX6DZ5NbKXe4g3WBSGMHwhYm934KZY7LhW5tZmqz-5RAJTGQDo~O0LUUNB9iTdgOjGvQgP-hOzoZChEanVASeWAi2BZdaHRYCkrniKiKKrQnY9kMkmxUy4JnfkTP66dlVp0jTh1u8XRhHcb2VsUZTLjqMKh4e0kkYccU9ufWe2DxhdOr6QAUQCRcKLBaak2QaTaDWBQBR7~YacMttS3yjtIGd0Z8xOWEq5mGfIAhlz0hYGNltP721GIsRLUz0jNGq8W0FszlsBB1RTidBP7vxjgW5kxwgt1-uuMfCZPVOrbJUL3Rkx-090uge2RdQSJ3YjU7KVg__",
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
