import { Formik, Form, Field, useFormik } from "formik";
import Header from "../Header/Header";
import './Formularios.css';
import * as Yup from 'yup';
import axios from "axios";
import { Alert } from "react-bootstrap";

const FormularioServicio = () => {

  const color = "#D94E9F";

  let initialValues = {
    nombre: "",
    tipos: "2",
    min: "",
    max: "",
    descripcion: ""
  };

  let mensajes = {
    valores: {
      long: 'Inserte un valor valido'
    },
    obligatorio: "Este campo es obligatorio"
  }

  const validacion = Yup.object().shape({
    nombre: Yup.string().required(mensajes.obligatorio),
    min: Yup.number().test('len', mensajes.valores.long, (val) => (val.toString().length >= 4)).required(mensajes.obligatorio),
    max: Yup.number().test('len', mensajes.valores.long, (val) => (val.toString().length >= 4)).required(mensajes.obligatorio),
    descripcion: Yup.string().required(mensajes.obligatorio)
  });


  let subir = async (values) => {
    let idEmpresa = sessionStorage.getItem('idEmpresa');
    //console.log(`localhost:5000/servicio/insertar/${values.nombre}/${idEmpresa}/${values.min}/${values.max}/${values.descripcion}/${values.tipos}`)
    axios.get(`http://localhost:5000/servicio/insertar/${values.nombre}/${idEmpresa}/${values.min}/${values.max}/${values.descripcion}/${values.tipos}`)
    .then(res => console.log(res));
  }

  return (
    <>
      <Header color={color} nombre="principal" />
      <Formik className="formulario" initialValues={initialValues} validationSchema={validacion} onSubmit={subir}>
        {({errors, touched}) =>
          <Form className="campos" style={{ borderColor: color }}>
            <h4 className="titulo-form" style={{ color: color, borderColor: color }}> Registar un servicio </h4>
            <div className="campo">
              <label htmlFor="nombre">Nombre</label>
              <Field className="conBorde ingreso" style={{ borderColor: color }} name="nombre" id="nombre" />
            </div>
            {errors.nombre && touched.nombre ? (<Alert variant="warning" >{errors.nombre}</Alert>) : null}
            <div className="campo">
              <label htmlFor="tipos">Tipo Servicio</label>
              <Field as="select" className="conBorde ingreso" style={{ borderColor: color }} name="tipos" id="tipos">
                <option value="2">Hospedaje</option>
                <option value="1">Comida</option>
                <option value="3">Transporte</option>
                <option value="4">Turismo</option>
              </ Field>
            </div>
            <div className="campo">
              <label htmlFor="min">Valor Minimo</label>
              <Field className="conBorde ingreso" style={{ borderColor: color }} name="min" id="min" />
            </div>
            {errors.min && touched.min ? (<Alert variant="warning" >{errors.min}</Alert>) : null}
            <div className="campo">
              <label htmlFor="max">Valor Maximo</label>
              <Field className="conBorde ingreso" style={{ borderColor: color }} name="max" id="max" />
            </div>
            {errors.max && touched.max ? (<Alert variant="warning" >{errors.max}</Alert>) : null}
            <div className="campo">
              <label htmlFor="descripcion">Descripción</label>
              <Field className="conBorde ingreso" as="textarea" style={{ borderColor: color }} name="descripcion" id="descripcion" />
            </div>
            {errors.descripcion && touched.descripcion ? (<Alert variant="warning" >{errors.descripcion}</Alert>) : null}
            <button className="enviar conBorde " style={{ borderColor: color, backgroundColor: color }} type="submit">Enviar</button>
          </Form>
        }
      </Formik>
    </>
  )
}

export default FormularioServicio;