import React, { useEffect, useState } from 'react';

import ItemDetail from './ItemDetail';

const item = { id: 1, stock: 20, sold: 0, name: "Alubias", description: "Porotos Orgánicos por 500 grs.", price: 120, images: "../resources/alubias.jpg"}

const ItemDetailContainer = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(item);
      }, 2000);      
    });
    getData.then(res => setData(res));
  }, [])
  
  return (
    <ItemDetail data={data} />
  );
}

export default ItemDetailContainer;
