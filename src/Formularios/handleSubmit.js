import axios from "axios"

const enviarServicio = (formData) =>
    axios.post("http://localhost:5000/servicio/insertar", formData, {
        headers: {
            "Content-Type": 'multipart/form-data'
        }
    })
        .then((result) => result.data)


const formatearData = (info) => {
    const formData = new FormData()
    for (let i = 0; i < info.imagenes.length; i++) {
        formData.append('imagenes', info.imagenes[i])
    }
    formData.append('nombre', info.nombre)
    formData.append('min', info.min)
    formData.append('max', info.max)
    formData.append('descripcion', info.descripcion)
    formData.append('tipo', info.tipo)
    formData.append('idEmpresa', sessionStorage.getItem('idEmpresa'))
    return formData;
}

export { enviarServicio, formatearData }