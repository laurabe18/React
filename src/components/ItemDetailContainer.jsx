import React, { useState, useEffect } from 'react';
import productsMock from './helpers/data'
import ItemDetail from './ItemDetail';



function ItemDetailContainer() {
    
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(false);
    const[resultado, setResultado] = useState([]);

    useEffect(() => {
        const product = new Promise ((res, rej) =>{
         setTimeout(() => {
            res(productsMock [0])
         }, 2000);
        })
        
        product
        .then((result) =>{
          setResultado(result)
        })
        .catch((error) =>{
            setError();
            console.log(error)
        })
        .finally(() =>{
            setLoading(false)
        })
    
      
    }, [])
    
  return (
    <>
    <div>{loading && 'LOADING...'}</div>
    <div>{error && 'LO SIENTO, HUBO UN ERROR EN LA CARGA DEL PRODUCTO'}</div>
    <ItemDetail detail = {resultado} />
    </>
  )
}

export default ItemDetailContainer