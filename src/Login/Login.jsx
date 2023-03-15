import './Login.css';
import logo from '../Imagenes/Logo5.png';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, useFormik } from "formik";

function Login() {
    let initialValues = {
        nombre: "",
        direccion: "",
        telefono: "",
        correo: "",
    };

    let subir = async () => {
        alert("Enviar");
    }


    return (
        <div className="Fondo">
            <div className='Login'>
                <div className='contLogo'>
                    <img src={logo} className="imgLogo" alt="logo" />
                </div>
                
                <Formik className="formularioLogin" initialValues={initialValues} onSubmit={subir}>
                    <Form className="campos"  style={{ borderColor: "#D94E9F" }}>
                        <h4 className="titulo-form" style={{ borderColor: "#D94E9F", color: "#D94E9F" }} > Iniciar Sesión </h4>
                        <div className="campo">
                            <label htmlFor="correo" style={{ color: "#D94E9F" }}>Correo</label>
                            <Field className="conBorde ingreso" style={{ borderColor: "#D94E9F" }} name="correo" id="correo" />
                        </div>
                        <div className="campo">
                            <label htmlFor="contraseña" style={{ color: "#D94E9F" }}>Contraseña</label>
                            <Field className="conBorde ingreso" style={{ borderColor: "#D94E9F" }} name="contraseña" id="contraseña" />
                        </div>
                        <button className="enviar conBorde " style={{ borderColor: "#D94E9F", backgroundColor: "#D94E9F" }} type="submit">Ingresar</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default Login;