import React,{useEffect} from 'react';
import './cssloginUsuario/loginUsuario.css'
import Login from './Login'
import logoCarrito from './logoImagen/carrito4.png'
import { useSelector, useDispatch } from 'react-redux';
import {getAllbrand} from '../../redux/brand/brand'
import { Link } from 'react-router-dom';
const Header = () => {
    const allBrand = useSelector((state) => state.brandMain.brand);
    const dispatch = useDispatch();
    const cantProducts = useSelector(state => state.carritoMain.cantProducts)

    useEffect(() => {
        dispatch(getAllbrand());
    }, []);
    
    return ( 
    
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                 
                <Link className="navbar-brand logoApp" to={"/home"} 
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ `/img/REACT_LOGO.png`})` }}
                > 
                </Link>
                
                <div className='factorLogoCarrito eliminar992'>
                    <Link to="/checkout" className='carrito'>
                    <img   className='imagenCarrito' src ={logoCarrito} alt="logoIniciar" ></img>
                    </Link>
                    <p style={{color:"red"}}>{cantProducts}</p>
                    <Login className="loginUsuario"/>
                </div>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                       
                       
                        <li className="nav-item btn-group">
                            <button className="btn btn-secondary btn-lg dropdown-toggle linkDro" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                MARCAS
                            </button>
                                {/* <li key={marca._id}>{marca.brand}</li> */}
                            <ul className="dropdown-menu">
                                {
                                    allBrand?.map(marca=>{
                                        return(
                                            <li key={marca._id}>
                                            <Link to={"/brands/" + marca.brand}> {marca.brand} </Link>
                                            </li>
                                        )
                                    })
                                }
                                {/* <li>NIKE</li>
                                <li>ADIDAS</li>
                                <li>PUMA</li>
                                <li>REEBOK</li>
                                <li>FILA</li> */}
                            </ul>
                        </li>
                    </ul>
                    <div className='factorLogoCarrito eliminar993'>
                            
                            <Link to="/checkout" className='carrito'>
                                <img   className='imagenCarrito' src ={logoCarrito} alt="logoIniciar" ></img>
                            </Link>
                            <p style={{color:"red"}}>{cantProducts}</p>
                            <Login className="loginUsuario"/>
                      
                        
                    </div>
                </div>
                
      
            </div>
           
        </nav>

       
        
    );
}
 
export default Header;