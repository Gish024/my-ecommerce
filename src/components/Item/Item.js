import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';


const Item = ({ detalle }) => {
    
  return (            
    <Link to={`/detail/${detalle.id}`} className='container'>
      <div className='card'>
        <img src={detalle.images} alt={detalle.name} />
        <h4>{detalle.name}</h4>
        <p>$ {detalle.price}</p>
        <button className="btn btn-success" type="button">Ver Mas Info</button>
      </div>               
    </Link>       
       
  );
};

export default Item;