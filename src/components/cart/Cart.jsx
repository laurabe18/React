import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link as Button, Typography, Card,  Box } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import {Link } from 'react-router-dom';


export default function Cart() {
  const {cart, deleteItem, getItemPrice, emptyCart, getItemQty} = useContext(CartContext)
  return (
    <Box
    container
    sx={{
      display: 'flex',
      justifyContent: 'center',
      gap: 2,
      maxWidth: '950px',
      margin: 'auto',
      marginTop: '60px',
    }}
  >
    {
      cart.length > 0 ? (

        <Card
        sx={{
        width: '100%',
        borderRadius: '20px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: 0.5,
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant='h5' component='h2' sx={{ marginBottom: '10px' }}>Detalle</Typography>

      <TableContainer elevation={0} component={Card} sx={{ borderRadius: '20px'}}>
        <Table>
          <TableHead>
            <TableRow>
                 <TableCell></TableCell>
                 <TableCell>Producto</TableCell>
                 <TableCell>Precio unitario</TableCell>
                 <TableCell>Precio Total</TableCell>
                 <TableCell></TableCell>   
            </TableRow>
          </TableHead>
          <TableBody>

            {
             cart.map(item  => (
              <TableRow key={item.id}>
                <TableCell >
                  <img src={item.pictureUrl} style={{ width: 100, height: 100 }} cols={1} 
                    alt={item.title}
                  />
                </TableCell>
                <TableCell >{item.title + " x " + item.qty}</TableCell>
                <TableCell >$ {item.price}</TableCell>
                <TableCell >$ {item.price * item.qty }</TableCell>
                <TableCell >
                  <IconButton aria-label="delete" color="error" onClick = {() => deleteItem(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>

      <Card sx={{ width: '100%', borderRadius: '20px', padding: '20px', marginTop: '20px'}}>
        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
          Importe total: $
          {
            getItemPrice()
          }
            (x {getItemQty()}  producto/s)
        </Typography>

        <Box
          sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' }, marginTop: '20px', gap: { sm: '20px' } }}
        >
          <Button component={Link} to='/checkout' className='btnCard btn' sx={{ display: 'flex', alignSelf: 'flex-start', margin: { xs: 'auto', sm: 'unset' }, textDecoration: 'none', color: 'black' }}>FINALIZAR COMPRA</Button>

          <Button
            className='btnCard btn'
            onClick={emptyCart}
            sx={{ marginTop: { xs: '20px', sm: 0}, textDecoration: 'none', color:'black' }}
          >
            VACIAR CARRITO
          </Button>
        </Box>

      </Card>

    </Card>

     ) : (
    <Box
     container
     sx={{
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      flexDirection: 'column',
      marginTop: 10,
      gap: 3,
     }}
    >
      <Typography variant='h4' style={{color:'white'}}>TODAVIA TU CARRITO ESTA VACIO</Typography>

     <Link
      className='btnCard btn'
      to='/'
      style={{ alignSelf: 'flex-start', margin: 'auto' }}
    >
       EMPEZAR A COMPRAR
      </Link>
    </Box>
      )
    }
  </Box>
)
}
  


