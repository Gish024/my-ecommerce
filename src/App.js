//COMPONENTS
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar.js';
import LogoZen from './components/assets/img/LogoZen.png';


function App() {

  return (
    <>
      <NavBar/>
      <img src={LogoZen} alt=""/>
      <h3>Productos de temporada, seleccionados cuidadosamente y sencillamente deliciosos</h3>
      <ItemListContainer/>

    </>
  );
}

export default App;
