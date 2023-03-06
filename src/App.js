import { Routes, Route } from 'react-router-dom';
import BodyPrincipal from './Body-PaginaPrincipal/BodyPrincipal';
import BodyNosotros from './Body-Nosotros/BodyNosotros';
import BodyServicio from './Body-Servicio/BodyServicio';
import BodyTemplate from './Bodies/Body-Template';

const App = () =>{

    return(
        <>
            <Routes>
                <Route path='/' element={<BodyPrincipal/>}/>
                <Route path='/Servicios/:seccion' element={<BodyTemplate/>}/>
                <Route path='/Nosotros' element={<BodyNosotros />}/>
                <Route path='/servicio/:id' element={<BodyServicio/> } />
                <Route path='*' element={<>404</>}/>
            </Routes>
        </>
    );
}

export default App;