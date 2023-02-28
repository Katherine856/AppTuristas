import Header from "../Header/Header";
import Tarjeta from "../Tarjeta/Tarjeta";
import "./BodyComida.css"
import '../index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BodyComida = () => {

    let [servicios, setServicio] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:5000/comida/')
        .then( (response) => {
            setServicio(response.data);
        })
        .catch( (error) => {
            console.log(error);
        })
    },[]);

    let color = "#FA7D1E";

    return(
        <>
            <Header color={ color } nombre='Comida'/>
            <div className="servicios">
                {servicios.map((servicio, index) => 
                    <Tarjeta
                        key={index} 
                        to={"/servicio/" + servicio.Id_Servicio} 
                        titulo={servicio.N_Servicio} 
                        descripcion={servicio.N_Empresa} 
                        min={servicio.V_Min_Servicio} 
                        max={servicio.V_Max_Servicio} 
                        color={color} />
                )}
            </div>
            
        </>
    );
}

export default BodyComida;