import { getHomeMainBanners, getNetworkingBanners } from "api/etc";
import { DocumentData } from "firebase/firestore";
import { useQueries } from "react-query";

interface Query {
  queryKey: [string];
  queryFn: () => Promise<DocumentData | null>;
  staleTime: number;
}

const useBanners = () => {
  const queries: Query[] = [
    {
      queryKey: ["get-home-main-banners"],
      queryFn: getHomeMainBanners,
      staleTime: Infinity,
    },
    {
      queryKey: ["get-networking-banners"],
      queryFn: getNetworkingBanners,
      staleTime: Infinity,
    },
  ];

  const results = useQueries(queries);

  return { results };
};

export default useBanners;
