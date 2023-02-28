import Header from "../Header/Header";
import './BodyNosotros.css';
import '../index.css';
import FormularioEmpresa from "../Formularios/Formulario-Empresa";

const BodyNosotros = () => {    

    let color = "#D94E9F";
    return(
        <>
            <Header color={color} nombre='Sobre Nosotros'/>
            <div className="cont-nosotros">
                <div className="myv">
                    <h4 className="subtitulo-nosotros" style={{ color: color, borderColor: color}}>Misión</h4>
                    <p>Crear experiencias significativas, agradables y de fácil acceso para las personas que desean recorrer un nuevo destino. Experiencias aptas para todos los públicos, respetuosas con el medio y con el turista al que se le informa de manera ecuánime y al que queremos transmitir nuestra pasión por viajar. Para el año 2028 ser la empresa de referencia para todo aquel que quiera vivir una experiencia turística completa.  </p>
                </div>
                <div className="myv">
                    <h4 className="subtitulo-nosotros" style={{ color: color, borderColor: color }}>Visión</h4>
                    <p>Para el año 2028 ser la empresa de referencia para todo aquel que quiera vivir una experiencia turística completa. Convertirse en el punto de encuentro y el centro de las diferentes sinergias alrededor del turismo. </p>
                </div>
            </div>
            <FormularioEmpresa id='formulario'/>
        </>
    );
}

export default BodyNosotros;