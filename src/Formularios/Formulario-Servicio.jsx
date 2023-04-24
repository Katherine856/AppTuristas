import { Formik, Form, Field } from "formik";
import { useState } from "react";
import * as Yup from 'yup'
import Header from "../Header/Header";
import './Formularios.css';
import { Alert } from 'react-bootstrap'
import { Notificacion } from './componentes/Notificacion'
import { formatearData, enviarServicio } from "./handleSubmit";

const FormularioServicio = () => {

  const color = "#D94E9F";
  const [enviando, setEnviando] = useState(false);
  const [mostrarNotif, setMostrarNotif] = useState(false);
  const [ultimoAgregado, setUltimoAgregado] = useState({})

  let initialValues = {
    nombre: "",
    min: "",
    max: "",
    descripcion: "",
    imagenes: [],
    tipo: 0
  };

  const mensajes = {
    obligatorio: "Este campo es obligatorio",
    nombre: "Debe contener más de 4 caracteres",
    min: "El valor mínimo son 10.000 COP",
    max: "El valor máximo son 15'000.000 COP",
    imagenes: "Se debe subir al menos una imagen",
    tipo: "Elija un servicio"
  }

  const validacion = Yup.object().shape({
    nombre: Yup.string().test("len", mensajes.nombre, (n) => n.toString().length > 4).required(mensajes.obligatorio),
    min: Yup.number().min(10000, mensajes.min).required(mensajes.obligatorio),
    max: Yup.number().max(15000000, mensajes.max).required(mensajes.obligatorio),
    //descripcion: Yup.string().required(mensajes.obligatorio),
    imagenes: Yup.mixed().required(mensajes.imagenes),
    tipo: Yup.number().min(1, mensajes.tipo)
  })

  let subir = async (info, { resetForm }) => {
    let formData = formatearData(info);
    setEnviando(true);
    let result = await enviarServicio(formData);
    
    setEnviando(false)
    if(result !== false){
      setUltimoAgregado(result)
      setMostrarNotif(true);
      resetForm();  
    } 
  }

  return (
    <>
      <Header color={color} nombre="principal" />
      <Formik className="formulario" initialValues={initialValues} validationSchema={validacion} onSubmit={subir}>
        {({ values, errors, touched, setFieldValue, handleSubmit }) => (
          <Form className="campos" style={{ borderColor: color }} encType="multipart/form-data" onSubmit={handleSubmit}>
            <h4 className="titulo-form" style={{ color: color, borderColor: color }}> Registar un servicio </h4>
            <div className="campo">
              <label htmlFor="instagram">Nombre</label>
              <Field className="conBorde ingreso" style={{ borderColor: color }} name="nombre" id="nombre" />
            </div>
            {errors.nombre && touched.nombre ? (<Alert variant="warning" >{errors.nombre}</Alert>) : null}
            <div className="campo">
              <label htmlFor="whatsapp">Precio mínimo</label>
              <Field className="conBorde ingreso" style={{ borderColor: color }} name="min" id="min" />
            </div>
            {errors.min && touched.min ? (<Alert variant="warning" >{errors.min}</Alert>) : null}
            <div className="campo">
              <label htmlFor="whatsapp">Precio máximo</label>
              <Field className="conBorde ingreso" style={{ borderColor: color }} name="max" id="max" />
            </div>
            {errors.max && touched.max ? (<Alert variant="warning" >{errors.max}</Alert>) : null}
            <div className="campo">
              <label htmlFor="descripcion">Descripcion</label>
              <Field as={'textarea'} className="conBorde ingreso" style={{ borderColor: color }} name="descripcion" id="descripcion" />
            </div>
            {errors.descripcion && touched.descripcion ? (<Alert variant="warning" >{errors.descripcion}</Alert>) : null}
            <div className="campoImagen">
              <label className="btnImagenes" htmlFor="imagenes">Subir imágenes</label>
              <input
                type="file"
                style={{ borderColor: color }}
                name="imagenes"
                id="imagenes"
                accept="image/*"
                multiple
                hidden
                onChange={(event) => {
                  setFieldValue("imagenes", event.target.files)
                }} />
            </div>
            <Field as='select' id='tipo' name='tipo' onChange={(e) => {
              setFieldValue('tipo', e.target.value)
            }}>
              <option value="0">Elija el tipo de servicio</option>
              <option value="1">Comida</option>
              <option value="2">Transporte</option>
              <option value="3">Hospedaje</option>
              <option value="4">Turismo</option>
            </Field>
            <div className="subidas">
              {Object.keys(values.imagenes).map((index) => <span key={index} >{values.imagenes[index].name}</span>)}
            </div>
            {errors.imagenes && touched.imagenes ? (<Alert variant="warning" >{errors.imagenes}</Alert>) : null}

            <button className="enviar conBorde " style={{ borderColor: color, backgroundColor: color }} type="submit" disabled={enviando}>Enviar</button>
          </Form>
        )}
      </Formik>
      <Notificacion onClose={() => setMostrarNotif(false)} show={mostrarNotif} delay={6000} id={ultimoAgregado.id} nombre={ultimoAgregado.nombre}/>
    </>
  )
}

export default FormularioServicio;