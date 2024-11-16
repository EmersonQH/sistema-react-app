import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/stylesActaAceptacion.css';

const ActaAceptacion= () => {

    const navigate = useNavigate();

    const irAMenuOrganizaciones = () => {
        navigate("/menuOrganizaciones");
    };
    const irAListaProyecto = () => {
        navigate("/listarProyecto");
    };
    const irALogin = () => {
        navigate("/");
    };


    return (
        <div className="acta-container">
            <header className="acta-header">
                <h1>ReqWizards App</h1>
                <span>Menú Principal / Mocar Company / Sistema Inventario/ Acta /</span>
            </header>

            <div className="actasub-container">

                <aside className="sidebar">
                    {/*<div className="nav-button">
                            <button className="atras-button">Atras</button>
                            <button className="adelante-button">Adelante</button>
                        </div>*/}
                    <div className="bar-rp">
                        <p1 onClick={irAMenuOrganizaciones}>MENU PRINCIPAL</p1>
                    </div>

                    <div className="profile-section" >
                        <div className="profile-icon">👤</div>
                        <p2>Nombre Autor - Cod</p2>
                        <button onClick={irALogin}className="logout-button" >Cerrar Sesión</button>
                    </div>
                </aside>

                <main className="acta-content">
                    <h2>ACTA DE ACEPTACION</h2>
                    <button className="acta-button">Seleccionar Archivo</button>(.jpg .png .jpeg .pdf .docx)
                     
                    <section className="acta-organization-section">
                        <h3>Informacion del Acta</h3>
                        
                        <div className="acta-cod-vers">
                            <div className="fiel-cod">
                                <input disabled type="text" className="acta-inputBloq-field" value="" readOnly size="100" />
                            </div>
                        </div>
                        <div className="acta-buttons">
                            <button onClick={irAListaProyecto} className="acta-button" size="50">Guardar Acta</button>
                        </div>


                    </section>
                

                </main>
            </div>
        </div>
    );
};

export default ActaAceptacion;
