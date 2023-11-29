import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

function useFetch() {

  const [postperpage, setPostperpage]= useState(1)
  const [currentpage, setCurrentpage]= useState(1)
  const [amount, setAmount]= useState([])
  // const amount = 1
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

  console.log(data);

  const indexoflastpage = currentpage * postperpage
  const indexoffirstpost = indexoflastpage - postperpage
  // const currentpost = data.slice(indexoflastpage, indexoffirstpost);


  // console.log(data);
  return {data,isLoading,error}
}

export default useFetch;
