import axios from 'axios';

const HOST = 'http://localhost:5000/servicio';

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