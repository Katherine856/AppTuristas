import Header from "../Header/Header";
import './BodyPrincipal.css';
import { Carousel } from 'react-bootstrap';
import logo from '../Imagenes/logo.png';
import carrusel from '../Imagenes/carrusel.png';
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const BodyPrincipal = () => {

    let color = "#D94E9F";

    return (
        <>
            <Header color={color} nombre="principal" />
            <Carousel className='carrusel'>
                <Carousel.Item className='itemCarrusel'>
                    <img src={logo} alt="img 1" />
                </Carousel.Item>
                <Carousel.Item className='itemCarrusel'>
                    <img src={carrusel} alt="img 2" />
                </Carousel.Item>
            </Carousel>
            <div className="Botones">
                <Link className='unirse conBorde' smooth to="/Nosotros#formulario"> ¿Quieres ser parte de nosotros? </Link>
                <Link className='unirse conBorde' smooth to="/Login"> Iniciar Sesión </Link>
            </div>
            <Footer color={color} />
        </>
    );
}

export default BodyPrincipal;