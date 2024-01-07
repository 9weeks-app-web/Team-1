import { atom } from "recoil";
import { IUser } from "types/user";

export const userState = atom<IUser | null>({
  key: "userState",
  default: null,
});
