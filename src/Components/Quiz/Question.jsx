import useFetch from "../Hooks/useFetch";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Appcontext } from "../Hooks/Context";

import "../Pages/pages.css";
import { useContext } from "react";

function Questions() {
  const {counter, setCounter}= useContext(Appcontext)
  const { id } = useParams();
  const navigate = useNavigate();

  let { data, isLoading, error } = useFetch();
  if (isLoading) {
    <h1>Loading</h1>;
  }

  if (error) {
    <h1>An error occured</h1>;
  }
  console.log(id);

  function handleclickeventss(e) {
    const value = e.target.value;

    console.log(value);
    if (+id > 8) {
      navigate("/Results")
    }else if(val === data[id]?.correct_answer){
      setCounter(counter + 1)
    }else {
      navigate(`/Question/${+id + 1}`);
    }
   
  }

  console.log(counter);

  return (
    data?.length > 0 && (
      <>
        <div className="ans">
          <h2 id="title">
            Click on either <span>True</span> or <span>False</span> to choose
            the correct answer
          </h2>
          <hr />
          {counter}
          <div className="category">
            <p>Question Category <br />{data[id]?.category}</p>
          </div>
          <div className="quest">
            <h4 id="quizz">{data[id]?.question}</h4>
          </div>
          <div className="choice">
            <button id="tru" value="true" onClick={handleclickeventss}>
              True
            </button>
            <button id="fals" value="false" onClick={handleclickeventss}>
              False
            </button>
          </div>

          {/* <div className="submit">
            <button id="submit">Submit</button>
          </div> */}
        </div>
      </>
    )
  );
}
export default Questions;
