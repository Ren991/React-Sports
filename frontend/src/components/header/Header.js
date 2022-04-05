import React from 'react';
import './cssloginUsuario/loginUsuario.css'
import Login from './Login'
import logoCarrito from './logoImagen/carrito4.png'
const Header = () => {
    return ( 
    
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="navbar-brand logoApp" style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ `/logo-react-sport.png`})` }}> 
                    
                </div>
                <div className='factorLogoCarrito eliminar992'>
                    <div className='carrito'>
                    <img   className='imagenCarrito' src ={logoCarrito} alt="logoIniciar" ></img>
                    </div>
                    
                    <Login className="loginUsuario"/>
                </div>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item btn-group">
                            <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                CATEGORIAS
                            </button>
                            <ul className="dropdown-menu">
                                <li>CALZADO</li>
                                <li>INDUMENTARIA</li>
                                <li>ACCESORIOS</li>
                                <li>TECNOLOGIA</li>
                                
                            </ul>
                        </li>
                        <li className="nav-item btn-group ">
                            <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                GENERO
                            </button>
                            <ul className="dropdown-menu">
                                <li>HOMBRE</li>
                                <li>MUJER</li>
                            </ul>
                        </li>
                        <li className="nav-item btn-group">
                            <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                DEPORTES
                            </button>
                            <ul className="dropdown-menu">
                                <li>FUTBOL</li>
                                <li>RUNNING</li>
                                <li>TENIS</li>
                                <li>TRAINING Y FITNESS</li>
                            </ul>
                        </li>
                        <li className="nav-item btn-group">
                            <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                MARCAS
                            </button>
                            <ul className="dropdown-menu">
                                <li>NIKE</li>
                                <li>ADIDAS</li>
                                <li>PUMA</li>
                                <li>REEBOK</li>
                                <li>FILA</li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/#">OFERTAS</a>
                        </li>
                        
                        
                    </ul>
                    <div className='factorLogoCarrito eliminar993'>
                        
                            <div className='carrito'>
                                <img   className='imagenCarrito' src ={logoCarrito} alt="logoIniciar" ></img>
                            </div>
                        
                            <Login className="loginUsuario"/>
                      
                        
                    </div>
                </div>
                
      
            </div>
           
        </nav>

       
        
    );
}
 
export default Header;