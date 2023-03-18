import './Header.css';
import logo from '../Imagenes/Logo5.png';
import {FaBars} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header({color, nombre}) {

  const [mostrarNav, setMostrarNav] = useState(false);
  const [idUsuario, setIdUsuario] = useState(1);
  const [usuario, setUsuario] = useState([]);
  const [tipoUsuario, setTipoUsuario] = useState("");

  useEffect(() => {
    setTipoUsuario(localStorage.getItem("tipoUsuario"));
    if(tipoUsuario === "empresa") setUsuario(empresa)
    else if(tipoUsuario === "admin") setUsuario(empresa)
    else setUsuario(publico)

  }, [tipoUsuario])

  const limpiarUsuario = () =>{
    localStorage.removeItem("tipoUsuario");
    setTipoUsuario("publico")
  }

  const publico = [
    {
      texto : "Hospedaje",
      link: "/Servicios/Hospedaje"
    },
    {
      texto : "Comida",
      link: "/Servicios/Comida"
    },
    {
      texto : "Transporte",
      link: "/Servicios/Transporte"
    },
    {
      texto : "Turismo",
      link: "/Servicios/Turismo"
    },
    {
      texto : "Sobre Nosotros",
      link: "/Nosotros"
    }
  ]

  const empresa = [
    {
      texto : "Agregar Servicio",
      link: `/CrearServicio/${idUsuario}`
    },
    {
      texto : "Consultar Servicio",
      link: "/Servicios/Hospedaje"
    },
    {
      texto : "Actualizar Datos",
      link: "/Servicios/Hospedaje"
    },
    {
      texto: "Cerrar Sesión",
      link: "/",
      accion: limpiarUsuario
    }
  ]

  return (
    <div className="Header">
      <header style={{backgroundColor: color}} className="Header-header">
        <Link className="linkPrincipal" to='/'><img src={logo} className="Header-logo" alt="logo" /></Link>
        {(tipoUsuario !== "empresa" && tipoUsuario !== "admin") &&
          <div>
            {console.log(tipoUsuario)}
            <input type="text" className="Header-buscar" placeholder="Buscar" />
            <FaBars onClick={() => {setMostrarNav(!mostrarNav)}}/>
          </div> 
        }
  
        <nav id='menu' className={mostrarNav ? 'mostrar' : 'noMostrar'}>
          <ul id='lista' style={{background: "linear-gradient(180deg,"+color+", transparent)"}} >
            {usuario.map((item, index) => <Link className='link' key={index} onClick={item.accion} to={item.link}>{item.texto}</Link> )}
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
