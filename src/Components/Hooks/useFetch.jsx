import { useQuery } from "@tanstack/react-query";
import axios from "axios";
function useFetch() {
  // const navigate = useNavigate();
  const { data, isLoading, error } = useQuery({
    queryKey: ["quizz"],
    queryFn: async () => {
      const res = await axios.get(
        "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
      );
      return res.data.results
    },
  });

  // console.log(data);
  return {data,isLoading,error}
}

export default useFetch;
