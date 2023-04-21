import './BodyServicio.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import { Carousel } from 'react-bootstrap';
import logo from '../Imagenes/logo.png';
import carrusel from '../Imagenes/carrusel.png';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import axios from 'axios';
import Footer from "../Footer/Footer";
import { Image } from 'react-image'

function BodyServicio() {

    let { id } = useParams();

    let [servicio, setServicio] = useState({});
    let [imagenes, setImagenes] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:5000/servicio/'+id)
        .then( (response) => {
            let tempImg = [];
            response.data.imgURLs.map( url => {
                tempImg.push(url)
            })
            setImagenes(tempImg);
            setServicio(response.data);
        })
        .catch( (error) => {
            console.log(error);
        })
    },[id]);

    let color = servicio.C_T_Servicio;

    return (
        <>
            <Header color={color} nombre={servicio.N_Servicio} />
            <Carousel className='carrusel servicio conBorde' style={{borderColor: color}}>
                {imagenes !== [] ? imagenes.map(( img, index ) =>{
                    return( 
                    <Carousel.Item key={index} className='itemCarrusel'>
                        <img src={img} alt="img 1" />
                    </Carousel.Item>
                    )
                }) : null}
            </Carousel>
            <div className="info conBorde" style={{borderColor: color}}>
                <h3>{servicio.N_Empresa}</h3>
                <h4>{servicio.V_Min_Servicio} COP - {servicio.V_Max_Servicio} COP</h4>
                <p>{servicio.D_Servicio}</p>
                <div className='redes'> 
                    <Link to={servicio.F_Empresa}><FaFacebook /></Link>
                    <Link to={servicio.I_Empresa}><FaInstagram /></Link>
                    <Link to={servicio.W_Empresa}><FaWhatsapp /></Link>
                </div>
                <p>{servicio.T_Empresa}</p>
                <p>{servicio.C_Empresa}</p>
                <p>{servicio.D_Empresa}</p>
            </div>
            <Footer color={color} />
        </>
    )
}

export default BodyServicio;
