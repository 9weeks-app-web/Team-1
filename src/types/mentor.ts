export interface IMentor {
  id: number; // 멘토 식별키
  name: string; // 멘토 이름
  occupation: "UX/UI" | "디자인" | "개발"; // 직군
  profileImg: string; // 프로필 사진
  introduction: string; // 소개
}
