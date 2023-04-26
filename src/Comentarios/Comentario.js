import './Comentario.css';
import logo from '../Imagenes/Logo5.png';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

function Comentario({ titulo, usuario, valor, descripcion, color }) {

    const calificacion = valor;

    return (
        <>
            <div style={{ borderColor: color }} className="Comentario conBorde">
                <h4>{titulo} - {usuario}</h4>
                <div className=".star-wrapper-mostrar">
                    <div className="star-mostrar">
                        {[...Array(5)].map((_, index) => {
                            const ratingValue = index + 1;

                            return (
                                <FaStar
                                    className="FaStar"
                                    key={index}
                                    size={20}
                                    style={{
                                        color:
                                            calificacion >= ratingValue
                                                ? "#000"
                                                : "#ccc",
                                    }}
                                />
                            );
                        })}
                    </div>
                </div>
                <p> {descripcion}</p>
            </div>
        </>

    );
}

export default Comentario;