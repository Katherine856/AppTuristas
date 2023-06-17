import { Formik, Form, Field } from "formik";
import './Formularios.css';
import * as Yup from 'yup';
import { Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const FormularioUsuario = () => {

    const navigate = useNavigate();

    let initialValues = {
        id: "",
        nombre: "",
        telefono: "",
        correo: "",
        contrasena: "",
    };

    const mensajes = {
        id: {
            long: "El rut debe ser de minimo 8 números"
        },
        telefono: {
            long: "El número de teléfono debe tener una longitud de 7 o 10"
        },
        correo: {
            formato: "Se debe introducir una dirección de correo válida"
        },
        contrasena: {
            long: "La contrasena debe tener entre 8 y 16 caracteres",
            formato: "La contrasena debe tener mayúsculas, minúsculas, números y caracteres especiales"
        },
        obligatorio: "Este campo es obligatorio"
    }

    const validacion = Yup.object().shape({
        id: Yup.number().test('len', mensajes.id.long, (val) => (val.toString().length >= 8)).required(mensajes.obligatorio),
        nombre: Yup.string().required(mensajes.obligatorio),
        telefono: Yup.number().test('len', mensajes.telefono.long, (val) => (val.toString().length === 7 || val.toString().length === 10)).required(mensajes.obligatorio),
        correo: Yup.string().email(mensajes.correo.formato).required(mensajes.obligatorio),
        contrasena: Yup.string().min(8, mensajes.contrasena.long).max(16, mensajes.contrasena.long).required(mensajes.obligatorio)
    });

    let subir = async (values) => {
        axios.get(`https://server-turismo-production.up.railway.app/usuario/insertar/${values.id}/${values.nombre}/${values.correo}/${values.contrasena}/${values.telefono}`)
        .then(res => navigate('/'));
        
        
    }

    return (
        <>
            <Formik className="formulario" initialValues={initialValues} validationSchema={validacion} onSubmit={subir}>
                {({errors, touched}) => 
                <Form className="campos" style={{ borderColor: "#D94E9F" }}>
                <h4 className="titulo-form" style={{ color: "#D94E9F", borderColor: "#D94E9F" }}> Registrar un Usuario </h4>
                    <div className="campo">
                        <label htmlFor="id">No. de identificación</label>
                        <Field className="conBorde ingreso" style={{ borderColor: "#D94E9F" }} name="id" id="id" />
                    </div>
                    {errors.id && touched.id ? (<Alert variant="warning" >{errors.id}</Alert>) : null}

                    <div className="campo">
                        <label htmlFor="nombre">Nombre</label>
                        <Field className="conBorde ingreso" style={{ borderColor: "#D94E9F" }} name="nombre" id="nombre" />
                    </div>
                    {errors.nombre && touched.nombre ? (<Alert variant="warning" >{errors.nombre}</Alert>) : null}

                    <div className="campo">
                        <label htmlFor="telefono">Teléfono</label>
                        <Field className="conBorde ingreso" style={{ borderColor: "#D94E9F" }} name="telefono" id="telefono" />
                    </div>
                    {errors.telefono && touched.telefono ? (<Alert variant="warning" >{errors.telefono}</Alert>) : null}

                    <div className="campo">
                        <label htmlFor="correo">Correo</label>
                        <Field className="conBorde ingreso" style={{ borderColor: "#D94E9F" }} name="correo" id="correo" />
                    </div>
                    {errors.correo && touched.correo ? (<Alert variant="warning" >{errors.correo}</Alert>) : null}

                    <div className="campo">
                        <label htmlFor="contrasena">Contraseña</label>
                        <Field className="conBorde ingreso" style={{ borderColor: "#D94E9F" }} name="contrasena" id="contrasena" />
                    </div>
                    {errors.contrasena && touched.contrasena ? (<Alert variant="warning" >{errors.contrasena}</Alert>) : null}


                    <button className="enviar conBorde " style={{ borderColor: "#D94E9F", backgroundColor: "#D94E9F" }} type="submit">Enviar</button>
                </Form>
                }
                
            </Formik>
        </>
    )
}

export default FormularioUsuario;