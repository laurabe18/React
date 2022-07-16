import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

export default function Checkout() {

    const [order, setOrder] = useState(false);
    const [orderId, setOrderId] = useState('');

    const db = getFirestore();
    const orderCollection = collection(db, 'orders');
 
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          phone: '',
        },
    });

    const {cart, getItemPrice, emptyCart} = useContext(CartContext);
   
    function handleClick(values){
      formik.handleSubmit(values);
      const order = {
        buyer: formik.values,
        items: cart,
        total: getItemPrice(),
        fecha: new Date(),
        };

      addDoc(orderCollection, order).then(({id}) =>{
          setOrderId(id);
          setOrder(true)
      })
      .catch((error) => {
          console.log(error)
      });
    }

   return (
     <>
     {order ? (
        <div className='checkout'>
           <h1>¡Gracias por tu pedido!</h1>
           <h4>El numero de tu orden es:</h4>
           <p className='pCheck mt-5 fw-bolder'>{orderId}</p>
           <p>Nos pondremos en contacto para terminar de gestionar la operacion.</p>
           <Link to = '/' className='btnCard btn' onClick={emptyCart} >Volver al Inicio</Link>
        </div>
        ) : (
        <div className='checkout'>
          <h2>Completá con tu información</h2>
          <p>
            Llená el formulario para completar la compra. Nos
            pondremos en contacto a la brevedad.
          </p>
          <form className='form' onSubmit={handleClick}>
            <label>Nombre</label>
            <input
              id='name'
              type='text'
              value={formik.values.name}
              onChange={formik.handleChange}
              required
            />
            <label>Email</label>
            <input className='input'
              id='email'
              type='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              required
            />
            <label>Teléfono</label>
            <input
              id='phone'
              type='tel'
              value={formik.values.phone}
              onChange={formik.handleChange}
              required
            />
            <button type='submit' className='btnCard btn'>
              Enviar
            </button>
          </form>
        </div>
      )}
    </>
  );
}