import React from 'react';
import Home from './Home';
import Cuisine from './cuisine';
import Results from './results';
import { Routes, Route } from 'react-router-dom';

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cuisine/:type' element={<Cuisine />} />
      <Route path='/results/:term' element={<Results />} />
    </Routes>
  );
};

export default Pages;
