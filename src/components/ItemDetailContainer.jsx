import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsMock from './helpers/data'
import ItemDetail from './ItemDetail';



function ItemDetailContainer() {
    const {id} = useParams();
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(false);
    const[resultado, setResultado] = useState([]);

    useEffect(() => {
        const product = new Promise ((res, rej) =>{
         setTimeout(() => {
            res(productsMock[ +id - 1 ]);
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
    
      
    }, [id])
    
  return (
    <>
    <div className='loading'>{loading && 'LOADING...'}</div>
    <div>{error && 'LO SIENTO, HUBO UN ERROR EN LA CARGA DEL PRODUCTO'}</div>
    <ItemDetail detail = {resultado} />
    </>
  )
}

export default ItemDetailContainer