import { getPortfolioSummaryApi } from "api/portfolio";
import { useQuery } from "react-query";

const usePortfolio = () => {
  const { data } = useQuery("get-portfolio-summary", getPortfolioSummaryApi, {
    staleTime: 30000,
  });

  return { data };
};

export default usePortfolio;
