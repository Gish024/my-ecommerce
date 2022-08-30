//import React, { useState, useEffect } from "react";
import React, { Component } from 'react';

class ItemCount extends Component {

    constructor() {
      super();

      this.state = {
        counter: 1,
      };
    }

    CounterUp = () => {
        let stock = 10; 
        if(this.state.counter < stock) {
            this.setState({counter : this.state.counter + 1})
        }
    }

    CounterDown = () => {
        if(this.state.counter > 0) {
           this.setState({counter : this.state.counter - 1})
        }
    }

    render() { 
        return (                   
           <div style={{ textAlign: 'center' }} className= 'ItemCounter'>
               <p>Contador: {this.state.counter}</p>
               <div className='btn-section'>
                   <button onClick={this.CounterUp}>Incrementar</button>
                   <button onClick={this.CounterDown}>Disminuir</button>
                </div>
            </div>
        )};
}
    
export default ItemCount;
    
    



