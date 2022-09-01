import React from 'react'
import './Item.css'

const Item = ({ detalle }) => {
    
  return (            
            <div className="container">
                <div className="card">
                    <img src={detalle.images} alt={detalle.name} className="card-img-top"></img> 
                    <div className="card-body">
                       <h4>{detalle.name}</h4>
                       <h6>{detalle.description}</h6>
                       <p>${detalle.price}</p>
                       <span>Stock Disponible: {detalle.stock}</span>
                       <button className="btn btn-primary" type="button">Comprar</button>
                    </div>
                </div>
            </div>          
  );
};

export default Item;