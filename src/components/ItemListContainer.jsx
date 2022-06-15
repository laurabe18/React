import React from 'react';
import { useEffect, useState } from 'react'
import '../App.css';
import ItemList from './ItemList';
import productsMock from './helpers/data';
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {

  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);

  
  useEffect(() => { 
    setLoading(true);
    setError(false);
    setResultado([]);
      
    const products = new Promise((res, rej) => {
      setTimeout(() => {
        !id ? res(productsMock) : res(productsMock.filter(product => product.category === id));
      }, 2000);
    });

    products
    .then((result) =>{
      setResultado(result)
    })
    .catch((error) => {
      setError(error)
    })
    .finally(() =>{
      setLoading(false)
    })
  }, [id])

  return (
    <>
      <div className='loading'>{loading && 'LOADING...'}</div>
      <div>{error && 'LO SIENTO, HUBO UN ERROR EN LA CARGA DEL PRODUCTO'}</div>
      <ItemList items = {resultado}/>
    </>
  )
}