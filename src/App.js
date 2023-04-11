import { Routes, Route, Navigate } from 'react-router-dom';
import BodyPrincipal from './Body-PaginaPrincipal/BodyPrincipal';
import BodyNosotros from './Body-Nosotros/BodyNosotros';
import BodyServicio from './Body-Servicio/BodyServicio';
import BodyTemplate from './Bodies/Body-Template';
import Login from './Login/Login';
import FormularioServicio from './Formularios/Formulario-Servicio';
import BodyServEmpresa from './Body-ServEmpresa/ServEmpresa';

const App = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<BodyPrincipal />} />
                <Route path='/:id' element={<BodyServicio />} />
                <Route path='/Servicios/:seccion' element={<BodyTemplate />} />
                <Route path='/Nosotros' element={<BodyNosotros />} />
                <Route path='/servicio/:id' element={<BodyServicio />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/CrearServicio' element={<FormularioServicio />} />
                <Route path='/ConsultarServicio' element={<BodyServEmpresa />} />
                <Route path='*' element={<>404</>} />
            </Routes>
        </>
    );
}

export default App;