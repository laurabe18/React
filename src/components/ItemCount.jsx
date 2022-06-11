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
        onAdd ();
        setCount(inicial) ;
    };

  return (
    <>
    <div className='container-sm bg-dark text-center m-5' style={{ width: '200px' }}>
        <h2 className='h2Count'>{count}</h2>
        <button className='btnCount'  onClick={add}>+</button>
        <button className='btnCount'  onClick={subtract}>-</button>
        <button className='btnCount'  onClick={updateCart}>Agregar al carrito</button>
    </div>
   
    </>
  )
}

export default ItemCount