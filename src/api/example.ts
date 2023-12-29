import { doc, getDoc } from "firebase/firestore";
import fireStore from "./firestoreConfig";

export const getExample = async (nickname: string) => {
  const examples = doc(fireStore, "examples", nickname);
  const examplesSnapshot = await getDoc(examples);

  if (!examplesSnapshot.exists()) {
    return null;
  }

  return examplesSnapshot.data();
};
