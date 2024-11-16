import React from "react"
import { useNavigate } from "react-router-dom";
import { FaFolder, FaPencilAlt, FaTrash } from "react-icons/fa";
import '../styles/stylesAutores.css'

const Autores = () => {
    const navigate = useNavigate();

    const irAMenuOrganizaciones = () => {
        navigate("/menuOrganizaciones");
    };
    const irANuevoAutor = () => {
        navigate("/nuevoAutor");
    };
    const irALogin = () => {
        navigate("/");
    };


    return (
        <div className="autor-container">
            <header className="autor-header">
                <h1>ReqWizards App</h1>
                <span>Menú Principal / Autores /Sistema Inventario/ Autores</span>
            </header>

            <div className="autorsub-container">

                <aside className="autor-sidebar">
                    {/*<div className="nav-button">
                            <button className="atras-button">Atras</button>
                            <button className="adelante-button">Adelante</button>
                        </div>*/}
                    <div className="bar-lista">
                        <p1 onClick={irAMenuOrganizaciones}>MENU PRINCIPAL</p1>
                    </div>

                    <div className="autor-profile-section" >
                        <div className="autor-profile-icon">👤</div>
                        <p2>Nombre Autor - Cod</p2>
                        <button onClick={irALogin} className="autor-logout-button" >Cerrar Sesión</button>
                    </div>
                </aside>

                <main className="autor-content">
                    <h2>AUTORES</h2>
                    <section className="autor-organizations-section">

                        <div className="autor-search-section-bar">
                            <button onClick={irANuevoAutor} className="autor-register-button">Nuevo Autor</button>
                            <div className="autor-sectionTextBuscar ">
                                <input className="autor-textBuscar" type="text" placeholder="Buscar" />
                                <button className="autor-search-button">Buscar</button>
                            </div>
                        </div>
                       


                        <table className="autor-centertabla">
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Nombre</th>
                                    <th>Fecha </th>
                                    <th>Version</th>
                                    <th>Rol</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>AUT-0001</td>
                                    <td>Alejandra Fernandez</td>
                                    <td>26/10/2023</td>
                                    <td>00.01</td>
                                    <td>Diseñador de software</td>
                                    <td>
                                        <button className="botton-crud"><FaFolder style={{ color: "yellow", cursor: "pointer" }} /></button>
                                        <button className="botton-crud"><FaPencilAlt style={{ color: "blue", cursor: "pointer" }} /></button>
                                        <button className="botton-crud"><FaTrash style={{ color: "red", cursor: "pointer" }} /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>AUT-0002</td>
                                    <td>Luis Chirinos</td>
                                    <td>10/05/2023</td>
                                    <td>00.01</td>
                                    <td>Desarrollador de software</td>
                                    <td>
                                        <button className="botton-crud"><FaFolder style={{ color: "yellow", cursor: "pointer" }} /></button>
                                        <button className="botton-crud"><FaPencilAlt style={{ color: "blue", cursor: "pointer" }} /></button>
                                        <button className="botton-crud"><FaTrash style={{ color: "red", cursor: "pointer" }} /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>AUT-0003</td>
                                    <td>William Condori</td>
                                    <td>24/04/2023</td>
                                    <td>00.01</td>
                                    <td>Desarrollador de software</td>
                                    <td>
                                        <button className="botton-crud"><FaFolder style={{ color: "yellow", cursor: "pointer" }} /></button>
                                        <button className="botton-crud"><FaPencilAlt style={{ color: "blue", cursor: "pointer" }} /></button>
                                        <button className="botton-crud"><FaTrash style={{ color: "red", cursor: "pointer" }} /></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                                               

                        <h4 className="autor-h4">Total de registros 3</h4>
                        <div className="autor-export-buttons">
                            <button className="autor-export-button">Excel</button>
                            <button className="autor-export-button">PDF</button>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Autores