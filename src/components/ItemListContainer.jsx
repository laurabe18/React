import React from 'react';
import { useEffect, useState } from 'react'
import '../App.css';
import ItemList from './ItemList';
// import productsMock from './helpers/data';
import { useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';

export default function ItemListContainer() {

  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);

  
  useEffect(() => { 
    const db = getFirestore();

    const itemsCollection = collection(db, 'items');

   if(id){
     const filterCategory = query(itemsCollection, where ('category', '==', id));

     getDocs(filterCategory).then((snapshot) => {
      
       setResultado(
       snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      })
      .catch((error) =>{
        setError(error)
      })
      .finally(() =>{
       setLoading(false)
      });
    }else{
    getDocs(itemsCollection).then((snapshot) => {
      
    setResultado(
      snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    })
    .catch((error) =>{
      setError(error)
    })
    .finally(() =>{
      setLoading(false)
    });
    }
  }, [id]);

  return (
    <>
      <div className='loading'>{loading && 'LOADING...'}</div>
      <div>{error && 'LO SIENTO, HUBO UN ERROR EN LA CARGA DEL PRODUCTO'}</div>
      <ItemList items = {resultado}/>
    </>
  )
}