// import React, { useState, useContext } from 'react'

// import { CartContext } from '../context/CartContext'
// import { addDoc, collection, getFirestore } from 'firebase/firestore'
// import { Link } from 'react-router-dom'
// import {Box, Typography } from '@mui/material';

// import { Formik, Form, Field, ErrorMessage } from 'formik';

// export default function Checkout() {
    
//     const[formOk, setFormOk]= useState(false)
//     const [order, setOrder] = useState(false)
//     const [orderId, setOrderId] = useState('')

//     const db = getFirestore();
//     const orderCollection = collection(db, 'orders');


//     const {cart, getItemPrice, emptyCart} = useContext(CartContext);

//     // function handleClick(values){
//     //     formik.handleSubmit(values);
//     //     const order = {
//     //         buyer: formik.values,
//     //         items: cart,
//     //         total: getItemPrice(),
//     //         fecha: new Date()
//     //     }

//         addDoc(orderCollection, order).then(({id}) =>{
//             setOrderId(id)
//             setOrder(true)
//         })
//         .catch((error) => {
//             console.log(error)
//         })
//     }

//     if(cart.length === 0){
//         return(
            
//               <Box
//                container
//                sx={{
//                display: 'flex',
//                justifyContent: 'center',
//                textAlign: 'center',
//                flexDirection: 'column',
//                marginTop: 10,
//                gap: 3,
//               }}
//             >
//             <Typography variant='h4'>TODAVIA TU CARRITO ESTA VACIO</Typography>

//             <Link
//              className='btnCard btn'
//              to='/'
//              style={{ alignSelf: 'flex-start', margin: 'auto' }}
//             >
//                EMPEZAR A COMPRAR
//             </Link>
//         </Box>
//       )
//     }
//   return (
//     <>
//      <Formik
//      initialValues={{
//         name: '',
//         email: '',
//         phone: '',
//      }}
      
//      validate={(val) =>{
//        let error= {};
    
//        //Validacion nombre
//        if(!val.name){
//         error.name= 'Por favor ingresa un nombre'
//        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(val.name)){
//         error.name= 'El nombre solo puede tener letras y espacios'
//        }
        
//        //validacion correo
//        if(!val.email){
//         error.email= 'Por favor ingrese un correo'
//        }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val.email)){
//         error.email= 'El correo solo puede tener letras, numeros, puntos, guiones y guion bajo'
//        }
       
//        //validacion telefono
//        if(!val.phone){
//         error.phone= 'Por favor ingrese un numero de telefono'
//        }else if(!/^\d{0,20}$/.test(val.phone)){
//         error.phone= 'Ingrese un num de telefono valido'
//        }
//        return error
//      }}

//       onSubmit={(val, {resetForm}) =>{
//         resetForm();
//         console.log('formulario enviado');
//         setFormOk(true);
//         setTimeout(()=> setFormOk(false), 5000);
//       }}
//      >
//         {( { errors } ) => (
//      <Form className='checkoutBody'>
//         <div>
//           <label htmlForm='name'>Nombre</label>
//           <Field 
//           type='text' 
//           id='name' name='name' 
//           placeholder='Escribe tu nombre' 
//           />
//           <ErrorMessage name='name' component={()=>(
//             <div className='error'>{errors.name}</div>
//           )} />  
//         </div>
//         <div>
//           <label htmlForm='email'>Email</label>
//           <Field 
//           type='text' 
//           id='email' 
//           name='email' 
//           placeholder='Escribe tu email' 
//           />
//           <ErrorMessage name='email' component={()=>(
//             <div className='error'>{errors.email}</div>
//           )} /> 
//         </div>
//         <div>
//           <label htmlForm='phone'>Telefono</label>
//           <Field
//           type='text' 
//           id='phone' 
//           name='phone' 
//           placeholder='Escribe tu telefono' 
//           />
//           <ErrorMessage name='phone' component={()=>(
//             <div className='error'>{errors.phone}</div>
//           )} /> 
//         </div>
//         <button type='submit'>Enviar</button>
//         {formOk && <p className='sucess'>Formulario enviado con exito!</p>}
//      </Form>
//      )}
//      </Formik>
//      {order &&
//        <div className='checkoutBody'>
//         <h1>¡Gracias por tu pedido!</h1>
//         <h2>Tu numero de orden es:</h2>
//         <p className='pCheck mt-5 fw-bolder'>{orderId}</p>
//         <p>Nos pondremos en contacto para terminar de gestionar la operacion.</p>
//         <Link to = '/' className='btnCard btn' onClick={emptyCart} >Volver al Inicio</Link>
//        </div>
//      }
//     </>
//   )
// }
