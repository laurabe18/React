import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from './context/CartContext';

export default function CartWidget() {
  const {getItemQty} = useContext(CartContext)
  return (
    <>
    <ShoppingCartIcon style={{ color: "f06292", fontSize: 30 }}/>
    {getItemQty() > 0 ? getItemQty() : 0}
    </>
  );
}
