import './Footer.css';
import logo from '../Imagenes/Logo5.png';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer({ color }) {

    return (
        <>
            <div style={{ backgroundColor: color }} className="Footer">
                <Link className="linkPrincipalFooter" to='/'><img src={logo} className="Footer-logo" alt="logo" /></Link>
                <div className='redesFooter'> 
                    <Link to=''><FaFacebook /></Link>
                    <Link to=''><FaInstagram /></Link>
                    <Link to=''><FaWhatsapp /></Link>
                </div>
            </div>
        </>

    );
}

export default Footer;