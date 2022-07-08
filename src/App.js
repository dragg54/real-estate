import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import AllProperties from './pages/allProperties/AllProperties'
import Home from './pages/Home'

function App(){
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allProperties" element={<AllProperties/>}/>
    </Routes>
   </Router>
  )
}

export default App