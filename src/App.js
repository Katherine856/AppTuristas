import { Routes, Route } from 'react-router-dom';
import BodyPrincipal from './Body-PaginaPrincipal/BodyPrincipal';
<<<<<<< HEAD
import Header from './Header/Header';
import { useState, useEffect } from 'react';
import BodyNosotros from './Body-Nosotros/BodyNosotros';
import BodyServicio from './Body-Servicio/BodyServicio';
import BodyServicios from './Body-Servicios/BodyServicios';

=======
import BodyNosotros from './Body-Nosotros/BodyNosotros';
import BodyServicio from './Body-Servicio/BodyServicio';
import BodyTemplate from './Bodies/Body-Template';
>>>>>>> f289bc4ce87960827b0a72a5da3bb464070bd907

const App = () =>{

    return(
        <>
            <Routes>
                <Route path='/' element={<BodyPrincipal/>}/>
<<<<<<< HEAD
                <Route path='/:id' element={<BodyServicios />}/>
=======
                <Route path='/Servicios/:seccion' element={<BodyTemplate/>}/>
>>>>>>> f289bc4ce87960827b0a72a5da3bb464070bd907
                <Route path='/Nosotros' element={<BodyNosotros />}/>
                <Route path='/servicio/:id' element={<BodyServicio/> } />
                <Route path='*' element={<>404</>}/>
            </Routes>
        </>
    );
}

export default App;