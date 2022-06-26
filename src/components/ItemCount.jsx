import React, { useState } from 'react'
import '../App.css';

const ItemCount = ({inicial, stock, onAdd}) => {
    const [qty, setQty] = useState(inicial)

    const[enableAdd, setEnableAdd] = useState(true);
    
    const add = () => {
        qty < stock ? setQty(qty + 1)
        : setEnableAdd(false)
    }

    const subtract = () => {
        qty > inicial ? setQty(qty - 1)
        : setEnableAdd(true)
    }

    // const updateCart = () => {

    //     onAdd (qty);
    //     setQty(inicial) ;
    // };

  return (
    <>
    <div className='d-flex gap-3 justify-content-center mt-3'>
        <button className='btnCount' onClick={subtract}>-</button>
        <p className='pCount'>{qty}</p>
        <button className='btnCount' onClick={add} disabled={!enableAdd}>+</button>
    </div>    
        <button className='btnCount' onClick={() =>{onAdd(qty)}}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount