import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';


const Item = ({ detalle }) => { 
    
  return ( 
    <div className='card'>
      <img src={detalle.images} alt={detalle.name} />
      <h4>{detalle.name}</h4>
      <p>$ {detalle.price}</p>
      <Link to={`/detail/${detalle.id}`}>
        <button className="btn btn-success" type="button">
          Mas Info
        </button>
      </Link>
  </div>          
    
                   
   
       
  );
};

export default Item;