import './BodyServicio.css';
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import { Carousel } from 'react-bootstrap';
import maps from '../Imagenes/maps.png';
import carrusel from '../Imagenes/carrusel.png';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Footer from "../Footer/Footer";
import { fetchDataComen, fetchDataServicio, fetchImagenesServicio } from './llamadasAPI';
import Comentarios from '../Comentarios/Comentario';
import FormularioComentario from '../Formularios/Formulario-Comentario';

function BodyServicio() {

    const navigate = useNavigate();
    let { id } = useParams();

    let [comentario, setComentario ] = useState([]);
    let [servicio, setServicio] = useState({});
    let [imagenes, setImagenes] = useState([]);
    let [color, setColor] = useState('white');
    let [mostrarInputComent, setMostrarInputComent] = useState(false);

    let nombre = 'principal';

    useEffect(() => {
        async function fetchData(id) {
            const data = await fetchDataServicio(id);
            setServicio(data);
            setColor(data.C_T_Servicio);
            const images = await fetchImagenesServicio(id);
            setImagenes(images);
            const dataComen = await fetchDataComen(id);
            setComentario(dataComen);
        }
        fetchData(id)
        if(sessionStorage.getItem('idUsuario')) setMostrarInputComent(true)
    }, [id]);

    function Comentar(){
        if(sessionStorage.getItem('idUsuario')){
            setMostrarInputComent(true)
        } 
        else navigate(`/login?servicio=${id}`)       
    }

    return (
        <>
            <Header color={color} nombre={servicio.N_Servicio} />
            <Carousel className='carrusel servicio conBorde' style={{ borderColor: color }}>
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
            <div className='Informacion conBorde' style={{ borderColor: color }}>
                <div className="info">
                    <h3>{servicio.N_Empresa}</h3>
                    <h4>{servicio.V_Min_Servicio} COP - {servicio.V_Max_Servicio} COP</h4>
                    <p>{servicio.D_Servicio}</p>
                    <div className='redes'>
                        <Link to={servicio.F_Empresa}><FaFacebook /></Link>
                        <Link to={servicio.I_Empresa}><FaInstagram /></Link>
                        <Link to={servicio.W_Empresa}><FaWhatsapp /></Link>
                    </div>
                </div>
                <div className='Map'>
                    <p>Telefono: {servicio.T_Empresa}</p>
                    <p>Direccion: {servicio.C_Empresa}</p>
                    <Link target='_blank' rel='noopener noreferrer' to={`https://www.google.com/maps/search/${servicio.D_Empresa} Bogota`}><img className='ImgMap' src={maps} alt="maps" /></Link>
                </div>
            </div>
            {comentario.length ? comentario.map((comen, index) =>
                <Comentarios
                    key={index}
                    titulo={comen.Titulo_Calificacion} 
                    usuario={comen.N_Usuario} 
                    valor={comen.Valor_Calificacion}
                    descripcion={comen.Desc_Calificacion}
                    color={color} />
            ): null}
            
            {mostrarInputComent === false
                && <button className="comentar conBorde " style={{ borderColor: color, backgroundColor: color }} type="submit" onClick={Comentar}>Agregar un comentario</button>
            }
            {mostrarInputComent === true
                && <FormularioComentario color={color} idServ={id}/>
            }
            <Footer color={color} />


        </>
    )
}

export default BodyServicio;
