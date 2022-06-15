import React from 'react'
import Item from './Item'


const ItemList = ({items}) => {
  return (
    <div className='itemList'>
        {items?.map(product => < Item key = {product.id} item = {product}/> ) }
    </div>
  )
}

export default ItemList