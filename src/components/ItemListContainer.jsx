import React, { useEffect, useState } from 'react'
import '../App.css';
import ItemList from './ItemList';

export default function ItemListContainer({greeting, nombre}) {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [resultado, setResultado] = useState([])

  useEffect(() => { 
   const producto = new Promise ((res, rej) =>{
    setTimeout(()=>{
      res([
        {
         id: 1213 ,
         name: 'Sabana AFA',
         medida: '1 1/2 plaza',
         descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Blanditiis qui eos, eligendi repellat tenetur optio!',
         monto: '$ 2.500' , 
         image: 'sabana-afa-min.jpg' ,
         stock: '10 unidades',
        },
        {
        id: 1314 , 
        name: 'Sabana Brodery', 
        medida: '2 1/2 plaza', 
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Blanditiis qui eos, eligendi repellat tenetur optio!',
        monto: '$ 3.500' , 
        image: '/image/sabana-brodery-min.jpg',
        stock: '8 unidades',
        },
        {
          id: 1415 , 
          name: 'Sabana Casa Blanca', 
          medida: '2 1/2 plaza', 
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Blanditiis qui eos, eligendi repellat tenetur optio!',
          monto: '$ 3.800' , 
          image: 'sabana-casaBlanca-min.jpg' ,
          stock: '5 unidades',
        },
        {
          id: 1617 , 
          name: 'Toallon Escudo', 
          medida: '0,90 x 0,70 cm', 
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Blanditiis qui eos, eligendi repellat tenetur optio!',
          monto: '$ 2.200', 
          image: 'toallon-escudo-min.jpeg',
          stock: '30 unidades',
        },
        {
          id: 1819, 
          name: 'Toallon y toalla', 
          medida: '1,20 x 0,70 cm',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Blanditiis qui eos, eligendi repellat tenetur optio!', 
          monto: '$ 2.500', 
          image: 'toallonYtoalla-min.jpg' ,
          stock: '12 unidades',
        },
        {
          id: 1011, 
          name: 'Individual', 
          medida: '0,60 x 0,40cm',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Blanditiis qui eos, eligendi repellat tenetur optio!',
          monto: '$ 500', 
          image: 'individuales-min.jpg',
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
        {`Hola ${nombre} , ${greeting}`}
    </h1>
    <div>{loading && 'loading...'}</div>
    <div>{error && 'Hubo un error con la carga del producto'}</div>
    <ItemList resultado = {resultado}/>
    </>
  );
}

