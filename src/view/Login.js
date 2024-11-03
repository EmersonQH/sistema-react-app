import React from "react"
import '../styles/styles.css';


const Login = () =>{

    
    return (
        <div className='l-container'>
            <span className='title'>ReqWizards App</span>
            <form>
                <span className="User">Usuario</span>
                <input type='text' placeholder="Ejemplo: AUT-0000"/>
                <span className="contraseña">Contraseña</span>
                <input type='password' placeholder="********"/>
                <button >Ingresar</button>
                
            </form>
            <p>¿Olvidaste tu contraseña? </p>

        </div>
    )
}

export default Login