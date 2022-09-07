import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  return (
    <div className="container-item-count">
      <div className="container-counter">
        <div className="container-buttons">
          <button className="Icons-counter" onClick={() => (counter === 0 ? "" : setCounter(counter - 1))}/>
          <p className="Icons-counter">{counter}</p>
          <button className="Icons-counter" onClick={() => (stock <= counter ? "" : setCounter(counter + 1))}/>
        </div>

        <button className="button-add-cart" onClick={ () => counter === 0
              ? alert("No hay productos para agregar")
              : onAdd(counter)
        }> Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
   
    



