import './Header.css';
import logo from '../Imagenes/Logo5.png';
import {FaBars} from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({color, nombre}) {

  const [mostrarNav, setMostrarNav] = useState(false);

  return (
    <div className="Header">
      <header style={{backgroundColor: color}} className="Header-header">
        <Link className="linkPrincipal" to='/'><img src={logo} className="Header-logo" alt="logo" /></Link>
        <div>
          <input type="text" className="Header-buscar" placeholder="Buscar" />
          <FaBars onClick={() => {setMostrarNav(!mostrarNav)}}/>
        </div> 
        <nav id='menu' className={mostrarNav ? 'mostrar' : 'noMostrar'}>
          <ul id='lista' style={{background: "linear-gradient(180deg,"+color+", transparent)"}} >
<<<<<<< HEAD
            <Link className='link' to='/2'>Hospedaje</Link>
            <Link className='link' to='/1'>Comida</Link>
            <Link className='link' to='/3'>Transporte</Link>
            <Link className='link' to='/4'>Turismo</Link>
=======
            <Link className='link' to='/Servicios/Hospedaje'>Hospedaje</Link>
            <Link className='link' to='/Servicios/Comida'>Comida</Link>
            <Link className='link' to='/Servicios/Transporte'>Transporte</Link>
            <Link className='link' to='/Servicios/Turismo'>Turismo</Link>
>>>>>>> f289bc4ce87960827b0a72a5da3bb464070bd907
            <Link className='link' to='/Nosotros'>Sobre Nosotros</Link>
          </ul>
        </nav>
      </header>
      {nombre !== 'principal' 
      && <h2 className='titulo' style={{borderColor: color}}>{nombre}</h2>
      }
    </div>
  );
}

export default Header;
