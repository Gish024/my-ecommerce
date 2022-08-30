//COMPONENTS
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import React, { Component } from 'react';
import ItemCount from './components/ItemListContainer/ItemCount.js';


  class App extends Component {

    render()  { 
      return (
        <>
          <NavBar/> 
  
          <ItemListContainer />     
                
          <h3>Productos de temporada, seleccionados cuidadosamente y sencillamente deliciosos</h3>
                
          <ItemCount stock="10" initial="1"/>  
      </>
      );
    };
}

export default App;
