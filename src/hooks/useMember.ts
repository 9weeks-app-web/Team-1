import {
  getAllOfMember,
  getHomeBestMember,
  getWeeklyBestMember,
} from "api/etc";
import { DocumentData } from "firebase/firestore";
import { useQueries } from "react-query";

interface Query {
  queryKey: [string];
  queryFn: () => Promise<DocumentData | null>;
  staleTime: number;
}

const useMember = () => {
  const queries: Query[] = [
    {
      queryKey: ["home-best-member"],
      queryFn: getHomeBestMember,
      staleTime: Infinity,
    },
    {
      queryKey: ["realtime-new-member"],
      queryFn: getHomeBestMember,
      staleTime: Infinity,
    },
    {
      queryKey: ["weekly-best-member"],
      queryFn: getWeeklyBestMember,
      staleTime: Infinity,
    },
    {
      queryKey: ["member-all"],
      queryFn: getAllOfMember,
      staleTime: Infinity,
    },
  ];

  const results = useQueries(queries);

  return { results };
};

export default useMember;
