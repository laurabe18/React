import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CartWidget({items}) {
  return (
    <>
    <ShoppingCartIcon style={{ color: "f06292", fontSize: 30 }}/>
    {items}
    </>
  );
}
