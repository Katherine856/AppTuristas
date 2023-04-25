import './Comentario.css';
import logo from '../Imagenes/Logo5.png';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

function Comentario({ color }) {

    const calificacion = 3

    return (
        <>
            <div style={{ borderColor: color }} className="Comentario conBorde">
                <h1>Nombre y Titulo</h1>
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
                <p> lorem ipsum dolor sit amet, consectetur</p>
            </div>
        </>

    );
}

export default Comentario;