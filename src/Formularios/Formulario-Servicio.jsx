import { Formik, Form, Field, useFormik } from "formik";
import Header from "../Header/Header";
import './Formularios.css';

const FormularioServicio = () => {

    const color = "#D94E9F";

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
        <>
            <Header color={color} nombre="principal" />
            <Formik className="formulario" initialValues={initialValues} onSubmit={subir}>
                <Form className="campos" style={{ borderColor: color }}>
                <h4 className="titulo-form" style={{ color: color, borderColor: color }}> Registar un servicio </h4>
                    <div className="campo">
                        <label htmlFor="instagram">Nombre</label>
                        <Field className="conBorde ingreso" style={{ borderColor: color }} name="instagram" id="instagram" />
                    </div>
                    <div className="campo">
                        <label htmlFor="whatsapp">Precio</label>
                        <Field className="conBorde ingreso" style={{ borderColor: color }} name="whatsapp" id="whatsapp" />
                    </div>
                    <div className="campo">
                        <label htmlFor="Correo">Descripcion</label>
                        <Field className="conBorde ingreso" style={{ borderColor: color }} name="Correo" id="Correo" />
                    </div>

                    <button className="enviar conBorde " style={{ borderColor: color, backgroundColor: color }} type="submit">Enviar</button>
                </Form>
            </Formik>
        </>
    )
}

export default FormularioServicio;