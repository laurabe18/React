import React from 'react'

const Items = ({resultado}) => {

    const {name, medida, descripcion, monto, image, stock } = resultado

  return (
      <>
    <div className="card" style={{width: '18rem'}}>
      <img src= {'/image/${image}'} className="card-img-top" alt='' />
      <div className="card-body">
         <h5 className="card-title">{name}</h5>
         <p className="card-text">
             Descripcion: {descripcion}
             <br />
             Medida: {medida}
             <br />
             Monto: {monto}
             <br />
             Stock: {stock}
         </p>
         <a href="#" className="btn btn-primary">Ver detalle</a>
       </div>
    </div>
    </>
  )
}

export default Items
