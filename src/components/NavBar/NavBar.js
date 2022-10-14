import React from 'react';
import './Navbar.css';
import CartWidget from '../CartWidget';
import Logo from '../assets/img/LogoZen.png';
import { NavLink } from 'react-router-dom'; 

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">  
                <img src={Logo} alt="" className="Logo"></img>                                            
                <p>Tienda de Productos Orgánicos</p>                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="dropdown-item" to='/'>Ver todo</NavLink>                            
                        </li>                                                 
                        <li className="nav-item">
                            <NavLink className="dropdown-item" to='/category/legumbres'>Legumbres</NavLink>                                                                                        
                        </li> 
                        <li className="nav-item">
                            <NavLink className="dropdown-item" to='/category/cereales'>Cereales</NavLink>                                                                                        
                        </li>
                        <li className="nav-item">
                        <NavLink className="dropdown-item" to='/category/aceites'>Aceites</NavLink>                                                                                        
                        </li> 
                        <li className="nav-item">
                           <NavLink className="nav-link active" to='/cart'>
                              <CartWidget />
                           </NavLink>
                        </li>                  
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;





