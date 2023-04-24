import axios from 'axios';
const HOST = 'http://localhost:5000/empresa/servicios';

const fetchDataServicios = async (idEmpresa) =>
    axios
        .get(`${HOST}/${idEmpresa}`)
        .then((response) => 
            response.data
        )
        .catch((error) => [])

export { fetchDataServicios };