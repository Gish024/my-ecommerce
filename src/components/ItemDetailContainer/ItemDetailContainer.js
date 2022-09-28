import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';



const ItemDetailContainer = () => {

  const [data, setData] = useState({});

  const {detailId} = useParams();
  

  useEffect(() => {    
    const queryDoc = doc( db, 'almaZen', detailId);
    getDoc(queryDoc)
      .then(res => setData({ id: res.id, ...res.data() }))
    
  }, [detailId])
  
  return (
    <ItemDetail data={data} />
  );
}

export default ItemDetailContainer;
