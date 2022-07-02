import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import {Link } from 'react-router-dom';
import { Box } from '@mui/material';

export default function Cart() {
  const {cart, deleteItem, getItemPrice, emptyCart} = useContext(CartContext)
  return (
   <>
    {cart.length > 0 ? (
      <>
     <TableContainer component={Paper}>
       <Table sx={{ minWidth: 700 }} aria-label="spanning table">
         <TableHead>
           <TableRow>
             <TableCell align="center" colSpan={6}>
               Detalle
             </TableCell>
           </TableRow>
           <TableRow>
             <TableCell></TableCell>
             <TableCell align='center'>Producto</TableCell>
             <TableCell align='center'>Precio Unitario</TableCell>
             <TableCell align='center'>Precio Total</TableCell>
             <TableCell align='center'></TableCell>
           </TableRow>
          </TableHead>
          <TableBody>
           {cart.map((item, index) => (
             <>
               <TableRow key={index}>
                 <TableCell align='center'>
                   <img src={`${item.pictureUrl}`} style={{ width: 100, height: 100 }} cols={1} 
                    alt={item.title}
                    loading="lazy"
                    />
                 </TableCell>
                 <TableCell align='center'>{item.title + " x " + item.qty}</TableCell>
                 <TableCell align='center'>{item.price}</TableCell>
                 <TableCell align='center'>{getItemPrice()}</TableCell>
                 <TableCell align='center'>
                   <IconButton aria-label="delete" color="error" onClick = {() => deleteItem(item.id)}>
                     <DeleteIcon />
                   </IconButton>
                 </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
          <TableBody>
            {cart.map((item, index) => (
              <>
                <TableRow key={index}>
                 <TableCell align='center' colSpan={6}>
                    PRECIO FINAL: $ {getItemPrice() + ` (x ${item.qty} ${item.title})`}
                    <div className='mt-5'> 
                      {/* tengo que realizar la funcion para finalizar la compra */}
                      <Link to ='/checkout' className='btnCard btn'>
                        FINALIZAR COMPRA 
                     </Link>
                     <Box className='btnCard btn' onClick = {()=> emptyCart()}>
                       VACIAR CARRITO
                      </Box>
                    </div>
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
     </TableContainer>
     </>
     ):(
      <>
       <div className='text-center mt-5'>
          <p>TODAVIA NO AGREGASTE NINGUN PRODUCTO AL CARRITO</p>
          <Link className='btnCard btn' to={`/`}>EMPEZAR A COMPRAR</Link>
        </div>
      </>
    )}
    </>
  );
}

