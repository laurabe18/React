import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'

function Cart() {

  const {cart, deleteItem, getItemPrice, emptyCart} = useContext(CartContext)

  return (
    <>
      {cart.length > 0 ? (
        <>
          <div>
            {cart.map((item, index) => (
              <div key={index} className='text-center mt-3'>
              <>
               <img src={`../${item.pictureUrl}`} style ={{width:200}} alt="producto" />
               <p className='text-center'>ARTICULO: {item.title}</p>
               <p className='text-center'>TIPO: {item.category}</p>
               <p className='text-center'>PRECIO: $ {item.price}</p>
               <p className='text-center'>CANTIDAD: {item.qty}</p>
               <p className='text-center'>SUBTOTAL: $ {item.price * item.qty}</p>
               <button className='btnCard btn' onClick = {() => deleteItem(item.id)}>CANCELAR PRODUCTO</button>
              </>
              </div>
            ))}
            <div className='text-center'>
              <p className='text-center mt-5'>PRECIO TOTAL $ {getItemPrice()}</p>
              <button className='btnCard btn' onClick = {()=> emptyCart()}>VACIAR CARRITO</button>
            </div>
          </div>
        </>
       )
       : (
       <>
         <div className='text-center'>
           <p>SIN PRODUCTOS</p>
          </div>
       </>
      )} 
    </>
  );
}

export default Cart;