import { getPortfolioDetailApi } from "api/portfolio";
import { useQuery } from "react-query";

const usePortfolioDetail = () => {
  const { data } = useQuery("get-portfolio-detail", getPortfolioDetailApi, {
    staleTime: 30000,
  });

  return { data };
};

export default usePortfolioDetail;
