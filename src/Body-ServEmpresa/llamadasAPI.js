import axios from 'axios';
const HOST = 'https://server-turismo-production.up.railway.app/empresa/servicios';

const fetchDataServicios = async (idEmpresa) =>
    axios
        .get(`${HOST}/${idEmpresa}`)
        .then((response) => 
            response.data
        )
        .catch((error) => [])

export { fetchDataServicios };