import useFetch from "../Hooks/useFetch";
import { useEffect } from "react";
import "../Pages/pages.css"


function Questions() {
  const {data, isLoading,error}= useFetch()
  if(isLoading){
    <h1>Loading</h1>
  }

  if(error){
    <h1>An error occured</h1>
  }

 console.log(data);
  return (
    <>
    <div className="ans">
      <h2 id="title">Click on either True or False to choose the correct answer</h2>
   
    <div className="quest">
    <h4 id="quizz">{data[0]?.question}</h4>

    </div>
    <div className="choice">
      <button id="tru">True</button>
      <button id="fals">False</button>
    </div>
    <div className="submit">
      <button id="submit">Submit</button>
    </div>
    </div>
    </>
  );
}
export default Questions;
