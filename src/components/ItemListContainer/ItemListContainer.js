import React, { useEffect, useState } from 'react';
import Title from '../Title/Title';
import ItemList from './ItemList';

const productos = [
  { id: 1, stock: 10, sold: 0, name: "Garbanzos", description: "Orgánicos por 500 grs.", price: 130, images: "../resources/garbanzos.jpg"},
  {id: 2, stock: 20, sold: 0, name: "Lentejas", description: "Orgánicas por 500 grs.", price: 200, images: "../resources/lentejas.jpg"},
  {id: 3, stock: 15, sold: 0, name: "Porotos Moom", description: "Orgánicos por 500 grs.", price: 130, images: "../resources/porotosMoom.jpg"},
  {id: 4, stock: 20, sold: 0, name: "Porotos Morados", description: "Orgánicos por 500 grs.", price: 120, images: "../resources/porotosMorados.jpg"}
];

const ItemListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);      
    });
    getData.then(res => setData(res));
  }, [])

  return (
    <>
    <Title greeting='AlmaZen' />
    
    <ItemList data={data} />
    </>
  );
}

export default ItemListContainer;