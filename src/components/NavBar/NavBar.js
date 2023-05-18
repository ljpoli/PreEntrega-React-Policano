import React from "react";
import "./navbar.css"

const NavBar = () => {
  return (
    <nav className="navbar">
        <ul>
            
          <li>
            <a href="www.inicio.com">Inicio</a>
         </li>
          <li>
            <a href="www.acercade.com">Acerca de</a>
         </li>
          <li>
                <a href="www.contacto.com">Contacto</a>
         </li>
        </ul>
    </nav>
  )
}
export default NavBar;