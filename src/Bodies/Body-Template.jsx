import Header from "../Header/Header";
import Tarjeta from "../Tarjeta/Tarjeta";
import '../index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";

const BodyTemplate = () => {

    let [ servicios, setServicio ] = useState([]);
    let { seccion } = useParams("none");

    let secciones = new Map();
    secciones
        .set("Comida", {
            color: "#FA7D1E"
        })
        .set("Hospedaje", {
            color: "#E69723"
        })
        .set("Transporte", {
            color: "#6C5EE6"
        })
        .set("Turismo", {
            color: "#00E675"
        });

    useEffect(() => {
        axios
        .get(`https://server-turismo-production.up.railway.app/${seccion}`)
        .then( (response) => {
            setServicio(response.data);
        })
        .catch( (error) => {
            console.log(error);
        })
    }, [seccion]);

    if (!secciones.has(seccion)) {
        return <Navigate to="/" replace={true} />
    }

    return (
        <>
            <Header color={secciones.get(seccion)?.color} nombre={seccion} />
            <div className="servicios">
                {servicios.length ? servicios.map((servicio, index) =>
                    <Tarjeta
                        key={index}
                        to={"/servicio/" + servicio.Id_Servicio}
                        titulo={servicio.N_Servicio}
                        descripcion={servicio.N_Empresa}
                        min={servicio.V_Min_Servicio}
                        max={servicio.V_Max_Servicio}
                        color={secciones.get(seccion)?.color} />
                ) : <h2>Hubo un problema buscando los servicios</h2>}
            </div>
            <Footer color={secciones.get(seccion)?.color} />

        </>
    );
}

export default BodyTemplate;