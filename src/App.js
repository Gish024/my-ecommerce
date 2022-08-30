//COMPONENTS
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemCount from './components/ItemListContainer/ItemCount';


  export default function App() {

    const onAdd = (qty) => {
      alert(`Agregaste ${qty} producto a tu carrito de compra`);
    };

    return (
        <>
          <NavBar/> 
  
          <ItemListContainer />     
                
          <h3>Productos de temporada, seleccionados cuidadosamente y sencillamente deliciosos</h3>
                
          <ItemCount onAdd={onAdd} initial={1} stock={10} />  
      </>
      );
}


