import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import Title from '../Title/Title';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';




const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const {categoryId} = useParams();
  

  useEffect(() => {
    const queryCollection = collection(db, 'almaZen');    

    if (categoryId) { 
      const queryFilter = query(queryCollection, where('category', '==', categoryId));
      getDocs(queryFilter)
        .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))    
    } else {
      getDocs(queryCollection)
        .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))    
    }   
  }, [categoryId])   
    
    
  return (
    < div className='CardListContainer'>
      <Title greeting='AlmaZen' />      
           
      <ItemList data={data} />    
    </div>
  );
}

export default ItemListContainer;