import { Formik, Form, Field } from "formik";
import './Formularios.css';
import * as Yup from 'yup';
import { Alert } from "react-bootstrap";
import axios from "axios";

const FormularioEmpresa = () => {

    let initialValues = {
        rut: "",
        nombre: "",
        telefono: "",
        direccion: "",
        facebook: "",
        instagram: "",
        whatsapp: "",
        correo: "",
        contrasena: "",
    };

    const mensajes = {
        rut: {
            long: "El rut debe ser de 9 números"
        },
        telefono: {
            long: "El número de teléfono debe tener una longitud de 7 o 10"
        },
        redes: {
            formato: "Se debe introducir una url"
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
        rut: Yup.number().test('len', mensajes.telefono.long, (val) => (val.toString().length === 9)).required(mensajes.obligatorio),
        nombre: Yup.string().required(mensajes.obligatorio),
        telefono: Yup.number().test('len', mensajes.telefono.long, (val) => (val.toString().length === 7 || val.toString().length === 10)).required(mensajes.obligatorio),
        direccion: Yup.string().required(mensajes.obligatorio),
        facebook: Yup.string().default('null'),
        instagram: Yup.string().default('null'),
        whatsapp: Yup.string().default('null'),
        correo: Yup.string().email(mensajes.correo.formato).required(mensajes.obligatorio),
        contrasena: Yup.string().min(8, mensajes.contrasena.long).max(16, mensajes.contrasena.long).required(mensajes.obligatorio)
    });

    let subir = async (values) => {
        let facebook = values.facebook === '' ? 'null' : values.facebook;
        let instagram = values.instagram === '' ? 'null' : values.instagram;
        let whatsapp = values.whatsapp === '' ? 'null' : values.whatsapp;
        console.log(`http://localhost:5000/empresa/insertar/${values.rut}/${values.nombre}/${values.correo}/${values.contrasena}/${facebook}/${instagram}/${whatsapp}/${values.telefono}/${values.direccion}`);
        /*axios.get(`http://localhost:5000/empresa/insertar/${values.rut}/${values.nombre}/${values.correo}/${values.contrasena}/${values.facebook}/${values.instagram}/${values.whatsapp}/${values.telefono}/${values.direccion}`)
        .then(res => console.log(res));
        */
    }

    return (
        <>
            <Formik className="formulario" initialValues={initialValues} validationSchema={validacion} onSubmit={subir}>
                {({errors, touched}) => 
                <Form className="campos" style={{ borderColor: "#D94E9F" }}>
                <h4 className="titulo-form" style={{ color: "#D94E9F", borderColor: "#D94E9F" }}> Registrar una empresa </h4>
                    <div className="campo">
                        <label htmlFor="rut">RUT</label>
                        <Field className="conBorde ingreso" style={{ borderColor: "#D94E9F" }} name="rut" id="rut" />
                    </div>
                    {errors.rut && touched.rut ? (<Alert variant="warning" >{errors.rut}</Alert>) : null}

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
                        <label htmlFor="direccion">Dirección</label>
                        <Field className="conBorde ingreso" style={{ borderColor: "#D94E9F" }} name="direccion" id="direccion" />
                    </div>
                    {errors.direccion && touched.direccion ? (<Alert variant="warning" >{errors.direccion}</Alert>) : null}

                    <div className="campo">
                        <label htmlFor="facebook">Facebook</label>
                        <Field className="conBorde ingreso" style={{ borderColor: "#D94E9F" }} name="facebook" id="facebook" />
                    </div>
                    {errors.facebook && touched.facebook ? (<Alert variant="warning" >{errors.facebook}</Alert>) : null}

                    <div className="campo">
                        <label htmlFor="instagram">Instagram</label>
                        <Field className="conBorde ingreso" style={{ borderColor: "#D94E9F" }} name="instagram" id="instagram" />
                    </div>
                    {errors.instagram && touched.instagram ? (<Alert variant="warning" >{errors.instagram}</Alert>) : null}

                    <div className="campo">
                        <label htmlFor="whatsapp">WhatsApp</label>
                        <Field className="conBorde ingreso" style={{ borderColor: "#D94E9F" }} name="whatsapp" id="whatsapp" />
                    </div>
                    {errors.whatsapp && touched.whatsapp ? (<Alert variant="warning" >{errors.whatsapp}</Alert>) : null}

                    <div className="campo">
                        <label htmlFor="Correo">Correo</label>
                        <Field className="conBorde ingreso" style={{ borderColor: "#D94E9F" }} name="correo" id="correo" />
                    </div>
                    {errors.correo && touched.correo ? (<Alert variant="warning" >{errors.correo}</Alert>) : null}

                    <div className="campo">
                        <label htmlFor="Contraseña">Contraseña</label>
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

export default FormularioEmpresa;