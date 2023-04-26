import logo from '../Imagenes/logo.png'
import { Link } from 'react-router-dom';
import './Empresa.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const TarjetaEmpresa = ({ nombre, rut, direccion, telefono, Correo, Facebook, instagram, Whatsapp, Estado }) => {

    let estadoNuevo='';

    function actualizarEstado (){
        if (Estado === 'Activo') {
            estadoNuevo = 'InActivo';
        }else{
            estadoNuevo = 'Activo'
        }
        axios
                .get(`http://localhost:5000/empresa/servicios/${estadoNuevo}/${rut}`)
                .then((response) => {
                    console.log(response.data);
                    window.location.reload()
                })
                .catch((error) => {
                    console.log(error);
                })
    }
    
    return (
        <div className="tarjetaEmpresa" style={{ borderColor: "#D94E9F" }}>
            <div className="descripcion">
                <h3> Nombre: {nombre}</h3>
                <h6> RUT: {rut}</h6>
                <p> Dirreccion: {direccion}</p>
                <p> Telefono: {telefono}</p>
                <p> Correo: {Correo}</p>
                <p> Facebook: {Facebook}</p>
                <p> Instagram: {instagram}</p>
                <p> WhatsApp: {Whatsapp}</p>
                <h6> Estado: {Estado}</h6>
            </div>
            <button className='estado conBorde' style={{ borderColor: "#D94E9F", backgroundColor: "#D94E9F" }} onClick={actualizarEstado}> Cambiar Estado</button>
        </div>
    );
}

export default TarjetaEmpresa;