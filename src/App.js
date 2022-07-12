import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyProvider from "./context/CartContext";
import NavBar from './components/layout/NavBar';
import ItemListContainer from './components/item/ItemListContainer';
import ItemDetailContainer from './components/item/ItemDetailContainer';
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import Footer from './components/layout/Footer';

import { initializeApp } from "firebase/app";


function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyBDaFSG9BpVEZLYmG-RLXwv6esuZCaTBak",
    authDomain: "ecommerce-react-ce8ba.firebaseapp.com",
    projectId: "ecommerce-react-ce8ba",
    storageBucket: "ecommerce-react-ce8ba.appspot.com",
    messagingSenderId: "147613745003",
    appId: "1:147613745003:web:6359ce7f23c8e99243162e"
  };
  
  
  initializeApp(firebaseConfig);

  return (
    <>
     <BrowserRouter>
        <MyProvider>
         <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:id' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element ={<Cart/>}/>
            <Route path='/checkout' element ={<Checkout/>}/>
          </Routes>
          <Footer />
        </MyProvider>
     </BrowserRouter>
    </>
  );
}

export default App;
