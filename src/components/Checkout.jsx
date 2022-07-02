import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from './context/CartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'

export default function Checkout() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [order, setOrder] = useState(false)
    const [orderId, setOrderId] = useState('')

    const db = getFirestore();
    const orderCollection = collection(db, 'orders');

    const {cart, getItemPrice, emptyCart} = useContext(CartContext);

    function handleClick(){
        const order = {
            buyer: {name, email, phone},
            items: cart,
            total: getItemPrice(),
            fecha: new Date()
        }

        addDoc(orderCollection, order).then(({id}) =>{
            setOrderId(id)
            setOrder(true)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    if(cart.length === 0){
        return(
            <>
              <div className='text-center mt-5'>
                <p>TODAVIA NO AGREGASTE NINGUN PRODUCTO AL CARRITO</p>
                <Link className='btnCard btn' to={`/`}>EMPEZAR A COMPRAR</Link>
              </div>
            </>
        )
    }
  return (
    <>
     <div className='checkoutBody'>
        <h1>¡Gracias por tu compra!</h1>
        <h2>Completa con tus datos</h2>
        <p>Llena el formulario para completar la operacion. Nos pondremos en contacto para acordar forma de pago y envio.</p>
        <input type="text" value={name} onChange ={(e) => setName(e.target.value)} placeholder = 'Nombre...'/>
        <input type="text" value = {email} onChange = {(e) => setEmail(e.target.value)} placeholder ='Email...'/>
        <input type="text" value = {phone} onChange ={(e) => setPhone(e.target.value)} placeholder = 'Telefono'/>
        <button className='btnCount' onClick={handleClick}>Enviar</button>
     </div>

     {order &&
       <div className='checkoutBody'>
        <h1>¡Gracias por tu pedido!</h1>
        <h2>Tu numero de orden es:</h2>
        <p className='pCheck mt-5 fw-bolder'>{orderId}</p>
        <p>Nos pondremos en contacto para terminar de gestionar la operacion.</p>
        <Link to = '/' className='btnCard btn' onClick={emptyCart} >Volver al Inicio</Link>
       </div>
     }
    </>
  )
}
