import Header from "../Header/Header";
import Tarjeta from "../Tarjeta/Tarjeta";
import '../index.css';
import { useEffect, useState } from 'react';
import Footer from "../Footer/Footer";
import { fetchDataServicios } from "./llamadasAPI";

const BodyServEmpresa = () => {

    let [ servicios, setServicios ] = useState([]);
    const color = "#D94E9F";
    
    const nombre = "Servicios Actuales";
    let idEmpresa = sessionStorage.getItem('idEmpresa');
    

    useEffect(() => {
        async function fetchAPI(){
            const data = await fetchDataServicios(idEmpresa)
            setServicios(data)
        }
        fetchAPI();
    }, [idEmpresa]);

    return (
        <>
            <Header color={color} nombre={nombre} />
            <div className="servicios">
                {servicios.length ? servicios.map((servicio, index) =>
                    <Tarjeta
                        key={index}
                        to={"/servicio/" + servicio.Id_Servicio}
                        titulo={servicio.N_Servicio}
                        descripcion={servicio.N_Empresa}
                        min={servicio.V_Min_Servicio}
                        max={servicio.V_Max_Servicio}
                        color={servicio.C_T_Servicio} />
                ) : <h2>No ha agregado servicios</h2>}
            </div>
            <Footer color={color} />

        </>
    );
}

export default BodyServEmpresa;