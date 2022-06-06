import React from 'react'
import Items from './Items'

const ItemList = ({resultado}) => {
  return (
    <div>
        {resultado?.map(resultado => < Items key = {resultado.id} resultado = {resultado}/> ) }
    </div>
  )
}

export default ItemList