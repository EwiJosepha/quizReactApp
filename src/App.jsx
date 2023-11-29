import "./App.css";
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questions from "./Components/Quiz/Question";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Results from "./Components/Pages/Results";
import { Appcontext } from "./Components/Hooks/Context";
import { useState } from "react";



function App() {
  const client = new QueryClient()

  const [counter, setCounter] = useState(0)

  return (
    <>
      <Appcontext.Provider value={{ counter, setCounter }}>
        <QueryClientProvider client={client}>
          <Router>
            <Routes>
              <Route path="/Results" element={<Results />} />
              <Route path="/Question/:id" element={<Questions />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </Appcontext.Provider>
    </>
  );
}

export default App;
