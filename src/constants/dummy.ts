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
    career: "시니어 (9년~)",
    id: 5,
    introduction:
      "당신이 하는 그 고민, 제가 미리 다 해봤습니다. 저는 필드에서 다양한 경험을 쌓아왔으며, 혁신적이고 창의적인 디자인 솔루션을 제공...",
    isMentor: true,
    name: "이민지",
    occupation: "3D 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/8b99/1df5/eaea56b2707dd3f34cf2d1186569f084?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R2L9GzGhVO5f4BvgrqnmyUugQM29P72Ps~NK299peUfXOG15g31ePfW0yATZoos28mlrGxXKhwkcCbIi7wUtpPWg47GA9u8gV6S8rwcUVxZBDIewtKSeaDw59fq-JAzFKMIqLjvWgWCdw2Rs42zDhRmzm5MjC3yI9Mkak6renfzhc5AjPjBCBRHD52irAU5lewKlGk9Z0xdUWNmZq1ajd~ewh-TJIC3kMVT~q9g3kcUlM2lZLe8fdVIDzFZiDCXIbXGT06pmHBVJJ1XE1AnVFDo6S6BS2nEaxnR-pmsTBrgue2uKaiPag2om5iPLpPSJPHcpfR-oJ3KRo~NnGs8F5Q__",
    rating: 5.0,
  },
  {
    career: "시니어 (9년~)",
    id: 6,
    introduction:
      "지금 이 기업이 아니더라도 두고 두고 도움이 되는 resume 작성 전략을 디테일하게 짚어봐요.",
    isMentor: true,
    name: "김기영",
    occupation: "일러스트레이터",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/3300/fa79/64eefc6939882a246c23d096fa3d2547?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UVR4CxKA9fHemUmJm9Eim8iYyFTCELK~74OeBl2ykTsDB1zEMBBywH4EWlCC6kuJzCXvuga6eKthn-0MD5Od4WiIVEUCXdUDIcE4h7VHdu8ziPQasGZuQ4daqIvNEA9LnkLLqxtkqAGvSXeWU7RvOchdxML1AqWl1LqeoA075swi-YN3icm18uNqjFHGJ9ShdpdovG3ZQqc6Nkuf8AOBRXOPbD0yyGBXjEBqWL~YznqGP~FXjkbz168en36z8-pPKViacTS4kojG-tpIiaiMjlhijnuaob7T54So~wWFVgjgengpuleE4TuAMcIYme-sizn0hODWjVPV90qHA8TE3A__",
    rating: 4.8,
  },
  {
    career: "시니어 (9년~)",
    id: 7,
    introduction:
      "모든 고민하는 사람들과의 대화를 좋아합니다. 같이 한번 해결해나가봐요.",
    isMentor: true,
    name: "최상엽",
    occupation: "UX 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/68c1/66e6/471757ddab2f4c773b8ceebc10068144?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kir60T3VBUEViWLQOllKdbP~7LieoCModNod1r81Nub~7FWHiz03udk0OmIpOTPm9Ek3E2Q8EqtyY9xITdSTMo8ezIClihy7bi8p6IgU4AV6II9eiz6kwudVHckpvLseeUAo39ZErYGSX5ZqXfdlGpp-ACAEf3qmna1ar2va3ZnulekKYSwiF58rQVTavxQfsrTWDzplo3O7YjNX8XroaNXXOJhSbyIxDrAjVDHfUqpsIvwNDT-H20QNvKfDEfpKWEXmmx63td-jj00Abxn-9LatyKry56ibfkgjaux3EzraSTvjh1xf-6tqBFYlAPsSRPfO94NbpqBSUEbXKSNpDw__",
    rating: 4.6,
  },
  {
    career: "미들 (4-6년)",
    id: 8,
    introduction:
      "무경력 진입은 어떻게 외국계를 뚫었을까? 그 비결을 알고 싶으신 분들은 저를 찾아주세요!",
    isMentor: true,
    name: "NIBU",
    occupation: "패키지 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/fcd4/c630/28917cce6d9bba0171566641a4977a7e?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g9evkRc82~o9SsAwOUwppgGK1gE57OAYQWhR5BV-kZwbuTpdQSFWQBNSgC2Rj7zl9rKM23RfMEoAtvjkYiZQLPrs02cBdxFGCIAPb~Z-WLeU1yaDeW9OxYfGU1VqyRx~vUWZiBAu0SXjvMFxCchVt8-ZYJxe8dSd5G1U5OtqIE~hhIX4RnNPyuIebJJ9c2vAEjKbT~6XbZKtNS7KJBMTvTslcXCmKEqrtGNMmYwhEa5inzGxKb8H2d~mJS5rCqd663PvynMgLoItjOycnX7EuWHjRgEbTXAE~1c-AlQlSPgPt3pocpuhjvDTctr8CAbuGMqXwedlbku1HjlIxS~NWw__",
    rating: 4.5,
  },
];

