import { getPortfolioSummaryApi } from "api/portfolio";
import { DocumentData } from "firebase/firestore";
import { useQueries } from "react-query";

interface PortfolioQuery {
  queryKey: [string, number];
  queryFn: () => Promise<DocumentData | null>;
  staleTime: number;
}

const usePortfolio = () => {
  const ids = [1];

  const queries: PortfolioQuery[] = ids.map((id) => ({
    queryKey: ["get-portfolio-summary", id],
    queryFn: () => getPortfolioSummaryApi(),
    staleTime: 30000,
  }));

  const results = useQueries(queries);

  return { results };
};

export default usePortfolio;
