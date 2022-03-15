import React from 'react';
import Home from './Home';
import Cuisine from './cuisine';
import Results from './results';
import Recipe from './recipe';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const Pages = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine />} />
        <Route path='/results/:term' element={<Results />} />
        <Route path='/recipe/:id' element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
