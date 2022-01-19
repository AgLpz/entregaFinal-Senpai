import React from 'react'
import './login.css'

const Login = () => {


    return (
        <div>
    <main className="main">
  <h2 className="tituloLogin">
    Inicia sesión
  </h2>
  <form method="POST" action="javascript:void(0);">
    <input className="inputLogin" id="mail" type="email" name="mail" placeholder="Ingrese su correo" /> 
    <input className="inputLogin" id="password" type="text" name="password" placeholder="Ingrese su contraseña" />
    <button id="login">Login</button>
    <h3 className="registerLink">¿Aún no tienes una cuenta? <a href="../register/register.html"> Regístrate</a></h3>
  </form>
</main>

        </div>
    )
}

export default Login
