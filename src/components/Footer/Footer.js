import React from 'react';
import Facebook from '../assets/img/facebook.png';
import Instagram from '../assets/img/instagram.png';
import Whatsapp from '../assets/img/whatsapp.png';
import Icoubi from '../assets/img/icoubi.png';
import './Footer.css';

const Footer = () => {

    return (
        <footer className='my-5 pt-5 text-muted text-xl-center text-small'>
            <p className='mb-1'>&copy; 2022 AlmaZen</p>
            <h4>Todos los derechos reservados</h4>
            <ul className='list-inline'>
              <span>Privacidad</span>
              <span>Términos</span>
              <span>Contacto</span>              
            </ul>
            <div className='redes'>           
                <img src={Facebook} alt="" className="facebook"></img>
                <img src={Instagram} alt="" className="instagram"></img>                  
                <img src={Whatsapp} alt="" className="whatsapp"></img>
                <img src={Icoubi} alt="" className="icoubi"></img>
            </div>
        </footer>
    )
}

export default Footer;             

