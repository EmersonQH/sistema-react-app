import Login from './view/Login.js';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MenuOrganizaciones from './view/MenuOrganizaciones.js';
import ListaProyectos from './view/ListaProyectos.js';
function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/menuOrganizaciones" element={<MenuOrganizaciones />} />
          <Route path="/listaProyecto" element={<ListaProyectos />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
