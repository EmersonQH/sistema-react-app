import React from "react"
import { useNavigate } from "react-router-dom";
import { FaFolder, FaPencilAlt, FaTrash } from "react-icons/fa";
import '../styles/stylesMenuOrganizaciones.css'



const MenuOrganizaciones = () => {
    const navigate = useNavigate();

    const irALogin = () => {
        navigate("/");
    };
    const irAListaProyecto = () => {
        navigate("/listaProyectos");
    };
    const irARegistroOrganizacion = () => {
        navigate("/registroOrganizaciones");
    };

    return (
        <div className="menu-container">
            <header className="menu-header">
                <h1>ReqWizards App</h1>
                <span>Menú Principal /</span>
            </header>

            <div className="menusub-container">

                <aside className="sidebar">
                    {/*<div className="nav-button">
                            <button className="atras-button">Atras</button>
                            <button className="adelante-button">Adelante</button>
                        </div>*/}
                    <div className="bar-menu">
                        <p1>MENU PRINCIPAL</p1>
                    </div>

                    <div className="profile-section" >
                        <div className="profile-icon">👤</div>
                        <p2>Nombre Autor - Cod</p2>
                        <button onClick={irALogin} className="logout-button" >Cerrar Sesión</button>
                    </div>
                </aside>

                <main className="main-content">
                    <h2>MENÚ PRINCIPAL - EMPRESAS</h2>
                    <section className="organization-section">
                        <h3>Organización Principal</h3>

                        <div className="menu-tabla-center">
                            <table className="menu-centertabla">
                                <thead>
                                    <tr>
                                        <th>Código</th>
                                        <th>Nombre</th>
                                        <th>Fecha creación</th>
                                        <th>Versión</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ORG-0001</td>
                                        <td>Empresa de Software ReqWizards</td>
                                        <td>23/10/2023</td>
                                        <td>00.01</td>
                                        <td>
                                            <button className="botton-crud"><FaFolder style={{ color: "yellow", cursor: "pointer" }} /></button>
                                            <button className="botton-crud"><FaPencilAlt style={{ color: "blue", cursor: "pointer" }} /></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </section>
                    <section className="organizations-section">
                        <h3>Organizaciones</h3>

                        <div className="sectionTextBuscar">
                            <input className="textBuscar" type="text" placeholder="Buscar" />
                            <button className="search-button">Buscar</button>
                        </div>


                        <div className="search-section-bar">
                            <button onClick={irARegistroOrganizacion} className="register-button">Registrar Organización</button>
                            <div className="searchbar">
                                <select className="year-input"><option>AÑO</option></select>
                                <select className="month-input"><option>MES</option></select>
                            </div>
                        </div>

                        <div className="menu-tabla-center">
                            <table className="menu-centertabla">
                                <thead>
                                    <tr>
                                        <th>Código</th>
                                        <th>Nombre</th>
                                        <th>Fecha creación</th>
                                        <th>Versión</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody onClick={irAListaProyecto}>
                                    <tr>
                                        <td>ORG-0002</td>
                                        <td>Mocar Company</td>
                                        <td>23/10/2023</td>
                                        <td>00.01</td>
                                        <td>
                                            <button className="botton-crud"><FaFolder style={{ color: "yellow", cursor: "pointer" }} /></button>
                                            <button className="botton-crud"><FaPencilAlt style={{ color: "blue", cursor: "pointer" }} /></button>
                                            <button className="botton-crud"><FaTrash style={{ color: "red", cursor: "pointer" }} /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ORG-0003</td>
                                        <td>PetShop Veterinaria</td>
                                        <td>10/05/2023</td>
                                        <td>00.01</td>
                                        <td>
                                            <button className="botton-crud"><FaFolder style={{ color: "yellow", cursor: "pointer" }} /></button>
                                            <button className="botton-crud"><FaPencilAlt style={{ color: "blue", cursor: "pointer" }} /></button>
                                            <button className="botton-crud"><FaTrash style={{ color: "red", cursor: "pointer" }} /></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                        <h4>Total de registros 2</h4>
                        <div className="export-buttons">
                            <button className="export-button">Excel</button>
                            <button className="export-button">PDF</button>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default MenuOrganizaciones