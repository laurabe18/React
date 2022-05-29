import React from 'react'
import '../App.css';

export default function ItemListContainer({greeting, nombre}) {
  return (
    <h1 className='myH1'>
        {`Hola ${nombre} , ${greeting}`}
    </h1>
  );
}

