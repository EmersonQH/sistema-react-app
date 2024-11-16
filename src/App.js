import Login from './view/Login.js';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MenuOrganizaciones from './view/MenuOrganizaciones.js';
import ListaProyectos from './view/ListaProyectos.js';
import RegistroOrganizacion from './view/RegistroOrganizacion.js';
import RegistroProyecto from './view/RegistroProyecto.js';
import MenuProyecto from './view/MenuProyecto.js';
import ActaAceptacion from './view/ActaAceptacion.js';
import Autores from './view/Autores.js';
import NuevoAutor from './view/NuevoAutor.js';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/menuOrganizaciones" element={<MenuOrganizaciones />} />
          <Route path="/registroOrganizaciones" element={<RegistroOrganizacion />} />
          <Route path="/listaProyectos" element={<ListaProyectos />} />
          <Route path="/registroProyecto" element={<RegistroProyecto />} />
          <Route path="/menuProyecto" element={<MenuProyecto />} />
          <Route path="/actaAceptacion" element={<ActaAceptacion />} />
          <Route path="/autores" element={<Autores />} />
          <Route path="/nuevoAutor" element={<NuevoAutor />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
