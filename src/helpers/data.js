const productsMock = [
    {
     id: 1 ,
     category: 'sabanas',
     title: 'Sabana AFA',
     description: 'Medida: 1 1/2 plaza. 100%Poliester // Sabana: 160X235cm aprox, ajustable: 90X190cm +25cm, 1 funda 50X80cm aprox',
     price: 2500 , 
     pictureUrl: 'image/sabanaAfa-min.jpg' , 
     stock: '10 unidades',
    },
    {
    id: 2 ,
    category: 'sabanas', 
    title: 'Sabana Kavanagh Soft Touch', 
    description: '2 1/2 plaza. Medidas:150x190cm . Trae 2 Fundas y viene en varios colores a elegir',
    price: 3500 , 
    pictureUrl: 'image/kavanaghSoftTouch-min.jpg',
    stock: '8 unidades',
    },
    {
      id: 3 , 
      category: 'sabanas',
      title: 'Sabana Casa Blanca', 
      description: 'Medida: 2 1/2 plaza. Juego de Sábanas de 144 hilos. Incluye 3 piezas. Para los que aman los diseños con corazones en tonos rosas.',
      price: 3800 , 
      pictureUrl: 'image/sabanasCasaBlanca-min.jpg' ,
      stock: '5 unidades',
    },
    {
      id: 4 , 
      category: 'toallas',
      title: 'Toallon Escudo San Lorenzo', 
      description: 'Medida: 1,40 x 1,75 cm. Grande, de gran absorcion y secado rapido',
      price: 2200, 
      pictureUrl: 'image/toallonEscudo-min.jpeg',
      stock: '30 unidades',
    },
    {
      id: 5, 
      category: 'toallas',
      title: 'Toallon y toalla', 
      description: 'Medida: TOALLA (65x45cm), TOALLON (130x65cm). Grandes, suaves y de gran poder de absorcion. Vienen en varios colores a elegir.', 
      price: 2500, 
      pictureUrl: 'image/toallonYtoalla-min.jpg' ,
      stock: '12 unidades',
    },
    {
      id: 6, 
      category: 'cocina',
      title: 'Individual', 
      description: 'Medida: 0,60 x 0,40cm. Hermoso individual para resaltar tu mesa delicadamente. Disponible en tre colores: plata, dorado y cobre.',
      price: 500, 
      pictureUrl: 'image/individuales-min.jpg',
      stock: '50 unidades'
    },
    {
    id: 7, 
    category: 'cocina',
    title: 'Paño Absorbente', 
    description: 'Medida: 38 x 50cm. Paño Absorbente Estampado, varios diseños para elegir',
    price: 200, 
    pictureUrl: 'image/pañoAbsorbenteEstampado-min.jpg',
    stock: '50 unidades'
    },
    {
    id: 8 ,
    category: 'cortinas', 
    title: 'Cortina de Baño de Teflon', 
    description: 'Medidas:0,80 x 1,80 cm. Estampada Programada, varios motivos para elegir',
    price: 750 , 
    pictureUrl: 'image/cortinaBañoTeflon-min.jpg',
    stock: '8 unidades',
    },
    {
    id: 9 ,
    category: 'cortinas', 
    title: 'Cortina de Baño Vinilica', 
    description: 'Medidas:0,80 x 1,80 cm . Tenemos varios modelos para que elijas',
    price: 600 , 
    pictureUrl: 'image/cortinaBañoVinilica-min.jpg',
    stock: '12 unidades',
    },
    {
    id: 10 ,
    category: 'cortinas', 
    title: 'Protector cortina de Baño', 
    description: 'Protector Cortina de Baño 100 micrones, reforzada, con anillas metalicas para un mejor agarre',
    price: 300 , 
    pictureUrl: 'image/protectorCortinaBaño-min.jpg',
    stock: 'Sin Stock',
    },    
  ]

  export default productsMock;