export interface IPortfolioSummary {
  id: number;
  thumbnail: string;
  category: string;
  title: string;
  views: number;
  likes: number;
  isVerified: boolean;
  writer: IProfile;
}

export interface IPortfolioDetail {
  id: number;
  thumbnail: string;
  category: string;
  title: string;
  views: number;
  likes: number;
  isVerified: boolean;
}

export interface IProfile {
  id: number;
  name: string;
  profileImg: string;
}
