// eslint-disable-next-line import/no-extraneous-dependencies
import { atom } from "recoil";
import { IUser } from "types/user";

export const userState = atom<IUser | null>({
  key: "userState",
  default: null,
});
