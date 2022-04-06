import React,{useState} from 'react';
/* import './cssloginUsuario/Login.css'
 */import LogoLog from './logoImagen/login.png'
/* import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' */
//importaciones internas
/* import {cerrarSesion} from '../../../redux/usuarios/usuarios'
import { useState } from 'react/cjs/react.production.min'; */


const Login = () => {
    /* const usuario = useSelector(state => state.usuarioMain.usuario)
    const dispatch= useDispatch() */
    const[usuario, setUsuario] = useState(false)
    return ( 
        <div className="btn-group">
        <button type="button" className="btn btn-secondary dropdown-toggle headerLogin" src ={LogoLog} data-bs-toggle="dropdown" aria-expanded="false">
            <img src ={LogoLog} alt="logoIniciar" ></img>
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li><button className="dropdown-item" type="button">Log In</button></li>
          <li><button className="dropdown-item" type="button">Sign Up</button></li>
          <li><button className="dropdown-item" type="button">Sign Out</button></li>
        </ul>
      </div>
           
    );
}
export default Login;

