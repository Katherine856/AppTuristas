import { Formik, Form, Field } from "formik";
import { useState } from "react";
import * as Yup from 'yup'
import Header from "../Header/Header";
import './Formularios.css';
import { Alert } from 'react-bootstrap'
import { Notificacion } from './componentes/Notificacion'
import { formatearData, enviarComentario } from "./handleSubmit";
import { FaStar } from 'react-icons/fa';


const FormularioComentario = ({ color }) => {

  const [enviando, setEnviando] = useState(false);
  const [mostrarNotif, setMostrarNotif] = useState(false);
  const [ultimoAgregado, setUltimoAgregado] = useState({})
  const [rating, setRating] = useState(null);
  const [hoverFill, setHoverFill] = useState(null);
  const [isHover, setIsHover] = useState(null);

  let initialValues = {
    titulo: "",
    valor: "",
    descripcion: "",
  };

  const mensajes = {
    obligatorio: "Este campo es obligatorio",
    titulo: "Debe contener más de 4 caracteres"
  }

  const validacion = Yup.object().shape({
    titulo: Yup.string().test("len", mensajes.titulo, (n) => n.toString().length > 4).required(mensajes.obligatorio),
    valor: Yup.number().required(mensajes.obligatorio),
    descripcion: Yup.number().max(15000000, mensajes.max).required(mensajes.obligatorio),
  })

  /*let subir = async (info, { resetForm }) => {
    let formData = formatearData(info);
    setEnviando(true);
    let result = await enviarComentario(formData);
    
    setEnviando(false)
    if(result !== false){
      setUltimoAgregado(result)
      setMostrarNotif(true);
      resetForm();  
    } 
  }*/

  return (
    <>
      <Formik className="formulario" initialValues={initialValues} validationSchema={validacion} >
        {({ values, errors, touched, setFieldValue, handleSubmit }) => (
          <Form className="campos camposComen" style={{ borderColor: color }} encType="multipart/form-data" onSubmit={handleSubmit}>
            <h4 className="titulo-form" style={{ color: color, borderColor: color }}> Registar un Comentario </h4>
            <div className="campo">
              <label htmlFor="titulo">Titulo</label>
              <Field className="conBorde ingreso" style={{ borderColor: color }} name="titulo" id="titulo" />
            </div>
            {errors.titulo && touched.titulo ? (<Alert variant="warning" >{errors.titulo}</Alert>) : null}

            <div className="star-wrapper">
              <div className="star">
                {[...Array(5)].map((_, index) => {
                  const ratingValue = index + 1;

                  return (
                    <button
                      key={index}
                      onMouseOver={() => setIsHover(ratingValue)}
                      onMouseOut={() => setIsHover(null)}
                      onMouseEnter={() => setHoverFill(ratingValue)}
                      onMouseLeave={() => setHoverFill(null)}
                      onClick={() => setRating(ratingValue)}
                    >
                      <FaStar
                        className="FaStar"
                        size={40}
                        style={{
                          color:
                            ratingValue <= (hoverFill || rating)
                              ? "#000"
                              : "#ccc",
                        }}
                        onChange={(ratingValue) => setRating(ratingValue)}
                        value={ratingValue}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="campo">
              <label htmlFor="descripcion">Descripcion</label>
              <Field as={'textarea'} className="conBorde ingreso" style={{ borderColor: color }} name="descripcion" id="descripcion" />
            </div>
            {errors.descripcion && touched.descripcion ? (<Alert variant="warning" >{errors.descripcion}</Alert>) : null}
            <button className="enviar conBorde " style={{ borderColor: color, backgroundColor: color }} type="submit" disabled={enviando}>Enviar</button>
          </Form>
        )}
      </Formik>

    </>
  )
}

export default FormularioComentario;