import React from "react";
import { useCartContext } from "../../Context/CartContext";
import './itemCart.css';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();

    return (            
            <div className="itemCart">
                <img src={product.images} alt={product.name} />
                <div>            
                    <p>Producto: {product.name}</p>
                    <p>Cantidad: {product.quantity}</p>
                    <p>Precio unitario: $ {product.price}</p>
                    <p>Subtotal: ${product.quantity * product.price}</p>
                    <button onClick={() => removeProduct(product.id)}>eliminar</button>
                </div>
            </div>
    )
}
export default ItemCart;