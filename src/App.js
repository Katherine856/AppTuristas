import { Routes, Route } from 'react-router-dom';
import BodyPrincipal from './Body-PaginaPrincipal/BodyPrincipal';
import BodyNosotros from './Body-Nosotros/BodyNosotros';
import BodyServicio from './Body-Servicio/BodyServicio';
import BodyTemplate from './Bodies/Body-Template';
import Login from './Login/Login';


const App = () =>{

    return(
        <>
            <Routes>
                <Route path='/' element={<BodyPrincipal/>}/>
                <Route path='/:id' element={<BodyServicio />}/>
                <Route path='/Servicios/:seccion' element={<BodyTemplate/>}/>
                <Route path='/Nosotros' element={<BodyNosotros />}/>
                <Route path='/servicio/:id' element={<BodyServicio/> } />
                <Route path='/Login' element={<Login/> } />
                <Route path='*' element={<>404</>}/>
            </Routes>
        </>
    );
}

export default App;