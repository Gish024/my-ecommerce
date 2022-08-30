import React from 'react';
import { useState } from 'react';

import './ItemCount.css';

const ItemCount = ({ onAdd, initial, stock }) => {

    const [qty, setQty] = useState(initial);

    const addProduct = (num) => {
        setQty(qty + num);
    };

    return (
        <div className="count-container">
            <div className="count-container__contador">
                <button className="count-container__button" onClick={() => addProduct(-1)} disabled={qty === initial}>
                -
                </button>
                <span className="count-container__qty">{qty}</span>
                <button className="count-container__button" onClick={() => addProduct(+1)} disabled={qty === stock}>
                +
                </button>
            </div>

            <button className="button-primary" onClick={() => {onAdd(qty);
                }} disabled={stock === 0 ? true : null}> 
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;    

   
    



