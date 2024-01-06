import { doc, getDoc } from "firebase/firestore";
import fireStore from "./firestoreConfig";

// 프로젝트
export const getBannerCollection = async (docName: string) => {
  const examples = doc(fireStore, "banner", docName);
  const examplesSnapshot = await getDoc(examples);

  if (!examplesSnapshot.exists()) {
    return null;
  }

  return examplesSnapshot.data();
};

export const getHomeMainBanners = async () => {
  const response = await getBannerCollection("home_main_banner");
  return response;
};

export const getNetworkingBanners = async () => {
  const response = await getBannerCollection("networking");
  return response;
};

// 멤버
// 프로젝트
export const getMemberCollection = async (docName: string) => {
  const examples = doc(fireStore, "member", docName);
  const examplesSnapshot = await getDoc(examples);

  if (!examplesSnapshot.exists()) {
    return null;
  }

  return examplesSnapshot.data();
};

export const getHomeBestMember = async () => {
  const response = await getMemberCollection("home_best_member");
  console.log("fetch HomeBestMember");
  return response;
};

export const getRealtimeNewMember = async () => {
  const response = await getMemberCollection("realtime_new_member");
  console.log("fetch RealtimeNewMember");
  return response;
};

export const getWeeklyBestMember = async () => {
  const response = await getMemberCollection("weekly_best_member");
  console.log("fetch WeeklyBestMember");
  return response;
};

export const getAllOfMember = async () => {
  const response = await getMemberCollection("member_all");
  console.log("fetch member_all");
  return response;
};
