import React from "react"
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';


const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Aquí podrías añadir la lógica de autenticación
        navigate('/menu'); // Redirige al menú principal
    };

    return (
        <div className="l-container">
            <span className="title">ReqWizards App</span>
            <form onSubmit={handleLogin}>
                <span className="User">Usuario</span>
                <input type="text" placeholder="Ejemplo: AUT-0000" />
                <span className="contraseña">Contraseña</span>
                <input type="password" placeholder="********" />
                <button type="submit">Ingresar</button>
            </form>
            <p>¿Olvidaste tu contraseña?</p>
        </div>
    )
}

export default Login