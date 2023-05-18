import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
class App extends React.Component {
  render(){    
  return (
    <div>
      <NavBar />
      <Header title= "Tienda de Arte" />
   
    </div>
 
  );
}
}
export default App;
