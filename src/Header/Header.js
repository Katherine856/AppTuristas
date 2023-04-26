import './Header.css';
import logo from '../Imagenes/Logo5.png';
import { FaBars } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header({ color, nombre }) {

  const [mostrarNav, setMostrarNav] = useState(false);
  const [usuario, setUsuario] = useState([]);
  const [tipoUsuario, setTipoUsuario] = useState("");

  useEffect(() => {
    setTipoUsuario(sessionStorage.getItem("tipoUsuario"));
    if (tipoUsuario === "Empresa") setUsuario(empresa)
    else if (tipoUsuario === "Administrador") setUsuario(administrador)
    else if (tipoUsuario === "Usuario") setUsuario(user)
    else setUsuario(publico)

  }, [tipoUsuario])

  const limpiarUsuario = () => {
    sessionStorage.removeItem("tipoUsuario");
    sessionStorage.removeItem("idUsuario");
    setTipoUsuario("publico")
  }

  const publico = [
    {
      texto: "Hospedaje",
      link: "/Servicios/Hospedaje"
    },
    {
      texto: "Comida",
      link: "/Servicios/Comida"
    },
    {
      texto: "Transporte",
      link: "/Servicios/Transporte"
    },
    {
      texto: "Turismo",
      link: "/Servicios/Turismo"
    },
    {
      texto: "Sobre Nosotros",
      link: "/Nosotros"
    }
  ]

  const user = [
    {
      texto: "Hospedaje",
      link: "/Servicios/Hospedaje"
    },
    {
      texto: "Comida",
      link: "/Servicios/Comida"
    },
    {
      texto: "Transporte",
      link: "/Servicios/Transporte"
    },
    {
      texto: "Turismo",
      link: "/Servicios/Turismo"
    },
    {
      texto: "Sobre Nosotros",
      link: "/Nosotros"
    },
    {
      texto: "Cerrar Sesión",
      link: "/",
      accion: limpiarUsuario
    }
  ]

  const empresa = [
    {
      texto: "Agregar Servicio",
      link: `/CrearServicio`
    },
    {
      texto: "Consultar Servicio",
      link: "/ConsultarServicio"
    },
    {
      texto: "Actualizar Datos",
      link: "/Servicios/Hospedaje"
    },
    {
      texto: "Cerrar Sesión",
      link: "/",
      accion: limpiarUsuario
    }
  ]

  const administrador = [
    {
      texto: "Ver Empresas",
      link: "/ConsultarEmpresas"
    },
    {
      texto: "Actualizar Datos",
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
      <header style={{ backgroundColor: color }} className="Header-header">
        <Link className="linkPrincipal" to='/'><img src={logo} className="Header-logo" alt="logo" /></Link>
        <div>
            {(tipoUsuario !== "Empresa" && tipoUsuario !== "Administrador") &&
              <input type="text" className="Header-buscar" placeholder="Buscar" />
            }
          <FaBars onClick={() => { setMostrarNav(!mostrarNav) }} />
        </div>

        <nav id='menu' className={mostrarNav ? 'mostrar' : 'noMostrar'}>
          <ul id='lista' style={{ background: "linear-gradient(180deg," + color + ", transparent)" }} >
            {usuario.map((item, index) => <Link className='link' key={index} onClick={item.accion} to={item.link}>{item.texto}</Link>)}
          </ul>
        </nav>
      </header>
      {nombre !== 'principal'
        && <h2 className='titulo' style={{ borderColor: color }}>{nombre}</h2>
      }
    </div>
  );
}

export default Header;
