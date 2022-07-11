import React, { useState, useContext } from 'react'
import { Box, Card, Typography } from "@mui/material";
import {Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

function ItemDetail({detail}) {

    const{title, description, pictureUrl, price, stock} = detail;

    const[counter, setCounter] = useState(true)

    const {addItem} = useContext(CartContext)

    const onAdd = (qty) =>{
      setCounter(false);
      // alert(`Cantidad de productos ${qty}`);
      //contador envia el num de productos comprados
       addItem(detail, qty)
    }
  return (
    <>
     <Card
      sx={{
        width: '80%',
        borderRadius: '20px',
        padding: '20px',
        margin: 'auto',
        display: 'flex',
        gap: 2,
        height: {
          xs: 'auto',
          md: '500px'
        },
        flexDirection: {
          xs: 'column',
          md: 'row'
        }
      }}
    >
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: {xs: '100%', md:'50%'},
          height: {xs: '280px', sm: '420px', md: 'auto'},
          overflow: 'hidden',
          borderRadius: '20px' 
        }}
      >
        <img src={pictureUrl} alt={title} sx={{flexShrink: 1, minWidth: '100%', minHeight: 'auto', objectFit: 'cover' }} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          width: {xs: '80%', md: '40%'},
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          gap: 2,
          maxWidth: {xs: 'auto', md: '400px'},
          margin: 'auto'
        }}
      >

        <Typography variant='h4'>{ title }</Typography>
        <Typography variant='body1'>{ description }</Typography>
        <Typography variant='h4'>$ { price }</Typography>
        <Typography variant='h6'> STOCK: { stock }</Typography>

        {counter ? <ItemCount inicial ={1} stock ={stock} onAdd ={onAdd} />
          :
          <>
            <Link className='btnCard btn' to={`/cart`}>Ir al carrito</Link>
          </>
        }

      </Box>
    </Card>
    </>
  )
}

export default ItemDetail