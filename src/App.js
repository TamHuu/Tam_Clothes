
import './App.css';
import React from 'react';
import Common from './pages/Common';
import Customer from './pages/Customer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from './pages/Private/Admin';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Home />}>
            <Route
              path="common"
              element={<Common />}
            />
            <Route path="customer" element={<Customer />} />

          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
            <Route path='/admin' element={ <Admin/>} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
