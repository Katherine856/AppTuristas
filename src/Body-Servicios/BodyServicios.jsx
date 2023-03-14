import Header from "../Header/Header";
import Tarjeta from "../Tarjeta/Tarjeta";
import "./BodyServicios.css"
import '../index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const BodyServicios = () => {

    let { id } = useParams();

    let [servicios, setServicio] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:5000/'+id)
        .then( (response) => {
            setServicio(response.data);
        })
        .catch( (error) => {
            console.log(error);
        })
    },[]);

    return(
        <>
            <Header color={servicios.C_T_Servicio } nombre={servicios.N_T_Servicio}/>
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
            
        </>
    );
}

export default BodyServicios;