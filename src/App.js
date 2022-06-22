import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from "./components/Cart";
import MyProvider from "./components/context/CartContext";



function App() {

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
          </Routes>
        </MyProvider>
     </BrowserRouter>
    </>
  );
}

export default App;
