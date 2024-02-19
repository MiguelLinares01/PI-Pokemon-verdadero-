import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import LandingP from './components/LandingP.jsx';
import HomeP from './components/HomeP.jsx';
import DetailP from './components/DetailP.jsx';
import NotFound from './components/NotFound.jsx';


function App() {
  return (
    <div className="App">
      <h1>Henryyyy Pokemon</h1>
      <Routes>
        <Route
          path='/'
          element={<LandingP/>}
        />
        <Route
          path='/home'
          element={<HomeP/>}
        />
        <Route
          path='/detail/:id'
          element={<DetailP/>}
        />
        <Route
          path='*'
          element={<NotFound/>}
        />
        

      </Routes>
    </div>
  );
}

export default App;
