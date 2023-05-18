import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CardProducts from "./components/CardProducts/CardProducts";

class App extends React.Component {
  render(){    
   return (
    <div className="App">
      <NavBar /> 
      <Header title= "Tienda de Arte" /> 
      <ItemListContainer /> 
      <div className="ProductsSection">
      <CardProducts name= "Milo Locket-Marino" 
                    precio= "$10000" 
                    descripcion= "Pintura acrílica, de 1 x 1 mt"
                    img= "img src= ./milo.webp"/>
      <CardProducts name= "Milo Locket-Urbano" 
                    precio= "$12000" 
                    descripcion= "Pintura acrílica de 1 x 1,2 mts"
                    img= "img src= ./milo2.webp"/>
      <CardProducts name= "Milo Locket-Desamor" 
                    precio= "$18000" 
                    descripcion= "Pintura acrílica de 1.2 x 1.5mts"
                    img= "img src=./milo3.webp"/>                  
      </div>
    </div>
 
  );
}
}
export default App;
