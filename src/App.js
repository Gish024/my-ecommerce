//COMPONENTS
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import './App.css';




  export default function App() {

    //const onAdd = (qty) => {
      //alert(`Agregaste ${qty} productos a tu carrito de compra`);
    //};

    return (
        <>
          <NavBar/> 
  
          <ItemListContainer />                
          
                        
      </>
      );
}


