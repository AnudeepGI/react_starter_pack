import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Product from './pages/Product';
import NavLinks from './components/NavLinks'
import SharedLayout from './Layout';
import SecView from './pages/SecView';
import ProtectedRoutes from './Routes/ProtectedRoutes';

function App() {
  const [isLogin, setisLogin] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
        <Route path='dashbord' element={
          <ProtectedRoutes isLogin={isLogin}>
            <SharedLayout />
          </ProtectedRoutes>
        }>
          <Route index element={<SecView/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;