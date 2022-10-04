import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../Context/CartContext";
import ItemCart from '../ItemCart/itemCart';
import './Cart.css';
import { db } from '../../firebase/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const order = {
    buyer: {
      name: 'Soraya',
      email: 'soraya1024@gmail.com',
      phone: 34156875145,
      addres: 'España N° 2035'
    },
    items: cart.map(product => ({ id: product.id, name: product.name, price: product.price, quantity: product.quantity })),
    total: totalPrice(),
  }

  const handleClick = () => {
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then(({ id }) => console.log(id))
  }

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
      <button onClick={handleClick} className='Finish'>Generar orden de compra</button>
    </>
  )
}

export default Cart;