import { Formik, Form, Field, useFormik } from "formik";
import './Formularios.css';

const FormularioEmpresa = () => {

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
            <Formik className="formulario" initialValues={initialValues} onSubmit={subir}>
                <Form className="campos" style={{ borderColor: "#D94E9F" }}>
                <h4 className="titulo-form" style={{ color: "#D94E9F", borderColor: "#D94E9F" }}> Registrar una empresa </h4>
                    <div className="campo">
                        <label htmlFor="rut">RUT</label>
                        <Field className="conBorde ingreso" style={{ borderColor: "#D94E9F" }} name="rut" id="rut" />
                    </div>
                    <div className="campo">
                        <label htmlFor="nombre">Nombre</label>
                        <Field className="conBorde ingreso" style={{ borderColor: "#D94E9F" }} name="nombre" id="nombre" />
                    </div>
                    <div className="campo">
                        <label htmlFor="telefono">Teléfono</label>
                        <Field className="conBorde ingreso" style={{ borderColor: "#D94E9F" }} name="telefono" id="telefono" />
                    </div>
                    <div className="campo">
                        <label htmlFor="direccion">Dirección</label>
                        <Field className="conBorde ingreso" style={{ borderColor: "#D94E9F" }} name="direccion" id="direccion" />
                    </div>
                    <div className="campo">
                        <label htmlFor="facebook">Facebook</label>
                        <Field className="conBorde ingreso" style={{ borderColor: "#D94E9F" }} name="facebook" id="facebook" />
                    </div>
                    <div className="campo">
                        <label htmlFor="instagram">Instagram</label>
                        <Field className="conBorde ingreso" style={{ borderColor: "#D94E9F" }} name="instagram" id="instagram" />
                    </div>
                    <div className="campo">
                        <label htmlFor="whatsapp">WhatsApp</label>
                        <Field className="conBorde ingreso" style={{ borderColor: "#D94E9F" }} name="whatsapp" id="whatsapp" />
                    </div>
                    <div className="campo">
                        <label htmlFor="Correo">Correo</label>
                        <Field className="conBorde ingreso" style={{ borderColor: "#D94E9F" }} name="Correo" id="Correo" />

                    </div>
                    <div className="campo">
                        <label htmlFor="Contraseña">Contraseña</label>
                        <Field className="conBorde ingreso" style={{ borderColor: "#D94E9F" }} name="Contraseña" id="Contraseña" />
                    </div>

                    <button className="enviar conBorde " style={{ borderColor: "#D94E9F", backgroundColor: "#D94E9F" }} type="submit">Enviar</button>
                </Form>
            </Formik>
        </>
    )
}

export default FormularioEmpresa;