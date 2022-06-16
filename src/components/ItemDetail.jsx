import React from 'react'

function ItemDetail({detail}) {

    const{title, description, pictureUrl, price, stock} = detail;
  return (
    <>
      <div className="card" style={{width: '25rem'}}>
      <img src={`../${pictureUrl}`} className="card-img-top"style={{width: 398 , height: 446}}  alt='Imagen' />  
      <div className="card-body">
         <h5 className="card-title">{title}</h5>
         <p className='card-text'>
          DESCRIPCION: {description} 
          <br />
          MONTO: {price} 
          <br />
          STOCK: {stock} 
          <br />
         </p>
       </div>
    </div>
    </>
  )
}

export default ItemDetail