export const DUMMY_MENTEES: IMember[] = [
  {
    id: 1,
    name: "황현수",
    introduction:
      "안녕하세요, 영상 디자이너에서 UX디자이너로 전향 준비중입니다. 창의적인 시각 디자인 경험을 기반으로 사용자 경험을 개선하고, 혁신적",
    isMentor: false,
    occupation: "UX 디자이너",
    career: "주니어 (1-3년)",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/b70c/8d52/8f2ec318fdba633e33ecb53fb72ea5ab?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c~6WkE5fWhii3h2ffjvyLbH7b70EWc9BSktBfXhBwDWoCNpUOdMsX~M9cqwLHKCmHlRN8EMaIDVlP74LYSAU~0cV8FJr8XeuMFR5KnpDCm0pxxfhyp1cm4GNB8Jpa3Djk92NCXoe~aXUJCPVndPKcwSWhLG4HiM1kChPfmq9g~t~oq5QULZUefHzjzfzI5VppZflylzpK9hZaaBuxJATNMHuxUdUemxL5RStNReKOHL-A8Ft9FIm1TTfqEr8LP82emMiu95Lr6QFS~bxz0hstyix73bfyfQiI8bIqPkABodnlcHNpdE7BbjgQ9W0362Zq3xoF30EzN~HIKN4sLUGEg__",
    rating: 4.8,
  },
  {
    career: "미들 (4-8년)",
    id: 2,
    introduction:
      "포토샵, 일러스트, xd 등 디자인툴 능숙하게 다루며 html/css/js를 통해 웹사이트를 시각적으로 구현할 수 있고 코드는 콩부를 계속하고 있는 단계입니다.",
    isMentor: false,
    name: "OSAFE",
    occupation: "웹 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/8854/862d/4fee974f902abf28e3680f900a46d987?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UPsMx7WuCIUwfnQm9AvkjqNB2b9iFX5jnUvkVc~l8sEM-H2lwI4C-P8sNfB7yHvKx~DBIeR9ASPUmTwmDgcJzHzezGE6~BW1gOAgVa-ur6-HXZ~A-A7plNrRPFHGxMqeglhlvtR9bE1yq8t5ucNmyaoKbsiUcYemiTF0Gs~suHskHz3~b~4xIvAlYrIHhe2l4Y1v7Bjrt49kaw08IrtIAdinOaiAp-y748OBShlS07IQj~y9WXfNvx3yOx~4Yw8WAlYlI7uvlNVorKRRdG-V3PDQ23~S1jz3pby6jfP~uli0NrC0aG~-pvuw-qkxjfhqMqpAJxRO0GgUI7byx3sn~g__",
    rating: 4.6,
  },
  {
    career: "주니어 (1-3년)",
    id: 3,
    introduction:
      "퇴근 이후 시간이나 주말을 이용하여 재미있는 프로젝트를 진행하고 싶습니다 :)! 같이 만들어가요!",
    isMentor: false,
    name: "한승연",
    occupation: "광고 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/734a/dba7/8bd904b3f4cd6eaae9a04db3126dbd57?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JK5sQCEGlFFGEPOVuJCayTaIe5-Qd0RI5cx6kbFOShwZ28Z3H-LBGodNDg-UflN~QFbDaRoVBOr5-FIn-vDDSeA6cCVLXj~Hg0wz0KEKxpPhFlYlJsZsvnA1ZYudK~~BzQBRUruxqOQursgTIJNHlcu-Vw8ruy77Ryp9GLDujbzPDgqXajCaOPWeJKj~BrGknk9FoKewWRYxFJ3ppvGzihSdW1DNPBbEHDLkGj2FfQmbyMqcGZUF54t2HEBcW8~sf2ETQxxoR-9zPjxrimOCwPhvFc~plC2cbauld8GL~vC2b2VbFcXGhyMiPBqDwPrzcAToC6lUJQ44B-8JUGEr6g__",
    rating: 4.3,
  },
  {
    career: "주니어 (1-3년)",
    id: 4,
    introduction:
      " 다양한 분야의 다양한 문제들을 해결하는 것을 목표로 하고 있습니다. UX디자이너로써 UX 측면에서 팀활동에 큰 도움을 줄 수 있습니다!",
    isMentor: false,
    name: "유안트",
    occupation: "UX 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/fdfc/0601/bacb407826e7fa2f47dd2599999453c5?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TAfgfIUT5cid4sk-WzPCq87DSerhC3XahX3C2b5FvHVCTIC9qG4RIJo3ztvNDGqyrMTaGH4Q6gzeaUwXxvPtD73zuhsslLJ51H0j5f1hiX5sDTYFDj66-dq7FmLn85wuN1MEE5icZVWX5Gt~eWyRXdKubg0L1OGzm0kO0QpP~sXvb8nN2Dl30RvaTgYT0WXFVABBubxrgAMA2YKU9Qc9uIT~HDugbfvnHMiJfKSJGPkxKgTt2DXNE1dHKVaIPFGkv1rSErvBOKHv9Qkg9ad5qLte~W3HnKbkMFs-SBGLBVYhqUukqdoaXBntvvi9XSQGG2-lswrkCs31YBv8cK89dw__",
    rating: 4.2,
  },
];

