
import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom';
import ItemCount from './ItemCount';

function ItemDetail({detail}) {

    const{title, description, pictureUrl, price, stock} = detail;

    const[counter, setCounter] = useState(true)

    const onAdd = (contador) =>{
      setCounter(false)
      console.log(contador)

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
          MONTO: {price} 
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