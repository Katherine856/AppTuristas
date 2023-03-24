import './Login.css';
import logo from '../Imagenes/Logo5.png';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from "formik";
import axios from 'axios';

function Login() {

    const navigate = useNavigate();

    let initialValues = {
        correo: "",
        contrasena: ""
    };

    const loguearse = (values) => {
        axios.get(`http://localhost:5000/login/${values.correo}/${values.contrasena}`)
            .then(res => res.data)
            .then(res => {
                sessionStorage.setItem("tipoUsuario", "empresa");
                sessionStorage.setItem("idEmpresa", res);
                console.log(sessionStorage.getItem("tipoUsuario"));
                console.log(sessionStorage.getItem("idEmpresa"));
                navigate("/")
            })
            .catch(()=>console.log("error"));
    }


    return (
        <div className="Fondo">
            <div className='Login'>
                <div className='contLogo'>
                    <img src={logo} className="imgLogo" alt="logo" />
                </div>

                <Formik className="formularioLogin" initialValues={initialValues} onSubmit={loguearse}>
                    <Form className="campos" style={{ borderColor: "#D94E9F" }}>
                        <h4 className="titulo-form" style={{ borderColor: "#D94E9F", color: "#D94E9F" }} > Iniciar Sesión </h4>
                        <div className="campo">
                            <label htmlFor="correo" style={{ color: "#D94E9F" }}>Correo</label>
                            <Field className="conBorde ingreso" style={{ borderColor: "#D94E9F" }} name="correo" id="correo" />
                        </div>
                        <div className="campo">
                            <label htmlFor="contrasena" style={{ color: "#D94E9F" }}>Contraseña</label>
                            <Field className="conBorde ingreso" style={{ borderColor: "#D94E9F" }} name="contrasena" id="contrasena" />
                        </div>
                        <button className="enviar conBorde " style={{ borderColor: "#D94E9F", backgroundColor: "#D94E9F" }} type="submit">Ingresar</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default Login;