import useFetch from "../Hooks/useFetch";
import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";

import "../Pages/pages.css";

function Questions() {
  const [truee, setTruee]= useState()
  const [falsee, setFalsee]= useState()
  const array= []


  let { data, isLoading, error } = useFetch();
  if (isLoading) {
    <h1>Loading</h1>;
  }

  if (error) {
    <h1>An error occured</h1>;
  }

  function handletrue () {
  setTruee(true);
  }

  function handlefalse (quest) {
  setFalsee(false);
  const falseval = JSON.stringify(localStorage.getItem("anser")) || []
  const correctAns = quest.correct_answer
  if(correctAns){
    const rightans = falseval.filter((rightans) => rightans === falsee); // removing meal from localstorage

    array.push(correctAns)
    localStorage.setItem("anser", JSON.stringify(array));
    console.log(rightans);

  }else{
    const updat=[...falseval, correctAns]
    localStorage.setItem("anser", JSON.stringify(updat));

  }
//   const prevans = falseval.find((ans)=>{
//     ans === correctAns 
// })

 




  console.log(correctAns);

  }

  // const trueval = JSON.stringify(localStorage.setItem("anser", truee))
  


    // console.log(truee);
    // console.log(falsee);
    console.log(data);


    return (
    <>
      <div className="ans">
        <h2 id="title">
          Click on either <span>True</span> or <span>False</span> to choose the
          correct answer
        </h2>
        <hr />
        {data?.map((quest) => (
          <>
            <div className="quest">
              <h4 id="quizz">{quest.question}</h4>
            </div>
            <div className="choice">
              <button id="tru" onClick={handletrue}>True</button>
              <button id="fals" onClick={()=>handlefalse(quest)}>False</button>
            </div>
          </>
        ))}

        <div className="submit">
          <button id="submit">Submit</button>
        </div>
      </div>
    </>
  );
}
export default Questions;
