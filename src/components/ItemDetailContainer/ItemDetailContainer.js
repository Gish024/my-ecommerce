import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = ({ greeting }) => {
  
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let items = [
        { id: 1, stock: 10, sold: 0, name: "Garbanzos", description: "Orgánicos por 500 grs.", price: 130, images: "../resources/garbanzos.jpg"},
        {id: 2, stock: 20, sold: 0, name: "Lentejas", description: "Orgánicas por 500 grs.", price: 200, images: "../resources/lentejas.jpg"},
        {id: 3, stock: 15, sold: 0, name: "Porotos Moom", description: "Orgánicos por 500 grs.", price: 130, images: "../resources/porotosMoom.jpg"},
        {id: 4, stock: 20, sold: 0, name: "Porotos Morados", description: "Orgánicos por 500 grs.", price: 120, images: "../resources/porotosMorados.jpg"}
    ];

    new Promise((res, rej) => {
        
      setTimeout(() => {
        res(items);
      }, 2000);
    })
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        setError(err);
      });
      
  }, []);

  return (
    <>
      <div className="Greeting-div">
        <h1>{greeting.name}</h1>
        <h6>{greeting.description}</h6>
      </div>
      <div>
         {error && alert("Error en la carga de Datos, reintente mas tarde!")}
        <ItemDetail items={ items } />
      </div>
    </>
  );
};

export default ItemDetailContainer;
