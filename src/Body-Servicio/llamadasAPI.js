import axios from 'axios';

const HOST = 'server-turismo-production.up.railway.app/servicio';

const fetchDataServicio = async id =>
    axios
        .get(`${HOST}/${id}`)
        .then((response) => response.data)
        .catch((error) => { })


const fetchImagenesServicio = async id =>
    axios
        .get(`${HOST}/imagenes/${id}`)
        .then((response) => response.data)
        .catch((error) => [])

const fetchDataComen = async id =>
    axios
        .get(`${HOST}/vercomen/${id}`)
        .then((response) => response.data)
        .catch((error) => [])

export { fetchDataServicio, fetchImagenesServicio, fetchDataComen };