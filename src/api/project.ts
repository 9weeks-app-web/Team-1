import { doc, getDoc } from "firebase/firestore";
import fireStore from "./firestoreConfig";

export const getProjectCollection = async (docName: string) => {
  const examples = doc(fireStore, "project", docName);
  const examplesSnapshot = await getDoc(examples);

  if (!examplesSnapshot.exists()) {
    return null;
  }

  return examplesSnapshot.data();
};
export const getProjectDetailApi = async () => {
  const response = await getProjectCollection("portfolioDetail");
  return response;
};
