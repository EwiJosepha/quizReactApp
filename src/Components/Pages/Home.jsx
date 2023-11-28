import "./pages.css"
import { useNavigate } from "react-router-dom"
function Home () {
const navigate = useNavigate()
  return (
    <>
    <div className="container">
    <h1>Welcome to Your Favourite Game</h1>
    <div className="questions">
      <h3>All you have to do is to Answer <span id="true">True</span> or <span id="false">False</span></h3>
      <div className="country">
        <h2>Cameroon is a Bilingual Country!</h2>
        <div className="truefalse">
          <button id="truthy">True</button>
          <button id="falcy">False</button>
        </div>
        <div className="button">
        <button id="start" onClick={()=>{
          navigate("/Question")
        }}>Start</button>

        </div>

      </div>
    </div>
   
    </div>
    </>
  )

}

export default Home