import React, { useState, useEffect } from 'react';
import { showAll, findName } from '../redux/actions';
import '../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function HomeP() {
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(showAll());
  },[])
  
  const elemento = useSelector(state => state.allP);
  // console.log('El elemento: ', elemento);
    
  const [PokeName, setPokeName] = useState('');

  const pokeNomb = useSelector(state => state.pokeN);
  // console.log('El pokemono: ', pokeNomb);
  
  function PokeNombre () {
    dispatch(findName(PokeName));
    // console.log('Ay yummio');
  }
  
  const submitP = event =>{
    event.preventDefault();
  }

  const handleChange = (event) => {
    setPokeName(event.target.value);
  }

  const ga = () => {
    console.log('Eso pueh');
  }
  return (
    // <div className='fondoP'>Bienvenido(a) a mi proyecto individual sobre los pokemones !!! <br /><br /> Espero lo disfrutes viéndolo así como yo disfruté haciéndolo</div>
    <div className=''>
      
      <form onSubmit={submitP}>
        <label> Ingrese el nombre del pokemon que desee encontrar: </label> <br />
        <input
          type="text"
          name='PokeName'
          key='PokeName'
          value={PokeName} 
          onChange={handleChange}
        />
        <br /><br />
        <button onClick={PokeNombre} style={{cursor:'pointer', padding:'10px 20px', border:'0', borderRadius:'7px', fontWeight:'bold', backgroundColor:'#b4b4b4'}} type='submit'>Enviar</button>
        <br /><br />
      </form>
      {pokeNomb.length > 0 ? pokeNomb.map((sap)=>(
        <NavLink to={`/detail/${sap.id}`} style={{color:'black'}}>
        <div style={{cursor:'pointer', backgroundColor:'lightgreen', padding:'10px', margin:'20px', borderRadius:'20px', display:'inline-block'}}>
          <h5> Nombre: {sap.nombre} </h5>
          <h5> Imagen: <br /> <img src={sap.imagen} alt={sap.imagen} /> </h5>
          {
            sap.Types === undefined ? 
            <h5>{sap.tipos.length > 1 ? (<b> Tipos: </b>) : (<b> Tipo: </b>) } {sap.tipos[0]} {sap.tipos.length > 1 ? (<b> -  </b>) : (<b>  </b>) } {sap.tipos.length > 1 ? sap.tipos[1] : null}</h5> :
            <h5>{sap.Types.length > 1 ? (<b> Tipos: </b>) : (<b> Tipo: </b>) } {sap.Types[0].nombre} {sap.Types.length > 1 ? (<b> -  </b>) : (<b>  </b>) } {sap.Types.length > 1 ? sap.Types[1].nombre : null}</h5>
          }
        </div>
        </NavLink>
      )) : (<h5>No hay pokemon que buscar</h5>) }

      <hr style={{width:'95%', height: '15px', backgroundColor:'gray', border:'0', borderRadius:'7px'}}/>

      {elemento.map((sap)=>(
        <NavLink to={`/detail/${sap.id}`} style={{color:'black'}} key={sap.id}>
          <div onClick={ga} style={{cursor:'pointer', backgroundColor:'lightgreen', padding:'10px', margin:'20px', borderRadius:'20px', display:'inline-block'}}>
            <h5> Nombre: {sap.nombre} </h5>
            <h5> Imagen: <br /> <img src={sap.imagen} alt={sap.imagen} /> </h5>
            <h5>{sap.tipo.length > 1 ? (<b> Tipos: </b>) : (<b> Tipo: </b>) } {sap.tipo[0]} {sap.tipo.length > 1 ? (<b> -  </b>) : (<b>  </b>) } {sap.tipo.length > 1 ? sap.tipo[1] : null}</h5>
          </div>
        </NavLink>
      ))}
      <br />
    </div>
  )
}