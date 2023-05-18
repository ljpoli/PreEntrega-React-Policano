import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CardProducts from "./components/CardProducts/CardProducts";


  class App extends React.Component{
    constructor(){
        super();
        this.state = {
            counter: 0,
        };
    }
  handlerCounterUp = () => {
  this.setState({counter: this.state.counter + 1 });
    };
  handlerCounterDown = () => {
    this.setState({counter: this.state.counter - 1 });
    };



  render(){    
   return (
    <div className="App">
      <NavBar /> 
      <Header title= "Tienda de Arte" /> 
      <ItemListContainer greeting= "Puro Arte"/> 
      <div className="ProductsSection">
      <CardProducts name= "Milo Locket-Marino" 
                    precio= "$10000" 
                    description= "Pintura acrílica, de 1 x 1 mt"
                    img= "https://http2.mlstatic.com/D_NQ_NP_688282-MLA54709307511_032023-O.webp"/>
      <CardProducts name= "Milo Locket-Urbano" 
                    precio= "$12000" 
                    description= "Pintura acrílica de 1 x 1,2 mts"
                    img= "https://http2.mlstatic.com/D_NQ_NP_688282-MLA54709307511_032023-O.webp"/>
      <CardProducts name= "Milo Locket-Desamor" 
                    precio= "$18000" 
                    description= "Pintura acrílica de 1.2 x 1.5mts"
                    img= "https://http2.mlstatic.com/D_NQ_NP_688282-MLA54709307511_032023-O.webp"/>
      </div>
      <div className="CounterSection">
         <p>Counter: {this.state.counter}</p>
         <div className="btn-section">
          <button onClick={this.handlerCounterUp}>Aumentar</button>
          <button onClick={this.handlerCounterDown}>Disminuir</button>
         </div>
        </div>
    </div>
 
  );
}
}

export default App;
