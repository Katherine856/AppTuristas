import Header from "../Header/Header";
import Tarjeta from "../Tarjeta/Tarjeta";
import '../index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";

const BodyServEmpresa = () => {

    let [ servicios, setServicio ] = useState([]);

    const color = "#D94E9F";
    const nombre = "Servicios Actuales";
    let idEmpresa = sessionStorage.getItem('idEmpresa');
    

    useEffect(() => {
        axios
        .get(`http://localhost:5000/empresa/servicios/${idEmpresa}`)
        .then( (response) => {
            setServicio(response.data);
        })
        .catch( (error) => {
            console.log(error);
        })
    }, [idEmpresa]);

    return (
        <>
            <Header color={color} nombre={nombre} />
            <div className="servicios">
                {servicios.map((servicio, index) =>
                    <Tarjeta
                        key={index}
                        to={"/servicio/" + servicio.Id_Servicio}
                        titulo={servicio.N_Servicio}
                        descripcion={servicio.N_Empresa}
                        min={servicio.V_Min_Servicio}
                        max={servicio.V_Max_Servicio}
                        color={servicio.C_T_Servicio} />
                )}
            </div>
            <Footer color={color} />

        </>
    );
}

export default BodyServEmpresa;