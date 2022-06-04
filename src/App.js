
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {

  const onAdd = (count)=>{
     alert(`Tienes ${count} productos agregados al carrito`)
  }

  return (
    <>
     <NavBar/>
     <ItemListContainer greeting={`bienvenido a Blanqueria Oeste`} nombre={`Christian`} />
     <ItemCount inicial ={1} stock ={10} onAdd ={onAdd} />
    </>
  );
}

export default App;
