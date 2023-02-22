import { Formik, Form, Field, useFormik } from "formik";

const FormularioEmpresa = () =>{

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
        <Formik className="formulario" initialValues={initialValues} onSubmit={subir}>
            <Form>
                <label htmlFor="nombre">Nombre de la empresa</label>
                <Field name="nombre" id="nombre" />
                <button type="submit">Enviar</button>
            </Form>
        </Formik>
    )
}

export default FormularioEmpresa;