
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './Context/CartContext';
import Checkout from './components/Cart/Checkout';


  function App () {    
    
    return (
      <>
        <BrowserRouter>          

          <CartProvider>
          
            <NavBar />

            <Routes>

              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />              
              <Route path='/cart' element={<Cart />} />              
              <Route path='/detail/:detailId' element={<ItemDetailContainer />} />
              <Route path='/checkout' element={<Checkout />} /> 

            </Routes> 

          </CartProvider>                              
                       
        </BrowserRouter>                       
      </>
    );
}
export default App;

