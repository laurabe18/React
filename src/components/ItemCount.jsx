import React, { useState } from 'react'
import '../App.css';

const ItemCount = ({inicial, stock, onAdd}) => {
    const [count, setCount] = useState(inicial)
    
    const add = ()=>{
        count < stock ? setCount(count + 1)
        : alert("No hay mas stock")
    }

    const subtract = ()=>{
        count > inicial ? setCount(count - 1)
        : alert ("No se puede quitar mas productos")
    }

    const updateCart = () => {

        onAdd (count);
        setCount(inicial) ;
    };

  return (
    <>
    <div className='d-flex gap-3 justify-content-center mt-3'>
        <button className='btnCount' onClick={add}>+</button>
        <p className='pCount'>{count}</p>
        <button className='btnCount' onClick={subtract}>-</button>
    </div>    
        <button className='btnCount' onClick={updateCart}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount