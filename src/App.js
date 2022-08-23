//COMPONENTS
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';



function App() {

  return (
    <>
      <NavBar/>
      <h3>Productos de temporada, seleccionados cuidadosamente y sencillamente deliciosos</h3>
      <ItemListContainer/>

    </>
  );
}

export default App;
