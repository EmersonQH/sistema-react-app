import React from "react"
import { useNavigate } from "react-router-dom";
import '../styles/stylesListaProyectos.css'

const ListaProyectos = () => {
    const navigate = useNavigate();

    const irARegistroProyecto = () => {
        navigate("/registroProyecto");
    };
    const irALogin = () => {
        navigate("/");
    };


    return (
        <div className="lista-container">
            <header className="lista-header">
                <h1>ReqWizards App</h1>
                <span>Menú Principal / Mocar Company /</span>
            </header>

            <div className="listasub-container">

                <aside className="lista-sidebar">
                    {/*<div className="nav-button">
                            <button className="atras-button">Atras</button>
                            <button className="adelante-button">Adelante</button>
                        </div>*/}
                    <div className="bar-lista">
                        <p1>MENU PRINCIPAL</p1>
                    </div>

                    <div className="lista-profile-section" >
                        <div className="lista-profile-icon">👤</div>
                        <p2>Nombre Autor - Cod</p2>
                        <button onClick={irALogin} className="lista-logout-button" >Cerrar Sesión</button>
                    </div>
                </aside>

                <main className="lista-content">
                    <h2>MOCAR COMPANY</h2>
                    <section className="lista-organizations-section">

                        <div className="lista-search-section-bar">
                            <button onClick={irARegistroProyecto} className="lista-register-button">Nuevo proyecto</button>
                            <div className="lista-sectionTextBuscar ">
                                <input className="lista-textBuscar" type="text" placeholder="Buscar" />
                                <button className="lista-search-button">Buscar</button>
                            </div>
                        </div>
                        <div className="lista-search-section-text">
                            <div className="lista-searchbar">
                                <select className="lista-year-input"><option>AÑO</option></select>
                                <select className="lista-month-input"><option>MES</option></select>
                            </div>
                        </div>


                        <table className="lista-centertabla">
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Nombre</th>
                                    <th>Fecha creación</th>
                                    <th>Fecha Modificion</th>
                                    <th>Estado</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>PROY-001</td>
                                    <td>SistemaInventario</td>
                                    <td>26/10/2023</td>
                                    <td>24/10/2023</td>
                                    <td>En Proceso</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>PROY-002</td>
                                    <td>SistemaFinanzas</td>
                                    <td>10/05/2023</td>
                                    <td>24/10/2023</td>
                                    <td>Concluido</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>PROY-003</td>
                                    <td>SistemaArticulos</td>
                                    <td>24/04/2023</td>
                                    <td>24/10/2023</td>
                                    <td>Concluido</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>

                        <h4 className="lista-h4">Total de registros 3</h4>
                        <div className="lista-export-buttons">
                            <button className="lista-export-button">Excel</button>
                            <button className="lista-export-button">PDF</button>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default ListaProyectos