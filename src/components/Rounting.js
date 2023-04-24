import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './login/login';

import Home from './login/home';
import Form from './login/form';
import Fav from './login/fav';
import CardAdd from './login/card';
import Navbar from './login/navbar';
import Product from './login/product';
import { Provider, useSelector } from 'react-redux';
import { store } from '../context/store';

const Rounting = () => {
 
  const state = useSelector(({sample})=>sample);
  console.log('state',state)
 
  return (
    <div>
 
      <BrowserRouter>
      {state?.isLoggedIn?(
        <>
          <Navbar />
          <Routes>
          <Route path="*" element={<Navigate to={"/Home"}></Navigate>}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Form" element={<Form />}></Route>
          <Route path="/Fav" element={<Fav />}></Route>
          <Route path="/CardAdd" element={<CardAdd />}></Route>
          <Route path="/Product" element={<Product />}></Route>
      </Routes>
      </>
      ):(
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="*" element={<Navigate to={"/"}></Navigate>}></Route>
        </Routes>
      )}
        
      </BrowserRouter>
  
    </div>
  )
}

const ProviderSetUp = ()=>{
  return <Provider store={store}>
    <Rounting/>
  </Provider>
}

export default ProviderSetUp
