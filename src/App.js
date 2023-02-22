import { Routes, Route } from 'react-router-dom';
import BodyComida from './Body-Comida/BodyComida';
import BodyPrincipal from './Body-PaginaPrincipal/BodyPrincipal';
import BodyHospedaje from './Body-Hospedaje/BodyHospedaje';
import Header from './Header/Header';
import { useState, useEffect } from 'react';
import BodyTransporte from './Body-Transporte/BodyTransporte';
import BodyTurismo from './Body-Turismo/BodyTurismo';
import BodyNosotros from './Body-Nosotros/BodyNosotros';
import BodyServicio from './Body-Servicio/BodyServicio';


const App = () =>{

    return(
        <>
            
            <Routes>
                <Route path='/' element={<BodyPrincipal/>}/>
                <Route path='/Comida' element={<BodyComida />}/>
                <Route path='/Hospedaje' element={<BodyHospedaje />}/>
                <Route path='/Transporte' element={<BodyTransporte />}/>
                <Route path='/Turismo' element={<BodyTurismo />}/>
                <Route path='/Nosotros' element={<BodyNosotros />}/>
                <Route path='/servicio/:id' element={<BodyServicio/> } />
                <Route path='*' element={<>404</>}/>
            </Routes>
        </>
    );
}

export default App;