import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'

function Cart() {

  const {cart, deleteItem, getItemPrice, emptyCart} = useContext(CartContext)

  return (
    <>
      <h3 className='text-center'>Cart</h3>
      {cart.length > 0 ?
        <>
          {cart.map((e, index) => (
            <div key={index} className='text-center'>
               <img src={`../${e.pictureUrl}`} style ={{width:100}} alt="producto" />
               <p className='text-center'>ARTICULO: {e.title}</p>
               <p className='text-center'>TIPO: {e.category}</p>
               <p className='text-center'>PRECIO: $ {e.price}</p>
               <p className='text-center'>CANTIDAD: {e.qty}</p>
               <p className='text-center'>SUBTOTAL: $ {e.price * e.qty}</p>
               <button className='btn btn-secundary' onClick = {() => deleteItem(e.id)}>CANCELAR PRODUCTO</button>
            </div>
          ))}
          <div className='text-center'>
            <button className='btn btn-secundary' onClick = {emptyCart}>VACIAR CARRITO</button>
            <p className='text-center'>PRECIO TOTAL $ {getItemPrice()}</p>
          </div>
        </>

       :
       <>
         <div className='text-center'>
           <p>SIN PRODUCTOS</p>
          </div>
       </>
      } 
    </>
  )
}

export default Cart