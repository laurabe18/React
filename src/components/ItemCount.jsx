import React, { useState } from 'react'
import '../App.css';

const ItemCount = ({inicial, stock, onAdd}) => {
    const [count, setCount] = useState(inicial)
    
    const sumar = ()=>{
        count < stock ? setCount(count + 1)
        : alert("No hay mas stock")
    }

    const restar = ()=>{
        count > inicial ? setCount(count - 1)
        : alert ("No se puede quitar mas productos")
    }

    const reset = () =>{
        setCount(inicial)
    }

  return (
    <>
    <div className='container-sm bg-dark text-center m-5' style={{ width: '200px' }}>
        <h2 className='h2Count'>{count}</h2>
        <button className='btnCount' onClick={sumar}>+</button>
        <button className='btnCount' onClick={restar}>-</button>
        <button className='btnCount' onClick={() => {onAdd(count); reset()}}>Agregar al carrito</button>
    </div>
   
    </>
  )
}

export default ItemCount