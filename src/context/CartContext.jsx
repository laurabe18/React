import React, { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();

const {Provider} = CartContext;

const MyProvider = ({children}) =>{
    const[cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []);
    console.log(cart);

    //METODO SAME-ITEMDETAIL, se va a encargar de detectar si el producto ya se encuentar en el carrito y accionara o no, devolviendo un booleano.
    const isInCart =(id)=>{
       return cart.some(product => product.id === id)
    }

    //ITEMDETAIL, se encarga de agregar los productos al carrito sin duplicarlos, aumentando la cant en caso de requerirlo.
    const addItem =(item, qty)=>{
        const newItem = {
            ...item,
            qty
        }
        if(isInCart(newItem.id)){
            //BUSCAMOS UN PRODUCTO POR SU ID EN EL CARRITO
         const findProduct = cart.find(product => product.id === newItem.id)
            //SE BUSCA DONDE ESTA ESE PRODUCTO EN EL ARRAY DE OBJETOS, EN QUE POSICION SE ENCUENTRA
        const productIndex = cart.indexOf(findProduct)
           //QUEREMOS ACCEDER A SU CANTIDAD POR ESO SE REALIZA UN ARRAY AUX, PORQUE NO PODEMOS MANIPULAR EL ESTADO, PERO SI UNA COPIA
        const auxArray = [...cart]
        auxArray[productIndex].qty += qty
          //  EL ARRAY SE SETEA CON EL NUEVO PRODUCTO
        setCart(auxArray)
        }else{
            setCart([...cart, newItem])
        }
    }
 
    //Vaciar el carrito-CART-BOTON
    const emptyCart =()=>{
        setCart([])
    }

    //Metodo FILTER-CART- se encartga en funcion del ID, de retornar un nuevo array sin el producto seleccionado.
    const deleteItem =(id)=>{
        return setCart (cart.filter(product => product.id !== id))
    }

    //Metodo REDUCE-CARTWIDGE- Retorna el total de unidades que tiene nuestro state cart.
    const getItemQty =()=>{
        return cart.reduce((acc, product) => acc += product.qty, 0)
    }

    //Metodo REDUCE-CART, retorna el precio total del carrito
    const getItemPrice =()=>{
        return cart.reduce((acc, product) => acc += product.qty * product.price, 0)
    }

    useEffect(() => {
      
     localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])
    

   return <Provider value = {{cart, isInCart, addItem, emptyCart, deleteItem, getItemQty, getItemPrice}}>{children}</Provider>
}

export default MyProvider