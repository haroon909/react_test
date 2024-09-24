import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registeration from './Pages/Registeration';
import Login from './Pages/Login';
import Customer from './Pages/Customer';
import Admin from './Pages/Admin';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Registeration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customer/:userId" element={<Customer />} />
        <Route path="/admin/:userId" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
