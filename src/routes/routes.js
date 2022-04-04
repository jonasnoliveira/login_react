import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import CriarConta from '../pages/CriarConta';

const routes = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/CriarConta' element={<CriarConta/>}/>
      </Routes>
    </div>
  );
}

export default routes;
