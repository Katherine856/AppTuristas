import Header from "../Header/Header";
import './BodyPrincipal.css';
import { Carousel } from 'react-bootstrap';
import logo from '../Imagenes/logo.png';
import empresa from '../Imagenes/empresa.png';
import usuario from '../Imagenes/usuario.png';
import carrusel from '../Imagenes/carrusel.png';
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";

const BodyPrincipal = () => {

    const [isMostrando, setMostrando] = useState(false);
    const [idUsuario, setIdUsuario] = useState(null);

    useEffect(() => {
        setIdUsuario(sessionStorage.getItem('idUsuario'));
        setMostrando(idUsuario !== null)
        console.log(isMostrando);
    },[idUsuario]);


    let color = "#D94E9F";
    let user = 'empresa'

    return (
        <>
            <Header color={color} nombre="principal" />
            <Carousel className='carrusel'>
                <Carousel.Item className='itemCarrusel'>
                    <img src={logo} alt="img 1" />
                </Carousel.Item>
            </Carousel>
                    <div className="Botones">

                        <Link className='unirse conBorde' to="/Login"> Iniciar Sesión </Link>
                    </div>
                    <div className="Registro">
                        <div className='item'>
                            <img src={empresa} alt="img 1" />
                            <Link className='unirse conBorde' to="/Nosotros"> ¿Quieres ser parte de nosotros? </Link>
                        </div>
                        <div className='item'>
                            <img src={usuario} alt="img 1" />
                            <Link className='unirse conBorde' to="/Nosotros"> Regristro Usuarios </Link>
                        </div>

                    </div>


            <Footer color={color} />
        </>
    );
}

export default BodyPrincipal;