import React, { useState } from 'react'


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

  return (
    <>
    <div className='d-flex gap-3 justify-content-center mt-3'>
        <button className='btnCount' onClick={subtract}>-</button>
        <p className='pCount'>{qty}</p>
        <button className='btnCount' onClick={add} disabled={!enableAdd}>+</button>
    </div>    
        <button className='btnCard' onClick={() =>{onAdd(qty)}}>AGREGAR AL CARRITO</button>
    </>
  )
}

export default ItemCount