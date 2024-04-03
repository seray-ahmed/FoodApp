import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './pages/Index'
import Add from './pages/Add'
import Navbar from './components/Navbar'


function App() {
  const [data, setData] = useState([])
  return (
    <>
      <div className='App'>
        <Router>
          <Routes>
            <Route element={<Navbar setData={setData} />} path='/'>
              <Route element={<Index data={data} />} index />
              <Route element={<Add setData={setData} />} path='add' />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
