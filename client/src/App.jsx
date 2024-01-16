import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import LandingP from './components/LandingP.jsx';


function App() {
  return (
    <div className="App">
      <h1>Henryyyy Pokemon</h1>
      <Routes>
        <Route
          path='/'
          element={<LandingP/>}
        />
        

      </Routes>
    </div>
  );
}

export default App;
