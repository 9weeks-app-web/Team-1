import { IProfile } from "./portfolio";

export interface IPostSummary {
  id: number;
  writer: IProfile;
  createdAt: string;
  title: string;
  content: string;
  category: string[];
}
