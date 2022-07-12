import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import productsMock from './helpers/data'
import ItemDetail from './ItemDetail';
import {doc, getDoc, getFirestore} from 'firebase/firestore';



function ItemDetailContainer() {
    const {id} = useParams();
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(false);
    const[resultado, setResultado] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        const productsRef = doc(db, 'items', id);

        getDoc(productsRef).then((snapshot) => {
           setResultado({...snapshot.data(), id: snapshot.id});
        })
        .catch((error) => {
          setError(error)
        })
        .finally(() => {
          setLoading(false)
        });
      
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