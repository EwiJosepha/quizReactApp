
import './App.css'
import Home from './Components/Pages/Home'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Questions from './Components/Quiz/Question';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Results from './Components/Pages/Results';
import { Appcontext } from './Components/Hooks/Context';
import { useState } from 'react';
import { useContext } from 'react';

function App() {
  const [counter, setCounter]= useContext()
const client = new QueryClient()
  return (
    <>
    <QueryClientProvider client={client}>
      <Appcontext.Provider value={{counter, setCounter}}>
      <Router>
        <Routes>
        <Route path="/Results" element={<Results />} />
          <Route path="/Question/:id" element={<Questions />} />
          <Route path="/" element={<Home />} />

      </Routes>
      </Router>
      </Appcontext.Provider>
     
      </QueryClientProvider>
     </>
  )
}

export default App
