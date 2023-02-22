import Header from "../Header/Header";
import './BodyNosotros.css';
import Tarjeta from "../Tarjeta/Tarjeta";
import '../index.css';
import FormularioEmpresa from "../Formularios/Formulario-Empresa";

const BodyNosotros = () => {

    let color = "#D94E9F";
    return(
        <>
            <Header color={color} nombre='Sobre Nosotros'/>
            <FormularioEmpresa />
        </>
    );
}

export default BodyNosotros;