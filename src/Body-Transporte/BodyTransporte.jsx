import './BodyTransporte.css';
import Header from '../Header/Header';
import Tarjeta from "../Tarjeta/Tarjeta";
import '../index.css';

const BodyTransporte = () => {
    let color = "#6C5EE6";
    let info = [
        {
            id: "1234",
            titulo: "China",
            descripcion: "lkasdjfklajd",
            min: "1000",
            max: "1000",
            color: color
        },
        {
            id: "2345",
            titulo: "China",
            descripcion: "lkasdjfklajd",
            min: "1000",
            max: "1000",
            color: color
        },
        {
            id: "3456",
            titulo: "China",
            descripcion: "lkasdjfklajd",
            min: "1000",
            max: "1000",
            color: color
        }
    ];
    return(
        <>
            <Header color = {color} nombre='Transporte'/>
            <div className="servicios">
                {info.map((info, index) => 
                    <Tarjeta
                        key={index} 
                        to={"/servicio/" + info.id} 
                        titulo={info.titulo} 
                        descripcion={info.descripcion} 
                        min={info.min} 
                        max={info.max} 
                        color={info.color} />
                )}
            </div>
        </>
    );
}

export default BodyTransporte;