import logo from '../Imagenes/logo.png'
import { Link } from 'react-router-dom';
import './Tarjeta.css';

const Tarjeta = ({to, titulo, descripcion, min, max, color}) => {

    return(
        <Link to={to}>
            <div className="tarjeta" style={{borderColor: color}}>
                <img src={logo} alt="" />
                <div className="descripcion">
                    <h3>{titulo}</h3>
                    <p>{descripcion}</p>
                    <h6>{min} COP - {max} COP</h6>
                </div>
            </div>
        </Link>
    );
}

export default Tarjeta;