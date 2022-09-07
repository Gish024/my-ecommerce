import React from 'react';

import './ItemDetail.css';

const ItemDetail = ({data}) => {
  return (
    <div className='container'>
      <div className='detail'>
        <img src={data.images} alt={data.name} className="card-img-top"></img> 
        <div className="content">
          <h4>{data.name}</h4>
          <h6>{data.description}</h6>
          <p>${data.price}</p>
          <span>Stock Disponible: {data.stock}</span>
          <button className="btn btn-primary" type="button">Comprar</button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;