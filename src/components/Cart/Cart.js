import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../Context/CartContext";
import ItemCart from '../ItemCart/itemCart';
import './Cart.css';
import { addDoc, collection } from "firebase/firestore";
import TextField from '@mui/material/TextField';
import MessageSuccess from "./Message/Message";
import { db } from '../../firebase/firebaseConfig';

const order = {       
  user: '',      
  email: '',
  phone: 0,
  addres: ''      
};

const styles = {
  containerShop: {
    textAlign: 'center',
    paddingTop: 20,
  }
};

const Cart = () => {
  const { cart, totalPrice } = useCartContext();  

  
  const [values, setValues] = useState(order);

  const [purchaseID, setPurchaseID] = useState('');

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  
  const onSubmit = async (e) => {
		e.preventDefault();
		console.log(values);
		
		const docRef = await addDoc(collection(db, 'orders'), {
			values,
		});
		
		setPurchaseID(docRef.id);
		setValues(order);
	};
    
  if (cart.length === 0) {
    return (
      <>
        <p className='carritoVacio'> No hay productos en el carrito</p>
        <img src="resources/portada.jpg" alt="" className="portada"></img>         
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

      <div style={styles.containerShop}>
        <h4>Completa tus Datos</h4>
        <form className="FormContainer" onSubmit={onSubmit}>
            <TextField 
               placeholder="User" 
               style={{ margin:10, width: 400 }}
               name='user'
               values={values.user}
               onChange={handleOnChange}
            />            
            <TextField 
               placeholder="email" 
               style={{ margin:10, width: 400 }}
               name='email'
               values={values.email}
               onChange={handleOnChange}
            />
            <TextField 
               placeholder="phone" 
               style={{ margin:10, width: 400 }}
               name='phone'
               values={values.phone}
               onChange={handleOnChange}
            />
            <TextField 
               placeholder="Addres" 
               style={{ margin:10, width: 400 }}
               name='addres'
               values={values.addres}
               onChange={handleOnChange}
            />
            <button onSubmit className='btnASendAction'>Generar Orden de Compra</button>
        </form>
        {purchaseID && <MessageSuccess purchaseID={purchaseID} />}

      </div>
    </>
  );
};

export default Cart;
