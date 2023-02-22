import './BodyServicio.css';
import { Link, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import { Carousel } from 'react-bootstrap';
import logo from '../Imagenes/logo.png';
import carrusel from '../Imagenes/carrusel.png';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function BodyServicio() {

    let { id } = useParams();
    let nombre = "Servicio ";
    let color = "#E69723";

    return (
        <>
            <Header color={color} nombre={nombre + id} />
            <Carousel className='carrusel servicio'>
                <Carousel.Item className='itemCarrusel'>
                    <img src={logo} alt="img 1" />
                </Carousel.Item>
                <Carousel.Item className='itemCarrusel'>
                    <img src={carrusel} alt="img 2" />
                </Carousel.Item>
            </Carousel>
            <div className="info">
                <h3>Empresa</h3>
                <h4>Valor</h4>
                <p>Descripción</p>
                <p> 
                    <Link to={"#"}><FaFacebook /></Link>
                    <Link to={"#"}><FaInstagram /></Link>
                    <Link to={"#"}><FaWhatsapp /></Link>
                </p>
                <p>Teléfono</p>
                <p>Correo</p>
                <p>Dirección</p>
            </div>
        </>
    )
}

export default BodyServicio;
