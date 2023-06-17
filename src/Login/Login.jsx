import './Login.css';
import logo from '../Imagenes/Logo5.png';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from "formik";
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    let initialValues = {
        correo: "",
        contrasena: ""
    };

    const loguearse = (values) => {

        axios.get(`server-turismo-production.up.railway.app/login/${values.tipo}/${values.correo}/${values.contrasena}`)
            .then(res => res.data)
            .then(id => {
                if (!id) {
                    document.getElementById("error").innerHTML = 'Usuario, tipo o contraseña no coinciden';
                } else {
                    sessionStorage.setItem("tipoUsuario", values.tipo);
                    sessionStorage.setItem("idUsuario", id);
                    if(searchParams.get('servicio'))
                        navigate(`/servicio/${searchParams.get('servicio')}`)
                    else navigate('/')
                }
            })
            .catch((error) => {
                if (error.response && error.response.status === 500) {
                    console.log('Ocurrió un problema');
                }
            });
    }


    return (
        <div className="Fondo">
            <div className='Login'>
                <div className='contLogo'>
                    <img src={logo} className="imgLogo" alt="logo" />
                </div>

                <Formik className="formularioLogin" initialValues={initialValues} onSubmit={loguearse}>
                {({setFieldValue }) => (
                    <Form className="campos" style={{ borderColor: "#D94E9F" }}>
                        <h4 className="titulo-form" style={{ borderColor: "#D94E9F", color: "#D94E9F" }} > Iniciar Sesión </h4>
                        
                        <Field as='select' id='tipoUser' name='tipo' style={{ borderColor: "#D94E9F" }} onChange={(e) => {
                            setFieldValue('tipo', e.target.value)
                        }}>
                            <option value="0">Elija el tipo de usuario</option>
                            <option value="Empresa">Empresa</option>
                            <option value="Usuario">Usuario</option>
                            <option value="Administrador">Administrador</option>
                        </Field>
                        <div className="campo">
                            <label htmlFor="correo" style={{ color: "#D94E9F" }}>Correo</label>
                            <Field className="conBorde ingreso" style={{ borderColor: "#D94E9F" }} name="correo" id="correo" />
                        </div>
                        <div className="campo">
                            <label htmlFor="contrasena" style={{ color: "#D94E9F" }}>Contraseña</label>
                            <Field className="conBorde ingreso" style={{ borderColor: "#D94E9F" }} name="contrasena" id="contrasena" />
                        </div>
                        <h6 style={{ color: "#D94E9F" }} id="error"></h6>
                        <button className="enviar conBorde " style={{ borderColor: "#D94E9F", backgroundColor: "#D94E9F" }} type="submit">Ingresar</button>
                    </Form>
                )}
                </Formik>
            </div>
        </div>
    );
}

export default Login;