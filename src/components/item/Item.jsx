import React from 'react'
import { NavLink } from 'react-router-dom';


const Item = ({item}) => {

    const {title, pictureUrl} = item;

  return (
      <>
    <div className="card" style={{width: '18rem'}}>
      <img src={pictureUrl} className="card-img-top" style={{width: 286 , height: 286}}  alt= {title} />  
      <div className="card-body">
         <h5 className="card-title">{title}</h5>
         <NavLink to={`/item/${item.id}`} className="btnCard btn text-center">VER DETALLE</NavLink>
       </div>
    </div>
    </>
  )
}

export default Item
