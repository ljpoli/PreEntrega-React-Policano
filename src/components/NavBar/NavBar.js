import React from "react";
import "./navbar.css"
import CartWidget from "../Cart/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
        <ul class>
            
          <li>
            <a href="www.inicio.com">Inicio</a>
         </li>
          <li>
            <a href="www.acercade.com">Acerca de</a>
         </li>
          <li>
            <a href="www.contacto.com">Contacto</a>
         </li>
         <li>
            <CartWidget /> 
         </li>
        </ul>
        
    </nav>
  )
}
export default NavBar;