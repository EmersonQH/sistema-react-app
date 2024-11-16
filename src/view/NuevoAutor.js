import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/stylesNuevoAutor.css';

const NuevoAutor = () => {

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
                <span>Menú Principal / Mocar Company / Sistema Inventario / Autores / Nuevo Autor /</span>
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
                    <h2>NUEVO AUTOR</h2>
                    <section className="ro-organization">
                        <h3>
                            <label className="ro-codigo" >Código </label>
                            <label className="ro-version">Version</label>
                            <label className="ro-Fecha">Fecha</label>
                        </h3>
                        <div className="ro-cod-vers">
                            <div className="ro-fiel-cod">
                                <input disabled type="text" className="inputBloq-field" value="AUT-001" readOnly size="30" />
                            </div>
                            <div className="ro-fiel-vers">
                                <input disabled type="text" className="inputBloq-field" value="00.01" readOnly size="30" />
                            </div>
                            <div className="ro-fiel-fecha">
                                <input disabled type="text" className="inputBloq-field" value="16/11/2024" readOnly size="30" />
                            </div>
                        </div>
                    </section>

                    <section className="ro-organization-section">
                        <h3>Información Personal</h3>

                        <div className="ro-cod-vers">
                            <div className="ro-fiel-cod">
                                <h4>Apellido Paterno</h4>
                                <input className="inputnombre-field" type="text"placeholder=""  size="30" />
                            </div>
                            <div className="ro-fiel-vers">
                                <h4>Apellido Materno</h4>
                                <input className="inputnombre-field" type="text"placeholder=""  size="30" />
                            </div>
                            <div className="ro-fiel-fecha">
                                <h4>Nombres</h4>
                                <input className="inputnombre-field" type="text"placeholder=""  size="30" />
                            </div>
                        </div>
                        
                        <div className="ro-cod-vers">
                            <div className="ro-fiel-cod">
                                <h4>Alias</h4>
                                <input className="inputnombre-field" type="text"placeholder=""  size="30" />
                            </div>
                            <div className="ro-fiel-vers">
                                <h4>Rol</h4>
                                <input className="inputnombre-field" type="text"placeholder=""  size="30" />
                            </div>
                            <div className="ro-fiel-fecha">
                                <h4>Contraseña</h4>
                                <input className="inputnombre-field" type="text"placeholder=""  size="30" />
                            </div>
                        </div>

                        <div className="ro-cod-vers">
                            <div className="ro-fiel-cod">
                                <h4>Teléfono</h4>
                                <input className="inputnombre-field" type="text"placeholder=""  size="30" />
                            </div>
                            <div className="ro-fiel-vers">
                                <h4>DNI</h4>
                                <input className="inputnombre-field" type="text"placeholder=""  size="30" />
                            </div>
                        </div>
                    </section>

                    <section className="ro-organization">
                        <h3>
                            <label className="ro-codigo" >Organización </label>
                            <label className="ro-version">Autor de plantilla</label>
                            <label className="ro-Fecha">Estado</label>
                        </h3>
                        <div className="ro-cod-vers">
                            <div className="ro-fiel-cod">
                                <input disabled type="text" className="inputBloq-field" value="ORG-00.01" readOnly size="30" />
                            </div>
                            <div className="ro-fiel-vers">
                                <input disabled type="text" className="inputBloq-field" value="AUT-00.00" readOnly size="30" />
                            </div>
                            <div className="ro-fiel-fecha">
                                <input className="inputnombre-field" type="text"placeholder=""  size="30" />
                            </div>
                        </div>
                    </section>

                    <section className="ro-organizations-section">
                        <h3>Comentario</h3>

                        <div className="input-text">
                            <textarea className="input-fieldtext" rows="3" placeholder="Añadir comentarios sobre el proyecto"></textarea>
                        </div>
                    </section>

                    <section className="ro-organizations-section">
                        <h3>Permiso para ver y editar plantillas</h3>

                        <div className="ro-cod-vers">
                            <div className="ro-fiel-cod">
                                <input type="checkbox" className="custom-checkbox" />
                                <input type="checkbox" className="custom-checkbox" />
                            </div>
                            <div className="ro-fiel-cod-mar">
                                <input disabled type="text" className="inputBloq-field-select" value="Plantilla de Actores" readOnly size="60" />
                            </div>
                            <div className="ro-fiel-cod">
                                <input type="checkbox" className="custom-checkbox" />
                                <input type="checkbox" className="custom-checkbox" />
                            </div>
                            <div className="ro-fiel-cod-mar">
                                <input disabled type="text" className="inputBloq-field-select" value="Plantilla de Trazabilidad" readOnly size="60" />
                            </div>
                        </div>

                        <div className="ro-cod-vers">
                            <div className="ro-fiel-cod">
                                <input type="checkbox" className="custom-checkbox" />
                                <input type="checkbox" className="custom-checkbox" />
                            </div>
                            <div className="ro-fiel-cod-mar">
                                <input disabled type="text" className="inputBloq-field-select" value="Plantilla de Entrevista" readOnly size="60" />
                            </div>
                            <div className="ro-fiel-cod">
                                <input type="checkbox" className="custom-checkbox" />
                                <input type="checkbox" className="custom-checkbox" />
                            </div>
                            <div className="ro-fiel-cod-mar">
                                <input disabled type="text" className="inputBloq-field-select" value="Plantilla de Req. no Funcionales" readOnly size="60" />
                            </div>
                        </div>

                        <div className="ro-cod-vers">
                            <div className="ro-fiel-cod">
                                <input type="checkbox" className="custom-checkbox" />
                                <input type="checkbox" className="custom-checkbox" />
                            </div>
                            <div className="ro-fiel-cod-mar">
                                <input disabled type="text" className="inputBloq-field-select" value="Plantilla de Educción" readOnly size="60" />
                            </div>
                            <div className="ro-fiel-cod">
                                <input type="checkbox" className="custom-checkbox" />
                                <input type="checkbox" className="custom-checkbox" />
                            </div>
                            <div className="ro-fiel-cod-mar">
                                <input disabled type="text" className="inputBloq-field-select" value="Plantilla de Expertos" readOnly size="60" />
                            </div>
                        </div>

                        <div className="ro-cod-vers">
                            <div className="ro-fiel-cod">
                                <input type="checkbox" className="custom-checkbox" />
                                <input type="checkbox" className="custom-checkbox" />
                            </div>
                            <div className="ro-fiel-cod-mar">
                                <input disabled type="text" className="inputBloq-field-select" value="Plantilla de Ilación" readOnly size="60" />
                            </div>
                            <div className="ro-fiel-cod">
                                <input type="checkbox" className="custom-checkbox" />
                                <input type="checkbox" className="custom-checkbox" />
                            </div>
                            <div className="ro-fiel-cod-mar">
                                <input disabled type="text" className="inputBloq-field-select" value="Plantilla de Fuentes" readOnly size="60" />
                            </div>
                        </div>

                        <div className="ro-cod-vers">
                            <div className="ro-fiel-cod">
                                <input type="checkbox" className="custom-checkbox" />
                                <input type="checkbox" className="custom-checkbox" />
                            </div>
                            <div className="ro-fiel-cod-mar">
                                <input disabled type="text" className="inputBloq-field-select" value="Plantilla de Especificación" readOnly size="60" />
                            </div>
                            <div className="ro-fiel-cod">
                                <input type="checkbox" className="custom-checkbox" />
                                <input type="checkbox" className="custom-checkbox" />
                            </div>
                            <div className="ro-fiel-cod-mar">
                                <input disabled type="text" className="inputBloq-field-select" value="Plantilla de Métricas" readOnly size="60" />
                            </div>
                        </div>

                        <div className="ro-cod-vers">
                            <div className="ro-fiel-cod">
                                <input type="checkbox" className="custom-checkbox" />
                                <input type="checkbox" className="custom-checkbox" />
                            </div>
                            <div className="ro-fiel-cod-mar">
                                <input disabled type="text" className="inputBloq-field-select" value="Plantilla de Artefactos" readOnly size="60" />
                            </div>
                            <div className="ro-fiel-cod">
                                <input type="checkbox" className="custom-checkbox" />
                                <input type="checkbox" className="custom-checkbox" />
                            </div>
                            <div className="ro-fiel-cod-mar">
                                <input disabled type="text" className="inputBloq-field-select" value="Plantilla de Pruebas de Software" readOnly size="60" />
                            </div>
                        </div>

                        <div className="ro-buttons">
                            <button onClick={irAMenuOrganizaciones} className="ro-button" size="60">Cancelar</button>
                            <button onClick={irAMenuOrganizaciones} className="ro-button" size="60">Crear Autor</button>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default NuevoAutor;