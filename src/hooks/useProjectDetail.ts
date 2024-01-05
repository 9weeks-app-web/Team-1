import { getProjectDetailApi } from "api/project";
import { useQuery } from "react-query";

const useProjectDetail = () => {
  const { data } = useQuery("get-project-detail", () => getProjectDetailApi(), {
    staleTime: 30000,
  });

  return { data };
};

export default useProjectDetail;
