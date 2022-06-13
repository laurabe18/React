import React, { useEffect, useState } from 'react'
import '../App.css';
import ItemList from './ItemList';
import productsMock from './helpers/data';



export default function ItemListContainer({greeting, name}) {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [resultado, setResultado] = useState([])

  useEffect(() => { 

   const products = new Promise ((res, rej) =>{
    setTimeout(()=>{
      res(productsMock)
    }, 2000);
  });

  products
  .then((result) => {
   setResultado(result);
  })
  .catch((error) => {
   setError(true);
   console.log(error);
  })
  .finally(() => {
    setLoading(false);
  });
  
 }, []);


  return (
    <>
    <h1 className='myH1'>
        {`Hola ${name} , ${greeting}`}
    </h1>
    <div>{loading && 'loading...'}</div>
    <div>{error && 'Hubo un error con la carga del producto'}</div>
    <ItemList resultado = {resultado}/>
    </>
  );
}

