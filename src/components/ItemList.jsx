import React from 'react'
import Item from './Item'


const ItemList = ({resultado}) => {
  return (
    <div className='itemList'>
        {resultado?.map(resultado => < Item key = {resultado.id} resultado = {resultado}/> ) }
    </div>
  )
}

export default ItemList