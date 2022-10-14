import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../Context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import TextField from '@mui/material/TextField';
import { db } from '../../firebase/firebaseConfig';
import './Checkout.css';
import AlertDialog from "./Message/AlertDialog";

const styles = {
    containerShop: {
      textAlign: 'center',
      paddingTop: 20,
    }
};

const Checkout = () => {

    const { cart, totalPrice } = useCartContext(); 

    const order = {      
        name: '',
        lastName: '',      
        email: '',
        phone: '',
        addres: '',
        items: cart.map(product => ({ id: product.id, name: product.name, price: product.price, quantity: product.quantity })),
          total: totalPrice(),
    };

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

    return (  
        <>
          <div style={styles.containerShop}>      
            <h4>Completa tus Datos</h4>
            <h6>Para confirmar la compra ingresa tus datos</h6>
            <form className="FormContainer" onSubmit={onSubmit}>
               <TextField 
                   placeholder="Name" 
                   style={{ margin:10, width: 400 }}
                   name='name'
                   values={values.name}
                   onChange={handleOnChange}
                /> 
                <TextField 
                   placeholder="lastName" 
                   style={{ margin:10, width: 400 }}
                   name='lastName'
                   values={values.lastName}
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
                
                <Link to='/' className='Return'>Volver al Inicio</Link>
            </form>
            {purchaseID && <AlertDialog purchaseID={purchaseID} />}        

        </div>
    </>
  );
}
export default Checkout;


