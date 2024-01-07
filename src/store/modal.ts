// eslint-disable-next-line import/no-extraneous-dependencies
import { atom } from "recoil";

export const portfolioDetailModalState = atom<boolean>({
  key: "portfolioDetailModalState",
  default: false,
});
