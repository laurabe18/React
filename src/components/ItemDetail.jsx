import React from 'react'

function ItemDetail({detail}) {

    const{title, description, pictureUrl, price, stock} = detail;
  return (
    <>
      <div className="card" style={{width: '18rem'}}>
      <img src={`../${pictureUrl}`} className="card-img-top"style={{width: 286 , height: 286}}  alt='Imagen' />  
      <div className="card-body">
         <h5 className="card-title">{title}</h5>
         <p className="card-text">
             DESCRIPCION: {description}
             <br />
             <br />
             MONTO: {price}
             <br />
             <br />
             STOCK: {stock}
         </p>
       </div>
    </div>
    </>
  )
}

export default ItemDetail