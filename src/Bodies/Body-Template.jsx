import Header from "../Header/Header";
import Tarjeta from "../Tarjeta/Tarjeta";
import '../index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useParams } from "react-router-dom";

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
        .get(`http://localhost:5000/${seccion}`)
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
                {servicios.map((servicio, index) =>
                    <Tarjeta
                        key={index}
                        to={"/servicio/" + servicio.Id_Servicio}
                        titulo={servicio.N_Servicio}
                        descripcion={servicio.N_Empresa}
                        min={servicio.V_Min_Servicio}
                        max={servicio.V_Max_Servicio}
                        color={secciones.get(seccion)?.color} />
                )}
            </div>

        </>
    );
}

export default BodyTemplate;