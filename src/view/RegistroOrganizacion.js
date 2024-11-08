import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/stylesRegistroOrganizacion.css';

const RegistroOrganizacion = () => {

    const navigate = useNavigate();

    const irAMenuOrganizaciones = () => {
        navigate("/menuOrganizaciones");
    };

    const irALogin = () => {
        navigate("/");
    };


    return (
        <div className="ro-container">
            <header className="ro-header">
                <h1>ReqWizards App</h1>
                <span>Menú Principal / Registrar Empresa /</span>
            </header>

            <div className="rosub-container">

                <aside className="sidebar">
                    {/*<div className="nav-button">
                            <button className="atras-button">Atras</button>
                            <button className="adelante-button">Adelante</button>
                        </div>*/}
                    <div className="bar-ro">
                        <p1 onClick={irAMenuOrganizaciones}>MENU PRINCIPAL</p1>
                    </div>

                    <div className="profile-section" >
                        <div className="profile-icon">👤</div>
                        <p2>Nombre Autor - Cod</p2>
                        <button onClick={irALogin}className="logout-button" >Cerrar Sesión</button>
                    </div>
                </aside>

                <main className="ro-content">
                    <h2>NUEVO ORGANIZACION</h2>
                    <section className="ro-organization">
                        <h3>
                            <label className="ro-codigo">Código </label>
                            <label className="ro-version">Version</label>
                            <label className="ro-Fecha">Fecha</label>
                        </h3>
                        <div className="ro-cod-vers">
                            <div className="ro-fiel-cod">
                                <input disabled type="text" className="inputBloq-field" value="ORG-001" readOnly size="30" />
                            </div>
                            <div className="ro-fiel-vers">
                                <input disabled type="text" className="inputBloq-field" value="00.01" readOnly size="30" />
                            </div>
                            <div className="ro-fiel-fecha">
                                <input disabled type="text" className="inputBloq-field" value="23/10/23" readOnly size="30" />
                            </div>
                        </div>
                    </section>

                    <section className="ro-organization-section">
                        <h3>Informacion del Proyecto</h3>

                        <div className="ro-cod-vers">
                            <div className="ro-fiel-cod">
                                <h4>Nombre</h4>
                                <input className="inputnombre-field" type="text"placeholder=""  size="30" />
                            </div>
                            <div className="ro-fiel-vers">
                                <h4>Direccion</h4>
                                <input className="inputnombre-field" type="text"placeholder=""  size="30" />
                            </div>
                            <div className="ro-fiel-fecha">
                                <h4>Telefono organizacion</h4>
                                <input className="inputnombre-field" type="text"placeholder=""  size="30" />
                            </div>
                        </div>
                        
                        <div className="ro-cod-vers">
                            <div className="ro-fiel-cod">
                                <h4>Representante Legal</h4>
                                <input className="inputnombre-field" type="text"placeholder=""  size="30" />
                            </div>
                            <div className="ro-fiel-vers">
                                <h4>Telefono Representante</h4>
                                <input className="inputnombre-field" type="text"placeholder=""  size="30" />
                            </div>
                            <div className="ro-fiel-fecha">
                                <h4>RUC organizacion</h4>
                                <input className="inputnombre-field" type="text"placeholder=""  size="30" />
                            </div>
                        </div>

                        <div className="ro-cod-vers">
                            <div className="ro-fiel-cod">
                                <h4>Contacto (Nombre y Apellido)</h4>
                                <input className="inputnombre-field" type="text"placeholder=""  size="30" />
                            </div>
                            <div className="ro-fiel-vers">
                                <h4>Telefono del contacto</h4>
                                <input className="inputnombre-field" type="text"placeholder=""  size="30" />
                            </div>
                        </div>


                        <div className="ro-cod-vers">
                            <div className="ro-fiel-cod">
                                <h4>Tipo</h4>
                                <input disabled type="text" className="inputBloq-field" value="Contratante" readOnly size="30" />
                            </div>
                            <div className="ro-fiel-vers">
                                <h4>Autor</h4>
                                <input disabled type="text" className="inputBloq-field" value="AUT-00.00" readOnly size="30" />
                            </div>
                            <div className="ro-fiel-fecha">
                                <h4>Estado</h4>
                                <input className="inputnombre-field" type="text"placeholder=""  size="30" />
                            </div>
                        </div>



                    </section>

                    <section className="ro-organizations-section">
                        <h3>Comentario</h3>

                        <div className="input-text">
                            <textarea className="input-fieldtext" rows="3" placeholder="Añadir comentarios sobre el proyecto"></textarea>
                        </div>

                        <div className="ro-buttons">
                            <button onClick={irAMenuOrganizaciones} className="ro-button" size="50">Cancelar</button>
                            <button onClick={irAMenuOrganizaciones} className="ro-button" size="50">Registrar</button>
                        </div>
                    </section>




                </main>
            </div>
        </div>
    );
};

export default RegistroOrganizacion;
