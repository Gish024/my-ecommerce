//COMPONENTS
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import React from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


  const App = () => {
    

    return (
        <>
          <NavBar/> 

          
          <ItemListContainer />

             
          <div className='Cards-Container'>                   
            <ItemDetailContainer />
          </div>
                        
      </>
      );
}
export default App;

