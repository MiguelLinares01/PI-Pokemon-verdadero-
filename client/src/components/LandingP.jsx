import '../App.css';
import {NavLink} from 'react-router-dom';
import React from 'react';
// import '../App.css'

export default function LandingP() {

  return (
    // <div className='fondoP'>Bienvenido(a) a mi proyecto individual sobre los pokemones !!! <br /><br /> Espero lo disfrutes viéndolo así como yo disfruté haciéndolo</div>
    <div className='fondoP'>
      <br /><br /><br /><br />
      BIENVENIDO(A) A MI PROYECTO INDIVIDUAL SOBRE LOS POKEMONES !!!
      <br /><br /><br />
      ESPERO LO DISFRUTES VIÉNDOLO ASÍ COMO YO DISFRUTÉ HACIÉNDOLO
      <br /><br />
      <button className='btn'>
        <NavLink to="/home" style={{textDecoration:"none", color:'lightgreen', fontWeight:'bold'}}>
          Ir a la página hogar
        </NavLink>
      </button>
      <br /><br />
    </div>
  )
}