import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import MyProvider from "./components/context/CartContext";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

import { initializeApp } from "firebase/app";
import Checkout from "./components/Checkout";




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
        </MyProvider>
     </BrowserRouter>
    </>
  );
}

export default App;
