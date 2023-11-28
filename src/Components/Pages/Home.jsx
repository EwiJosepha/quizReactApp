import "./pages.css"
function Home () {

  return (
    <>
    <div className="container">
    <h1>Welcome to Your Favourite Game</h1>
    <div className="questions">
      <h3>All you have to do is to Answer <span id="true">True</span> or <span id="false">False</span></h3>
      <div className="country">
        <h2>Cameroon is a Bilingual Country</h2>
        <div className="truefalse">
          <button id="truthy">True</button>
          <button id="falcy">False</button>
        </div>
        <button id="start">Start</button>

      </div>
    </div>
   
    </div>
    </>
  )

}

export default Home