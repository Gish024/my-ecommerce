import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../Context/CartContext";
import ItemCart from '../ItemCart/itemCart';
import './Cart.css';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p className='carritoVacio'> No hay productos en el carrito</p>
        <Link to='/' className='enlace'>Hacer compras</Link>
      </>
    );
  }


  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <p className='totalPrice'>
        Total a abonar: ${totalPrice()}
      </p>
    </>
  )
}

export default Cart;