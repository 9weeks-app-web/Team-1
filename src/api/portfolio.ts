import { doc, getDoc } from "firebase/firestore";
import fireStore from "./firestoreConfig";

export const getPortfolioCollection = async (docName: string) => {
  const examples = doc(fireStore, "portfolio", docName);
  const examplesSnapshot = await getDoc(examples);

  if (!examplesSnapshot.exists()) {
    return null;
  }

  return examplesSnapshot.data();
};

export const getPortfolioSummaryApi = async () => {
  const response = await getPortfolioCollection("portfolioSummary");
  console.log("portfolioSummary");
  return response;
};
