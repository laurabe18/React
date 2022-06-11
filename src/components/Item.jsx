import React from 'react'

const Item = ({resultado}) => {

    const {title, description, price, pictureUrl, stock } = resultado;

  return (
      <>
    <div className="card" style={{width: '18rem'}}>
      <img src={pictureUrl} className="card-img-top"style={{width: 286 , height: 286}}  alt='Imagen' />  
      <div className="card-body">
         <h5 className="card-title">{title}</h5>
         <p className="card-text">
             DESCRIPCION: {description}
             <br />
             MONTO: {price}
             <br />
             STOCK: {stock}
         </p>
         <a href="#" className="btnCard btn btn-light">VER DETALLE</a>
       </div>
    </div>
    </>
  )
}

export default Item