export const DUMMY_ALLMEMEBER: IMember[] = [
  {
    career: "시니어 (9년~)",
    id: 1,
    introduction:
      "모든 고민하는 사람들과의 대화를 좋아합니다. 같이 한번 해결해나가봐요.",
    isMentor: true,
    name: "한서영",
    occupation: "UX 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/a105/51a7/bcf25227da1d3cc1ecd682f0ee4112f3?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IY21FUrKHdlm6tgQ2B~ANFk~doxaamCHeqExuEnu6v7lShO8kiWPW79whFAI3Ou5nfThBCLYZgkiCmNjqrUxivtPkHXKYsS7rfTVmP7BB2QTmMNx7Nsm0hdKJbalW7oIttuUYzanyso8dTafdoLCTFHBbo51S1GMay8SntVQWiCRQRycuYI7iws7OtJf-VNnH0kZxhCLtWlWPHX4EIV8YE6Hs1i4M~qyl2YGdH0kmLEXLRZ0FklIrNbZOWVLss340feqwWeonzsM6M7qUcBz8oTbzfHFZhtbdmhdFVTYvBMJ-pdxmi-pg8C8zPvFMHw4HkpJjGOCh5qy6Kv0J2J26A__",
    rating: 4.6,
  },
  {
    career: "시니어 (9년~)",
    id: 2,
    introduction: "이직 고민, 레쥬메 완성까지 함께 고민해봐요!",
    isMentor: true,
    name: "김지연",
    occupation: "웹 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/d04b/7933/679f5b3f69ebcdf165e59da5f8ef195b?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RWYEgwVH-RfEAK3EoFhNuwyeL8hDnveHAgu2IjZam2KVTIjsMqdbUAN2noSYHH1VHKjbtbmgjtFn-0ijcdndgwCDdf265TK0R8wU0-w5rDwOQJTW5Eb-N6TjIGhJiK4nPH9dfxvhA~I801KN7mcsvWtWiLRMZvM74c4fL3-M2rdY38PDh0XUCmg0paPrTX~RzAbVOKOLT5ZOJ~XGIIj9KKfj158hVe16rGTnfdL7Ov8wQFEdEzBtxwE1RZ30Njn0cPGU44ImQKFXvToc67HO5DwmCYwe41t8EDfEc3psZvE9ZCDwIvjw4jNYVs4pIBm0jvvhO~SX5-xrVlrW8WRQHg__",
    rating: 4.4,
  },
  {
    career: "미들 (4-8년)",
    id: 3,
    introduction: "나를 돋보일 수 있는 포트폴리오 스토리텔링 전략",
    isMentor: true,
    name: "Ethan",
    occupation: "UX 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/30cb/570d/642f16a923eaed7c04e5db14388e9974?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y8~yC3jNKGazi32vZA2VyTl3rMpcKwjiyYraMGslyyH~K6f6kKnuEDKeq8iVL9OO3DKi-tf9QkcZVb9ivHPHyBLsXtdmy2njOjhdvNtOzb6J5ATOUp9HVccnk7BNIX0FiTk5PSIFTecLcNTGiNWg1UQT3gCdVai-VHqQlWSGw0XpRvhImPDtlniEYDq08fsiOS35F~vFkqASzpDdazIWne6IUeYKXbUs3M1F4kzK1NGRZAZT~n1qJXLERK5tQOodD3gnVGYV7cqtFeX8YHmzh-Pw2RdwBJJWouX0v1fl7AgYuA8toqG73jXuD6iBUP9dc47Y6~5IwFuObAzNuxrS~Q__",
    rating: 3.4,
  },
  {
    career: "시니어 (9년~)",
    id: 4,
    introduction:
      "지금 이 기업이 아니더라도 두고 두고 도움이 되는 resume 작성 전략을 디테일하게 짚어봐요.",
    isMentor: true,
    name: "김기영",
    occupation: "일러스트레이터",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/3300/fa79/64eefc6939882a246c23d096fa3d2547?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UVR4CxKA9fHemUmJm9Eim8iYyFTCELK~74OeBl2ykTsDB1zEMBBywH4EWlCC6kuJzCXvuga6eKthn-0MD5Od4WiIVEUCXdUDIcE4h7VHdu8ziPQasGZuQ4daqIvNEA9LnkLLqxtkqAGvSXeWU7RvOchdxML1AqWl1LqeoA075swi-YN3icm18uNqjFHGJ9ShdpdovG3ZQqc6Nkuf8AOBRXOPbD0yyGBXjEBqWL~YznqGP~FXjkbz168en36z8-pPKViacTS4kojG-tpIiaiMjlhijnuaob7T54So~wWFVgjgengpuleE4TuAMcIYme-sizn0hODWjVPV90qHA8TE3A__",
    rating: 4.8,
  },
  {
    career: "시니어 (9년~)",
    id: 5,
    introduction: "대기업 신입취업 및 경력 이직 컨설팅 전문가",
    isMentor: true,
    name: "엔솔",
    occupation: "산업 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/0f29/2f79/bbffccdb58f8a9c88582f787d0ac0f71?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K4kVqHph1XudSOovqCj8DNpha88mASAdtkryqCwsubV5Mbml1EiZxugzHfrLZnKdXm-It2JVOjaYkX~qOJk-gZioRSgNt0vEMkLI1Z4yLOQDjPpRh4uYMj~xRfflrq6ISOcziqkHEaiagAnyuBRjFRMez-GK-ElIT4rmoEKiMqpshFGdrBT35SM5Oa~dT9gc~0VBZ-u8qWH3o9zwSTSL0k9Br-kRchs7jK7ROeE0pVO-eB87rdaQt1z2b4UbY0hXhmXaCbLTQylu1efMHXCWpZRKn5cMQ~2vQsnGuX3CmVBtwRQHOPUDWZaMGRTw2mZqEF8VEDovIEazsbK2j0U3mA__",
    rating: 3.5,
  },
  {
    career: "미들 (4-6년)",
    id: 6,
    introduction:
      "무경력 진입은 어떻게 외국계를 뚫었을까? 그 비결을 알고 싶으신 분들은 저를 찾아주세요!",
    isMentor: true,
    name: "NIBU",
    occupation: "패키지 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/fcd4/c630/28917cce6d9bba0171566641a4977a7e?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g9evkRc82~o9SsAwOUwppgGK1gE57OAYQWhR5BV-kZwbuTpdQSFWQBNSgC2Rj7zl9rKM23RfMEoAtvjkYiZQLPrs02cBdxFGCIAPb~Z-WLeU1yaDeW9OxYfGU1VqyRx~vUWZiBAu0SXjvMFxCchVt8-ZYJxe8dSd5G1U5OtqIE~hhIX4RnNPyuIebJJ9c2vAEjKbT~6XbZKtNS7KJBMTvTslcXCmKEqrtGNMmYwhEa5inzGxKb8H2d~mJS5rCqd663PvynMgLoItjOycnX7EuWHjRgEbTXAE~1c-AlQlSPgPt3pocpuhjvDTctr8CAbuGMqXwedlbku1HjlIxS~NWw__",
    rating: 4.5,
  },
  {
    career: "시니어 (9+년)",
    id: 7,
    introduction: "비전공자의 성공일기를 나눠요!",
    isMentor: true,
    name: "정지수",
    occupation: "패키지 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/c008/b224/9fdc8ae0e131ff0ac5cebc6f0f1e9af7?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IWB1We1ukK~TJV3hFn2d4aLU-ndXCxKVcbrDX6svnWPUwjEmafCoDLtiwzJ~nc-~NrUrtqhOtiZ4XvHgBbTnqKKtVUnba~9LHjkVXIgLNNZwotDNeV~tWS9jVGiJ6GWjhkpFN12wfLadEaxIwr5eYsaMZEKc1M5tr1FhF~hyE4GwSUGtF8jqLdJq19veXRA4s3ClQafQRPOJVwqChy7VA74bdwdfxwbIK3nDt-b9g36QtPRTCSq~AEYO1qCRuqE~yBZ-OKDtW2Mo2TdguVt4oJ9tBQxX6BqgFqVTWIfxZPucBGNhZxE6kEXbXYI6quzj36UMbfrNWnXzi74ISbgEYQ__",
    rating: 4.8,
  },
  {
    career: "미들 (4-8년)",
    id: 8,
    introduction:
      "감성을 가득 담아 이국적인 색감과 패턴으로 디자인하는 디자이너입니다.",
    isMentor: true,
    name: "J-EIGHT",
    occupation: "산업 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/7cea/287e/8d738e090371dd88e59a5452657f180a?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KTfKMsThS4x75JW6~NgjQ7PYPevbBDQNdlxaPGmxS3HKIB4RAdAyzxfPoAFc5WVr~1Vz5w2UHOLDUOK6ZYiasiDU8x6XMUNEYjpgO~Kq6gxnOkOef6jOIPXWs0unVECdxkC9GAORWIBjHPJgGAdTA34c7HXtiydmbiX00DzjTn87vD6Hu257LpCG6CmXXBY04Y9QSoJZesWDFRdLaUb6~wdvkooEOwvTsq7X6t89RiPnrGX-g3A5Rdt~jvmEMyh2~Y0zHKBbCPgwr7UZv7OmNna2H3zxRkx6nYRLG3bBBdpKZA31XrsW9wgacbOyhE810xFukrBwRB6dnuYkusH9rw__",
    rating: 4.0,
  },
  {
    career: "미들 (4-8년)",
    id: 9,
    introduction: "실무면접관의 시각을 가감없이 나누는 시간",
    isMentor: true,
    name: "새봄",
    occupation: "출판,편집 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/bced/3751/47812a1d1b5f08b80d810354a4d0ef29?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lsiv9g~ygFkuusaRjjEklc9dOQim-QtEzp-FyYFyXTEQ9NQij2JUl1mDo31qscAv6vwJQnwkqlCeEM6h1WWCInpipKMcSeNP7TbLVWhX3-PgkErlU5x5pHzuOk4pTUvGCFk9MFAffbJdnglsYjxulfeshrnQDpQMSW1sHko-lLbMJ~ocR9kPDSfaDOlmLGo8xJqtzZVOIkDySD1FpwLy~FnP~nhVmJJRq4hU8Owi-ZHyZhVNHZ~iAjWiJWO-znskqwweUQGN3S0GeJr9n6Ujmq5R93-Zct-iOZUzesZiTx7E-UOoctr6IQFL9QmiUwkN2VpWEDr1tgeHhtfmn4xRjQ__",
    rating: 3.3,
  },
  {
    career: "시니어 (9년~)",
    id: 10,
    introduction: "전공/비전공 모두 할 수 있습니다!",
    isMentor: true,
    name: "idreamer",
    occupation: "영상,모션 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/8a31/0ca1/edfc4bf404919f5cf95fbd79be71f714?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ppsQ9h2KO7Y5ZIE3z72fA3Sni8GNI1howchpYJdQ3YkVma1vpKLIzT0bMSxMvvkB~7G3NZHbVPaw3raaSaBpl16VTGMHgxY1mlcgSJHc1cAtySynbG6P8FkQHMgl1Y8XGsBqH-iYHPjO-PkJX3W19t~x3yitlX9dYjmgy-4TPuE6phSQGrHWHQZrhNN4QrNZ~eaB6s2CAhQo0sSxu6rBmgTtn9Fu-sZ3B8ZliAdDcUCWe0lxv~4E5QImQLUa4bcxvexXSfrMFu-nVIqC6uWPEWMkhEulTFQIqs0BAl8U7QNxBqc3SE2P0vQOyPrFG8At~8~ILRqPmFR9dVwhSt-0vA__",
    rating: 3.7,
  },
  {
    career: "시니어 (9년~)",
    id: 11,
    introduction: "정답은 없어도 붙는 방법은 있어요!",
    isMentor: true,
    name: "스카피",
    occupation: "그래픽 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/2cf6/2564/aec615b9901eb33eaefe1986f90520c5?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VsvCi3XXQBskAI8nxEtyurqkwM3F3nXpooVgRfurpz2v6emhlOgXcEDkMKKDWF7euGq-AY7d63k9hEI4sWX0KvFZ9MvymiaIuTYvDuW6C-uKrfBnVyKjLP7THSwuFptkyJYsoJVnNMx-Vo6n5Ht94ZWZqJBlTvXNDv8M1Yf4Kc-yhxjZJU0HmJXA7YCeSHSaabkWm3sQ7Rug0rdZTV135X8AypYw~JMhP6hc3KTmw2WNMdGXMW30oc6ojrENMt10znxoY3MibSmy~9yOda4Z0RYcKcc9ngQ4kmQWqz4Uvgfaf5TOyNfsVqQm9L0lF~5yUIzVlrSsfZp3PnEWGDMSUw__",
    rating: 4.0,
  },
  {
    career: "미들 (4-8년)",
    id: 12,
    introduction: "어떻게 무엇을 얼마나 준비해야할지 모를 때, 챗 주세요!",
    isMentor: true,
    name: "우펠",
    occupation: "모바일 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/4fcc/f5ea/cbabd25a84dc34bda02f64919f73e4fe?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mh56EnzF-y-c5URHXKZhK5hqxf~zYYtFAjnGJoAt~VTsfEB8foTHoep57Cm9noQb-EznV72UjgemtMk8Pn6bd7xRrW~GsdGcJW-5KQUxwkdkXSYil4dfWzda924Iqp6vFPWexhXZzhbIGOEnyKW4I-JTwW1x5qVErDyFDIJ1yrsVmVmILKFALg4fbbOdG88d3bZhACpgkr5VwXKOcOlsSikNx~yLhYkDHigxdEy9hxr4q4TJ6~PFUV4I1hF6W9UaUWbQKqEFiG4xhlp6CU2IVdJ~J6Itz-UwW76EWraDuc1ynDpGH9pcWJzHouX9vRR0gyoZfVReVx429PvYe9AnJA__",
    rating: 3.9,
  },
  {
    career: "미들 (4-8년)",
    id: 13,
    introduction: "미리 고민하고 검증된 내용만 전달합니다.",
    isMentor: true,
    name: "Liam Lee",
    occupation: "UX 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/0c69/36a1/dfd008a097ec186a5cb0f881602ee905?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VFgWbHWMPO8rBrEReBrF6lVxULX5lxPcziPmOSgvMt7vi023MjVAwUp6ncTcXGafrBTbD24p1fv3Qbs17W0DCPaED5Prqjj2Z9LS6AONcrM0mFzxyqwvvYLWeDUODXubfPSXvPoiwut8r6hN0Q5L1QxByYim-RO1Ygc6CwwqHiFN1aUnp38PwxN0QTu28mGSb7MX1DuRZdI4BEg2iKYHdT9243tRQ3i9RuBqvmH3MPJvHuEueOkyBlkbPYfu6z~6fcS9Y-QiwqjKjc68KyDfeh8K6VKpkPqxAyVlQJvoZ0CypZ098MVlKA6F25TR2umPF0zArPuPY~HQVqaNMY1Iyg__",
    rating: 4.7,
  },
  {
    career: "시니어 (9년~)",
    id: 14,
    introduction: "짧지만 알맹이가 있는 시간",
    isMentor: true,
    name: "최지현",
    occupation: "UX 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/3930/cf53/6c09c7828bbf9ae09f48054bb9f8aa29?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EXnvYgne2zgiMRPVez27OtMgk80xzMH~Q3Gmi5mlKWd7Y0wMJ3CsoK7bhky0T1MZbodp0dQKEeKZVm~7OIi0IA6OUGiB--5VhuYY2469BnIbMJ2I1PRxQX5pWLRSF~bZqLQiwb839X-Exj7Jg6YhwTagI~G-p00pKE2zUIXkaU97Ft-FwRufPp1Hk~wH3dXQlPNoG8QMuAzKyMdl8-BmbMMC~fNNIw891~3U8bQCg4PTcAAXzWfDnjii38gy4h362pNyRBPFpgLLK0UQBq6p99JExbR0S7SUDt99pSWgDb6pihGW86HYiJRq~c1skPt6eB-cl1FJ0xDlR7W0nCCesA__",
    rating: 4.2,
  },
  {
    career: "시니어 (9년~)",
    id: 15,
    introduction: "“나라면 어떻게 할까” 진지하게 고민합니다.",
    isMentor: true,
    name: "정지훈",
    occupation: "광고 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/da4c/efbc/7b9c6078032bdd52632e25319a93ace5?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g2LdH~FZFdBIeUybQ8SWME1~DsdRkjTHQvjvr9nmTzPf-POHzkXVoc0Y4iG-E~5XNNMoNytRYz6lRlC1rSisPbR8~hIpr7CHWUIJ89ceOh3NqAu7zHtEeUVjFaepkZoA-fdQscz7Xdzu-~VcxJsu80Y4D-yrZ-yqLXVlY8BkjgHwoBNqddC54OX54FdDOclswRIkaODFHOjz0UWQpIz978iyy-kiCVwo89ZRhuKuYai8btGUxn6kaNSKTqWTNBRr56UxNgbresyh-e0nbP5QxsJY~7Fk7CrJc0UJIaRm~aJ5Q5GeJo9v4mACV418xgfLe-lZZbRX46vcwd-iqM9-Nw__",
    rating: 2.9,
  },
  {
    career: "미들 (4-8년)",
    id: 16,
    introduction: "연락을 주신 모든 분들이 원하는 바를 이룰 수 있도록",
    isMentor: true,
    name: "이아현",
    occupation: "광고 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/0efb/2d39/e6a3257e67522a10a2683276ba65c8c0?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WZYkEAFAkmErnBHNGZ0~UYfBNU9OCGFGAMcmhWhZZtL8LPwN-owPmsu212CfUj2HB5Lc60kleXhjJvYFJqnVDLkP-v49lmAFpCcUX-dPo8xmHhpbjjpSQXgv9O-OfaT2pSNskAQC-xSX78UUBW0NucDT8~IoUzlQZvKOxEeNJ1Uhji6hnvyZLKHKtYmllmWDLphk2DqejvpknecsyZFi4eViGu6rSXkpCa3eIxQBKbdQT5sClmEaSC93IURw3myDAXh9OXMqT4RCsW4oY2cARwJjuJFImHCZ8GAJGdyr~1Mt~IN9uooB-QaOsFApMePrL3KuzmYLENQi29gYbcEXrg__",
    rating: 4.5,
  },
  {
    career: "시니어 (9년~)",
    id: 17,
    introduction: "양질의 커피챗 경험을 찾고 계신다면? 지금 신청해보세요!",
    isMentor: true,
    name: "이상훈",
    occupation: "그래픽 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/3704/9c2b/40e2dfbc68508b4f1d22aedbe6b33c32?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EQZnKgKmh6PvzuWZsKavOooqOD6ZolM1UspK9ynyXykvP9PhHJwS6kc7XZyRtNr63gOLRqGepmoy6sy9qu2yPnMvaHqb9PuB0nF~AhZdehukBl82bzzaVWLXG0aHCrUnu0DG1DpYGnPHdre1Y~9Si5u-RaUXVKP-cwu5cDClamBV-vd5sE4y3D9jJXVzbSwCr1VLRMF1JmHqq5pK3xqlNhDRpaLdZd3uq4~dvmjsh32q8XEmC3VasnlnBePBeqMk-glAmCa~bBru3r9QelHD4X0P1nByhOzaphlIwDqrCQDGPGBZiAw4W1gnw1e8nkJVqTNETv60fPiyilw-f6e03w__",
    rating: 4.8,
  },
  {
    career: "시니어 (9년~)",
    id: 18,
    introduction: "취준생/이직희망자의 입장에서 생각하고 답변합니다.",
    isMentor: true,
    name: "카지",
    occupation: "UX 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/8517/93e1/1180b37765997225cc4ab1309e6f3a15?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eHmhrczdfl3TQdtyGH4jPAFKYXkL0NxuVRgp1nUWsO6gWSdo25vM8EVcozglDkZfmKnwvFPRqdmppi7txp-bJe0YkrsiOPVPhXFaNSxFcZ-HcV7UosLe9CWz19woz-DVhvO3S07TYpwH2fSV7svfaeffKB7n-eJXB8J~PtOdVev5pzczsFhMNtdanl421dEP2KXaW0km2NC56AQbu3fafQawznh-p0oNkEJwbq30hT2AH8oEAnE02teTptJczM1aupV8-aeKqOHbl0HpSo7rxoE0eliW5dGNTRoWfuneMGk-ZokEGoLVJol46Vkt3PV6Y5-~xkGbpZP-hCYZS6895A__",
    rating: 4.5,
  },
  {
    career: "미들 (4-8년)",
    id: 19,
    introduction: "직장 생활과 커리어 고민에 대해 커피챗 어떠세요?",
    isMentor: true,
    name: "Sandy",
    occupation: "UX 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/f766/bd88/e2b5f61e02c5bf7a41d1349e528a108d?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=odQG9UWcxSGAqmO8eILjm02jKryg3tqaTKgvcXJVVlzW3gSsbxVPgI7XhardVH3Ro3BMFCgc0fALVQxTpxJ8ZtaCQhy0gBozBu6qj9mzblPXUInECALqZNEAEztXuLag4ocKd82jAxUonSRV31wlBC1VS0eYd7KnqBAheF00KGWXUKVIYBjQ75m~y3II8gVzs5RWxmdYkMMQmrTgQ-SkFQQMIT1-LQ9yHbt4EdYEKAuECB0yv4ghFi4k~nYTaOkCEVRbL-D~Ig6mY57eAtz7fB~416K-io2KuCTsHrX~Y0gg2uBF6rCXvPkv6K0jZtgS8FuGXT6O~WLNvoUe4Nmkag__",
    rating: 3.4,
  },
  {
    career: "미들 (4-8년)",
    id: 20,
    introduction: "해외취업 꿀팁 받아가세요!",
    isMentor: true,
    name: "노하",
    occupation: "UX 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/2573/3919/e9dafafbd688b896891f44a4bfac9c89?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Etx3rQQ1QTK~Q-PvJrPElcXADJgHFQREODAXNzzUJ2CBWiaSoS09WhJJHWsKEQ79jhKfH4ZwgKrb1Frap3qYLKWF-LIodsmVzqHGxhkXsF70UdolysJYlc~EjpLJhEtioH21f6ozxuw6fVXwq34XnWbdF-HiVomLgwSqyq~Vz1MX7z4OzrQ-Zpno~9U2IVsqM4OK~yVrRxoOztSwkqoWGXKeRzqwtl4DPUgWhQunTSfOVXanbt9kMua8zoM-gfYbEDRsH2Cb5MMvJRG-ttC5LBiuLXqG2GKqKAuo-Fh1oNq4HWzoFVbmLM7agCEw0a0STYMUGTiRzg5o7GsosErBLQ__",
    rating: 4.0,
  },
  {
    career: "시니어 (9년~)",
    id: 21,
    introduction: "Why? What? How? 질문에 답 할 수 있으면 됩니다!",
    isMentor: true,
    name: "찰스",
    occupation: "VMD",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/a626/8c35/48817a3d5415aee2c79f092a7db6a1f0?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WGVcQQ25XJ8fG9~ltg~SLBNgVPwJCOrtufsUlU-kM6S3kZfGLUQoumQLl0OLwwNyK048nL3uD4zdLzqT08X2bDWQnUkDERH3LDs0Oo9Mt73pVFd1UKdFFVegJhFtRdD9uo~YrmFURUF~maIlasJY-Yy8zUx41RZGo2XnmimKLe3W0Gu81F21~cAIjPeB6Xv~iNZMYU0jyYnvhUrjOxK4Car4yPCoAahyTlofHtHZSooihzx6Z-Ijwq9ofbzDNAdfEofFSud5Sct~JEPq0MCzkkszfIC1VRxAm9WI8~OK2UCixe1GMD36Py-U3hgZKbgHjvkI1fXTmlKCvJQ~dUN5kQ__",
    rating: 4.0,
  },
  {
    career: "미들 (4-8년)",
    id: 22,
    introduction: "학벌 스펙 필요없는 취업/이직 비법을 알려드려요!",
    isMentor: true,
    name: "주혜성",
    occupation: "아트 디렉터",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/df47/119c/bc0db6d504c8c112790acdfb784f2225?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DLbKwU~qptyYtKwezK5g2lnz3nEkAtkeM76rpDUqrCNoQhKUkRi4hKVvgh1IRARuz6iGjrr7za0lryDR2cMFUOitx33s9MARSuFN7Pnq9-TZjfLTYqVVfF7A5jd5Cn0scwCAVFNQbFS2~01zrkyVQRyy4tkM059bETgkP4OmrdgEHyNcNaGRA60rTCZ8VsPgxdR0ObPY5J23QCVKQY0yG9nn~YLLFKhUrPMBBPYiN3Y-3NMhoShWKORbKXhtSqvMMToK-fhQo~BKbyrwEgTPMEWMyZKAUprWOp7jVSrouj6XWBhMgucGms34vVfC4aNW7wrwzlX-dWm4geiuBVKIEQ__",
    rating: 4.5,
  },
  {
    career: "미들 (4-8년)",
    id: 23,
    introduction: "적극적으로 소거하고 남은 것에 집중해요!",
    isMentor: true,
    name: "MIKI",
    occupation: "UX 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/1939/d50a/5b387ca45d7610ee09a871ee8c577907?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UL8LnbU2IAelf6kntCsHaw~MXg3m8nXZC2Ri0-aXV-SSEUOS812EcaQ9efmYZGzmARK9Kckm9dUohnn2q27SR80IInDqPYTBY~WGu2hZeLxF2s81weEXRrpysHM-LNA~AEBHn9wY3S3rgmCzpW~HUq4bWCCMMigr5u0LsFJ5Yil4kWHl2w~aMhm726buSqNxV9XLnDoNfbQTy3jG6a5H0E34Xz8jqhDh5~id6EOHLj76qq63kCVUQyPHYUKwpMxPWejQseoyQz28Bl4fLYdEqUxtWQptd0bnn-H1SdG5D4J0tYx7E8pgx71e0KYe9gQ9dIapU4RtrBprfI3xXqgV1Q__",
    rating: 3.4,
  },
  {
    career: "시니어 (9년~)",
    id: 24,
    introduction: "해외 취업, 외국계 기업에 대한 현실을 솔직하게!",
    isMentor: true,
    name: "김유라",
    occupation: "모바일 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/6810/b564/0482370d5ad0921e7b2a5951e95f9e89?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GkixbGq83oaULBzPh0DoIhcWMHOhTygkn5I5qVTNAkugyAnIPpV~8rX5AXG-oTuAT-CxYSmVe77jBnz4UAJkbQU1hobT84e7W4O3EBsSrTSIAdDgx2oMJN28JgCPFK9WcPWb9549LnT-F2JSXRPXv298iz4EVT1ZtjIwxelP0bmvRSqwOj2FwQOOhCT8txc82WO5oeh-jfNLmT3hFpPoLuzjm18Rsd-o36oN5O~L1fAE3CuRwsKksdHWvKMbdEyJdRcVXA5NbovE~D8HMYCUsMqprrKmUUWXQQwmOHH3a-7YS8bnFuOFoJDqKWe6Ys~OoCPa5L7icitI5EsyRUM74g__",
    rating: 4.6,
  },
  {
    career: "시니어 (9년~)",
    id: 25,
    introduction: "잘 읽히는 자소서/면접/포폴의 비결!",
    isMentor: true,
    name: "우은",
    occupation: "일러스트레이터",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/a822/a35c/d3e801e51bfed723fe9c0dc161b06f16?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PJYE9KtBZVBVmLVZAEflHj8cv17fmwGhPWOYR96Nxkgx02K36~tR3TuDxQNrR-uReUJjJK6bf1zFROqBLGA0t5-Q9-pb5j2Pexwip0vRevzWl0GCDyU5nnW0YaiGRgNed1vlitZ80SwhSKzeDrXWHcn5wBseIVBh7lFWhAc9Bmk0rx952vhaQJmESkF8PAgISnyW7iF6OQhBV-b49LpPEa~7K1R4OiGfoO9bz2lea9BCMBesm3wsoEl981a7QE1LOQdygCEObiHgf3DdEN2MDiJQapvfjvw1o6ML4pqt9W4DvHGtBPN0Y7he3gMf9Uhekf-H9cwLSeUnatQJwpjjxQ__",
    rating: 4.5,
  },
  {
    career: "시니어 (9년~)",
    id: 26,
    introduction: "1년만에 포폴 0에서 대기업 합격 포트폴리오를 만든 노하우!",
    isMentor: true,
    name: "안명현",
    occupation: "VMD",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/9e36/f8dc/c43ba7011a609d23ac94b9fb6d935dfb?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j9Pp9j72PweuZSeYUcRpgeCXHzvg4zYMRyB~xj6W54I-ZA~eq0QDVw7dVxDeBXCPDsZN9Y0ISTbvEDfMlT0dzPhSvz37baDxWiyEv5m6n0KGja02TSCz1DQHNqrwiW4MXuA5ANEvconZoBQ4SzpInXKYbsjRNsE79Vl-r9C8Pgw2rNAvLUQ6OtfUUXkMJPhdcNNGFW1zO3BgB0181J4IZXoPsN6OegCTMBoxIZNARnsyqIXphGsCaJ1BLVFbXmXxyAO5XiQGy11doOoIFGXbMrituWOY1aFVWSTMgb-9B5SgrKnKEX~LeIk3mu~u-x4y~R6OiZDeGoSq3B70z8ktiA__",
    rating: 4.9,
  },
  {
    career: "미들 (4-8년)",
    id: 27,
    introduction: "가장 ‘나다운’ 커리어를 만들어 드립니다!",
    isMentor: true,
    name: "박승세",
    occupation: "산업 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/ae89/b6d4/e1c96812a80074c69afff8a95e4e49f1?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dfwZK15Vftw6UugI8Kpygspg1pIXR94LQw9pnhX6hmJZX-JiGPoeeW4O-8747mLoLvQEAY77HdCRaZieZGtkxHXEn-GlnkXMy1ETFsKZtn8e8AYhurqkWs3IAg-GCYeC6lT~VO75yeUAenLI59sYZn3MJCNI7csBFiomZKRVhoHwcsJdlAwDe6Kfq6rSa0CbkYzt7GzLmPu3k6U939iYhte7apxJbDEOv0bvdBnlSb7O3iK5s88brrIA4ePlozVlzpsKayhdGSAXVpsgcyaI~daUN2RYWTuW988Np5Ucwr8JR7ONvJ5NdTYaonyVzV2GahMP8amAK9uY6b~W8dRAyg__",
    rating: 3.9,
  },
  {
    career: "시니어 (9년~)",
    id: 28,
    introduction: "목적을 구체화하고 방향성을 찾을 수 있게 돕습니다!",
    isMentor: true,
    name: "HAN",
    occupation: "패키지 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/58e8/d2de/37fb625a3705816e013629a8a37f67b8?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CREYx6enWizi-bxluvp-F~dZSPJa~nrfV5coZQOBnPQ2JUIF~XXTPV5N4oBjwnnDnyEnbz-1WYpXFqtY3054Kq9gK1pP-11p9VrCuoY5XSS-fmykSyMZ~7ilZP1urnr0y946vlbnzJIamDjf-xcVtHRb4PzVFaaPsrhGWpfElfYd7M-V6vauOsC4th-K1oflpJFTXbas2fwGvTdJ2OXWfCHHl6zZswI6AI1NiiBOpTMoMMA~qB2IpfeKdUPHBANNAYwYq0TQkKUSFv9YRRnCI0Z~WzYszFqdJQYVUT~dtyKN1Fqb0Y7x5a0dJyMFFKSPlHenQWY5NX16QSQP7OtVEg__",
    rating: 4.5,
  },
  {
    career: "미들 (4-8년)",
    id: 29,
    introduction: "이성과 감성을 아우르는 진짜 취업이야기",
    isMentor: true,
    name: "JK",
    occupation: "2D 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/71b4/4e6c/0f117034ca71a30e0650f1145241f6ee?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qSBNqAHFDbKQf~3z-XBH9HOVcUPPHHegR2DNRQrhKEitJCyRaMIjsyr-ixdAoMiAg9kiEfxAW6mSJ7XLCqZjlxBuJRDkNEx48K57-9Nm-gd0EXGMp93yq8boNcD~BbhCgcGLL51XkCtVnx6-nPahIXVg5llt8DAcrATD2~v9tgD0zPuxNaAHbVL4-ZJPMOzy4lJNx9kCwEFtFlZteciaTpbjoDCvIXjHDaQQiY~80I2tj0CF21t~ycc5mNIjtKUCCDJ~V1Up-7HDlGujJTfK9jOlGKta7VutK7RhdQRMxsN4RNZB6whzaSeq2Sft504GDPVhpZheAy68ggbUil7Csw__",
    rating: 4.3,
  },
  {
    career: "미들 (4-8년)",
    id: 30,
    introduction: "저의 경험을 많이 나누고 싶어요!",
    isMentor: true,
    name: "디오",
    occupation: "모바일 디자이너",
    profileImg:
      "https://s3-alpha-sig.figma.com/img/1946/b35e/35cf9a62a93ecb172274103f370d377a?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VPRXwgE4~2bFfTKimNDanQ7FCSFpRxNkG93J8lF9NbLoXKKVC9IU1DUYu1sL9Bk9RSoGn49UmTIQbU9COAaDS-tN~AUvCItn5pfEFxbyXi1n1TmXiqJax1qT~zmHC2pRFk1oN2mZFx2-owcCq~h2sVwBmFA2fxLUov58gU85C8zNNz3w3xr~PV53MPrRMSGxoZyvOG5kIN8pF8tKi1uj7W3DlcaDilWMSlWuF-w38BT8JWvYxl7VrmWeM-C4WjMIQPdf6wvB8JD0TSH0eYx-1i9jZi0z1vlW75NWXL7C~1LFsK4q9L9dcEuhI9ojkzQU29BtdBM9Khqw0J5NkEOemQ__",
    rating: 4.2,
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
