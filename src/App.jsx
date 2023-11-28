
import './App.css'
import Home from './Components/Pages/Home'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Questions from './Components/Quiz/Question';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

function App() {
const client = new QueryClient()
  return (
    <>
    <QueryClientProvider client={client}>
      <Router>
        <Routes>
          <Route path="/Question" element={<Questions />} />
          <Route path="/" element={<Home />} />

      </Routes>
      </Router>
     
      </QueryClientProvider>
     </>
  )
}

export default App
