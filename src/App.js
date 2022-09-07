//COMPONENTS
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import { useState } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

  const App = () => {

    const [counter, setCounter] = useState(0)

    const handlerCounterUp = () => {
      setCounter((prev) => prev + 1);
    }
    

    const handlerCounterDown = () => {
      setCounter((prev) => prev - 1);
    }

    return (
        <>
          <NavBar/> 

          
          <ItemListContainer />

          <div className='CounterSection'>
            <p>Cantidad de Productos en tu carrito de compras: {counter}</p>
            <div className='btn-section'>
              <button onClick={handlerCounterUp}>Incrementar</button>
              <button onClick={handlerCounterDown}>Disminuir</button>
            </div>
          </div>    
          <div className='Cards-Container'>                   
            <ItemDetailContainer />
          </div>
                        
      </>
      );
}
export default App;

