import axios from "axios"

const enviarServicio = async (formData) => {
    for (let [name, value] of formData) {
        console.log(`${name} = ${value}`); 
    }
    axios.post("http://localhost:5000/servicio/insertar", formData, {
        headers: {
            "Content-Type": 'multipart/form-data'
        }
    })
        .then((result) => {
            return result.data;
        })
}

const enviarComentario = (formDataComen) => {
    for (let [name, value] of formDataComen) {
        console.log(`${name} = ${value}`); 
    }
    axios.post("http://localhost:5000/servicio/insertarcomentario", formDataComen, {
        headers: {
            "Content-Type": 'multipart/form-data'
        }
    })
        .then((result) => result.data)
}

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
    formData.append('idEmpresa', sessionStorage.getItem('idUsuario'))
    return formData;
}


const formatearDataComen = (info, idServ) => {
    const formData = new FormData()

    formData.append('titulo', info.titulo)
    formData.append('valor', info.valor)
    formData.append('descripcion', info.descripcion)
    formData.append('idServicio', idServ)
    formData.append('idUsuario', sessionStorage.getItem('idUsuario'))

    return formData;
}

export { enviarServicio, formatearData, enviarComentario, formatearDataComen }