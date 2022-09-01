import React  from 'react'
import Item from '../Item/Item';

const ItemList = ({ data = [] }) => {

    return ( 
        data.map(productos => <Item key={productos.id} detalle={productos} />)
    );
} 

export default ItemList;