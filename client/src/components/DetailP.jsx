import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { findId, noId } from '../redux/actions';
import { useParams } from 'react-router-dom';

export default function DetailP() { 

  const { id } = useParams();
  const dispatch = useDispatch();
  dispatch(findId(id));

  const pok = useSelector(state => state.pokeId);
  console.log("0", pok);

  useEffect(() => () => {
    console.log('CUANDO SALE');
    dispatch(noId());
  }, []);

    return (
    <div>
        {pok.map((prups)=>(
          <div style={{cursor:'pointer', backgroundColor:'lightgreen', padding:'10px', margin:'20px', borderRadius:'20px', display:'inline-block'}}>
            <h5> Nombre: {prups.nombre} </h5> <h5> Id: {prups.id} </h5>
            <h5> Imagen: <br /> <img src={prups.imagen} alt={prups.imagen} /> </h5>
            <h5>{prups.tipos.length > 1 ? (<b> Tipos: </b>) : (<b> Tipo: </b>) } {prups.tipos[0]} {prups.tipos.length > 1 ? (<b> -  </b>) : (<b>  </b>) } {prups.tipos.length > 1 ? prups.tipos[1] : null}</h5>
            <h5> Vida: {prups.vida} </h5>
            <h5> Ataque: {prups.ataque} </h5>
            <h5> Altura: {prups.altura} </h5>
            <h5> Peso: {prups.peso} </h5>
          </div>
      ))}
    </div>
  )
}
