import './BodyServicio.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import { Carousel } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Footer from "../Footer/Footer";
import { fetchDataServicio, fetchImagenesServicio } from './llamadasAPI';

function BodyServicio() {

    let { id } = useParams();

    let [servicio, setServicio] = useState({});
    let [imagenes, setImagenes] = useState([]);
    let [color, setColor] = useState('white');

    useEffect(() => {
        async function fetchData(id) {
            const data = await fetchDataServicio(id);
            setServicio(data);
            setColor(data.C_T_Servicio);
            const images = await fetchImagenesServicio(id);
            setImagenes(images);
        }
        fetchData(id)
    }, [id]);

    return (
        <>
            <Header color={color} nombre={servicio.N_Servicio} />
            <Carousel className='carrusel servicio conBorde' style={{ borderColor: color}}>
                {imagenes?.length !== 0 ? imagenes?.map((img, index) => {
                    return (
                        <Carousel.Item key={index} className='itemCarrusel'>
                            <div className="imgContainer">
                                <img src={img} alt="img 1" loading='lazy' />
                            </div>
                        </Carousel.Item>
                    )
                }) : null}
            </Carousel>
            <div className="info conBorde" style={{ borderColor: color}}>
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
