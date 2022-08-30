import React from 'react';
import './Navbar.css';
import CartWidget from '../CartWidget';
import Logo from '../assets/img/LogoZen.png';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">  
                <img src={Logo} alt="" className="Logo"></img>                                            
                <p>Tienda de Productos Orgánicos</p>                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle active" href="index.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="../pages/verduras.html">Verduras de estación</a></li>                  
                                <li><a className="dropdown-item" href="../pages/frutas.html">Frutas de estación</a></li>
                                <li><a className="dropdown-item" href="../pages/legumbres.html">Legumbres</a></li>
                                <li><a className="dropdown-item" href="../pages/cereales.html">Cereales</a></li>
                                <li><a className="dropdown-item" href="../pages/aceites.html">Aceites</a></li>
                                <li><a className="dropdown-item" href="../pages/dulces.html">Dulces orgánicos</a></li>                                
                            </ul>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link active" href="../pages/nosotros.html" tabindex="-1" aria-disabled="false">Sobre Nosotros</a>
                        </li>                          
                        <li className="nav-item">
                           <a className="nav-link active" href="../pages/contacto.html" tabindex="-1" aria-disabled="false">Contacto</a>
                        </li> 
                        <li className="nav-item">
                           <a className="nav-link active" href="../pages/carrito.html">
                            <CartWidget />
                           </a>
                        </li>                  
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;





