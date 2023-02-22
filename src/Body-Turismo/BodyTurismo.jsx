import './BodyTurismo.css';
import Header from '../Header/Header';
import Tarjeta from "../Tarjeta/Tarjeta";
import '../index.css';

const BodyTurismo = () => {
    let color = "#00E675";
    let info = [
        {
            id: "1234",
            titulo: "China",
            descripcion: "lkasdjfklajd",
            min: "1000",
            max: "3000",
            color: color
        },
        {
            id: "2345",
            titulo: "Colombia",
            descripcion: "lkasdjfklajd",
            min: "1200",
            max: "3500",
            color: color
        },
        {
            id: "3456",
            titulo: "España",
            descripcion: "lkasdjfklajd",
            min: "600",
            max: "1200",
            color: color
        }
    ];
    return(
        <>
            <Header color = {color} nombre='Turismo'/>
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

export default BodyTurismo;