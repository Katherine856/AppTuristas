import { Routes, Route } from 'react-router-dom';
import BodyPrincipal from './Body-PaginaPrincipal/BodyPrincipal';
import Header from './Header/Header';
import { useState, useEffect } from 'react';
import BodyNosotros from './Body-Nosotros/BodyNosotros';
import BodyServicio from './Body-Servicio/BodyServicio';
import BodyServicios from './Body-Servicios/BodyServicios';


const App = () =>{

    return(
        <>
            
            <Routes>
                <Route path='/' element={<BodyPrincipal/>}/>
                <Route path='/:id' element={<BodyServicios />}/>
                <Route path='/Nosotros' element={<BodyNosotros />}/>
                <Route path='/servicio/:id' element={<BodyServicio/> } />
                <Route path='*' element={<>404</>}/>
            </Routes>
        </>
    );
}

export default App;