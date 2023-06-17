import Header from "../Header/Header";
import TarjetaEmpresa from "../Empresas/Empresa";
import '../index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";

const BodyEmpresas = () => {

    let [ empresas, setEmpresas ] = useState([]);

    let idAdmi = sessionStorage.getItem('idUsuario');

    useEffect(() => {
        axios
        .get(`server-turismo-production.up.railway.app/verEmpresas`)
        .then( (response) => {
            setEmpresas(response.data);
        })
        .catch( (error) => {
            console.log(error);
        })
    }, [idAdmi]);

    return (
        <>
            <Header color={"#D94E9F"} nombre='Empresas' />
            <div className="servicios">
                {empresas.length ? empresas.map((empresa, index) =>
                    <TarjetaEmpresa
                        key={index}
                        nombre={empresa.N_Empresa} 
                        rut={empresa.Id_Empresa} 
                        direccion={empresa.D_Empresa}
                        telefono={empresa.T_Empresa} 
                        correo={empresa.C_Empresa}
                        Facebook={empresa.F_Empresa}
                        instagram={empresa.I_Empresa} 
                        Whatsapp={empresa.W_Empresa} 
                        Estado={empresa.E_Empresa} />
                ) : <h2>Hubo un problema buscando los servicios</h2>}
            </div>
            <Footer color={"#D94E9F"} />

        </>
    );
}

export default BodyEmpresas;