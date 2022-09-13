import React, { useState } from "react";
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";


const ItemDetail = ({ data }) => {

  const [goToCard, setGoToCard] = useState(false);

  const onAdd = (quantity) => {
    setGoToCard(true);
  }

  return (
    <div className='container'>
      <div className='detail'>
        <img src={data.images} alt={data.name} className="card-img-top"></img> 
        <div className="content">
          <h4>{data.name}</h4>
          <h6>{data.description}</h6>
          <p>${data.price}</p>
          <span>Stock Disponible: {data.stock} unidades</span>
          {
            goToCard
            ? <Link to='/cart'>Finalizar Compra</Link>
            : <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
          }         
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;