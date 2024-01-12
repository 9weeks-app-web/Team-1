export interface IMember {
  id: number; // 멘토 식별키
  name: string; // 멘토 이름
  occupation: string; // 직군
  profileImg: string; // 프로필 사진
  introduction: string; // 소개
  career: string; // 경력
  rating: number;
  isMentor: boolean;
}
