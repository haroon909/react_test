import React, { useState } from 'react'
//  import Navbar from './components/Navbar'
 import { BrowserRouter, Routes, Route } from 'react-router-dom'
 import Registration from './Pages/Registeration'
// import Login from './Pages/Login'


const App = () => {

  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Registration />} />
        {/* <Route path="/Login" element={<Login />} /> */}
        
      </Routes>

    </BrowserRouter>

  )

}

export default App;
