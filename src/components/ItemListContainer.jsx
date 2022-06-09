import React, { useEffect, useState } from 'react'
import '../App.css';
import ItemList from './ItemList';


export default function ItemListContainer({greeting, name}) {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [resultado, setResultado] = useState([])

  useEffect(() => { 
   const producto = new Promise ((res, rej) =>{
    setTimeout(()=>{
      res([
        {
         id: 1213 ,
         title: 'Sabana AFA',
         description: 'Medida: 1 1/2 plaza. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Blanditiis qui eos, eligendi repellat tenetur optio!',
         price: '$ 2.500' , 
         pictureUrl: 'sabana-afa-min.jpg' , 
         stock: '10 unidades',
        },
        {
        id: 1314 , 
        title: 'Sabana Brodery', 
        description: 'Medida: 2 1/2 plaza. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Blanditiis qui eos, eligendi repellat tenetur optio!',
        price: '$ 3.500' , 
        pictureUrl: 'sabana-brodery-min.jpg',
        stock: '8 unidades',
        },
        {
          id: 1415 , 
          title: 'Sabana Casa Blanca', 
          description: 'Medida: 2 1/2 plaza. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Blanditiis qui eos, eligendi repellat tenetur optio!',
          price: '$ 3.800' , 
          pictureUrl: 'sabanas-casaBlanca-min.jpg' ,
          stock: '5 unidades',
        },
        {
          id: 1617 , 
          title: 'Toallon Escudo', 
          description: 'Medida: 0,90 x 0,70 cm. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Blanditiis qui eos, eligendi repellat tenetur optio!',
          price: '$ 2.200', 
          pictureUrl: 'toallon-escudo-min.jpeg',
          stock: '30 unidades',
        },
        {
          id: 1819, 
          title: 'Toallon y toalla', 
          description: 'Medida: 1,20 x 0,70 cm. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Blanditiis qui eos, eligendi repellat tenetur optio!', 
          price: '$ 2.500', 
          pictureUrl: 'toallonYtoalla-min.jpg' ,
          stock: '12 unidades',
        },
        {
          id: 1011, 
          title: 'Individual', 
          description: 'Medida: 0,60 x 0,40cm. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Blanditiis qui eos, eligendi repellat tenetur optio!',
          price: '$ 500', 
          pictureUrl: 'individuales-min.jpg',
          stock: '50 unidades'
        },
      ]);
    }, 2000);
  });

  producto
  .then((result) => {
   setResultado(result);
  })
  .catch((error) => {
   setError(true);
   console.log(error);
  })
  .finally(() => {
    setLoading(false);
  });
  
 }, []);


  return (
    <>
    <h1 className='myH1'>
        {`Hola ${name} , ${greeting}`}
    </h1>
    <div>{loading && 'loading...'}</div>
    <div>{error && 'Hubo un error con la carga del producto'}</div>
    <ItemList resultado = {resultado}/>
    </>
  );
}

