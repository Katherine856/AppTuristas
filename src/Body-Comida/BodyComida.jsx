import Header from "../Header/Header";
import Tarjeta from "../Tarjeta/Tarjeta";
import "./BodyComida.css"
import '../index.css';


const BodyComida = () => {

    let color = "#FA7D1E";
    let info = [
        {
            id: "1234",
            titulo: "China",
            descripcion: "lkasdjfklajd",
            min: "1000",
            max: "3400",
            color: color
        },
        {
            id: "2345",
            titulo: "Colombia",
            descripcion: "lkasdjfklajd",
            min: "300",
            max: "700",
            color: color
        },
        {
            id: "2351",
            titulo: "Argentina",
            descripcion: "lkasdjfklajd",
            min: "1320",
            max: "2100",
            color: color
        },
        {
            id: "9382",
            titulo: "Sudáfrica",
            descripcion: "lkasdjfklajd",
            min: "4100",
            max: "6000",
            color: color
        },
        {
            id: "3456",
            titulo: "Perú",
            descripcion: "lkasdjfklajd",
            min: "1200000",
            max: "1900000",
            color: color
        }
    ];
    return(
        <>
            <Header color={ color } nombre='Comida'/>
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

export default BodyComida;