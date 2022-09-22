import React, { useEffect, useState } from 'react';
import Title from '../Title/Title';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const products = [
  {id: 1, stock: 10, sold: 0, name: "Garbanzos", description: "Orgánicos por 500 grs.", price: 130, images: "../resources/garbanzos.jpg", category: "legumbres"},
  {id: 2, stock: 20, sold: 0, name: "Lentejas", description: "Orgánicas por 500 grs.", price: 200, images: "../resources/lentejas.jpg", category: "legumbres"},
  {id: 3, stock: 15, sold: 0, name: "Porotos Moom", description: "Orgánicos por 500 grs.", price: 130, images: "../resources/porotosMoom.jpg", category: "legumbres"},
  {id: 4, stock: 20, sold: 0, name: "Porotos Morados", description: "Orgánicos por 500 grs.", price: 120, images: "../resources/porotosMorados.jpg", category: "legumbres"}, 
  {id: 5, stock: 9,  sold: 0, name: "Semillas de Girasol", description: "Orgánicas por 200 grs.", price: 110, images: "../resources/girasol.jpg", category: "legumbres"},
  {id: 6, stock: 15, sold: 0, name: "Avena Arrollada", description: "Orgánica por 500 grs.", price: 200, images: "../resources/avena-arrollada.jpg", category: "legumbres"},
  {id: 7, stock: 20, sold: 0,name: "Alubias", description: "Orgánica por 500 grs.", price: 120, images: "../resources/alubias.jpg", category: "legumbres"},
  {id: 8, stock: 15, sold: 0, name: "Maíz Pisingallo", description: "Orgánico por 300 grs.", price: 90, images: "../resources/pisiNgallo.jpg", category: "legumbres"},
  {id: 9, stock: 12, sold: 0, name: "Semillas de Lino", description: "Orgánica por 150 grs.", price: 100, images: "../resources/lino.jpg", category: "legumbres"},
  {id: 10, stock: 10, sold: 0, name: "Semillas de Sésamo Integral", description: "Orgánica por 150 grs.", price: 150, images: "../resources/sesamo.jpg", category: "legumbres"},
  {id: 11, stock: 20, sold: 0, name: "Quinoa", description: "Orgánica por 100 grs.", price: 200, images: "../resources/quinoa.jpg", category: "cereales"},
  {id: 12, stock: 25, sold: 0, name: "Tallarines de Quinoa", description: "Orgánicos por 500 grs.", price: 550, images: "../resources/Tallarines.jpg", category: "cereales"},
  {id: 13, stock: 20, sold: 0, name: "Copos de Maiz Naturales", description: "Orgánicos por 250 grs.", price: 180, images: "../resources/copos_maiz_naturales.jpg", category: "cereales"},
  {id: 14, stock: 20, sold: 0, name: "Aceite de Canola Krol", description: "Orgánico por 500 cc", price: 350, images: "../resources/aceiteCanola.jpg", category: "aceites"},
  {id: 15, stock: 25, sold: 0, name: "Aceite de Maní y Chia Nutra Sem", description: "Orgánico por 200 cc", price: 528, images: "../resources/aceitesManiChia.jpg", category: "aceites"},
  {id: 16, stock: 30, sold: 0, name: "Aceite de Coco Neutro Trever", description: "Orgánico por 250 ml", price: 339, images: "../resources/aceiteCoco.png", category: "aceites"},
  {id: 17, stock: 19, sold: 0, name: "Aceto Balsámico Miguel", description: "Orgánico por 250 ml", price: 340, images: "../resources/acetobalsamico.jpg", category: "aceites"}
];

const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const {categoryId} = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(products);
      }, 1000);      
    });
    if (categoryId) {
      getData.then(res => setData(res.filter(legumbre => legumbre.category === categoryId)));
    } else {
      getData.then(res => setData(res));
    }    
  }, [categoryId])

  return (
    <>
    <Title greeting='AlmaZen' />
    
    <ItemList data={data} />
    </>
  );
}

export default ItemListContainer;