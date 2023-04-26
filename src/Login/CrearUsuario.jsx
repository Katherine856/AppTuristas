import './Login.css';
import logo from '../Imagenes/Logo5.png';
import FormularioUsuario from '../Formularios/Formulario-Usuario';

const CrearUsuario = () =>{
    return (
        <div className="Fondo">
            <div className='Login'>
                <div className='contLogo'>
                    <img src={logo} className="imgLogo" alt="logo" />
                </div>
                <FormularioUsuario/>
            </div>
        </div>
    );
}

export default CrearUsuario;

