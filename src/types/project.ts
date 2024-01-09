export interface IProject {
  id: number;
  title: string;
  description: string;
  category: string;
  views: number;
  likes: number;
  deadline: string;
  nowPeopleCnt: number;
  maxPeopleCnt: number;
  thumbnail: string;
}

export interface IProjectDetail extends IProject {
  writer: string;
}

export interface IProjectReviewSummary {
  id: number;
  profileImg: string;
  writer: string;
  date: string;
  rating: number;
  content: string;
}
