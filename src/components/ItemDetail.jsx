
import React, { useState } from 'react'
import { useContext } from 'react';
import {Link } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import ItemCount from './ItemCount';

function ItemDetail({detail}) {

    const{title, description, pictureUrl, price, stock} = detail;

    const[counter, setCounter] = useState(true)

    const {isInCart, addItem} = useContext(CartContext)

    const onAdd = (qty) =>{
      setCounter(false);
      // alert(`Cantidad de productos ${qty}`);
      //contador envia el num de productos comprados
       addItem(detail, qty)
    }
  return (
    <>
      <div className="card" style={{width: '25rem'}}>
      <img src={`../${pictureUrl}`} className="card-img-top"style={{width: 398 , height: 446}}  alt='Imagen' />  
      <div className="card-body">
         <h5 className="card-title">{title}</h5>
         <p className='card-text'>
          DESCRIPCION: {description} 
          <br />
          MONTO: $ {price} 
          <br />
          STOCK: {stock} 
          <br />
         </p>
         {counter ? <ItemCount inicial ={1} stock ={10} onAdd ={onAdd} />
            :
            <>
            <Link className='btnCard btn' to={`/cart`}>Ir al carrito</Link>
            </>
         }
       </div>
    </div>
    </>
  )
}

export default ItemDetail