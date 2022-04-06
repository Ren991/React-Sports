import React from "react";
import '../../styles/navBar.css'
import * as mdb from "mdb-ui-kit"; 
import Login from "./Login";
import logoCarrito from "./logoImagen/carrito4.png";
const Header = () => {
  return (
    <div className="containerNavbar ">
    {/*   CONTADOR QATAR 2022 */}
      
      <nav class="navbar navbar-light bg-light ">
        <div class="container-fluid firstNavbar">
          <span class="navbar-text">xx days left to Qatar World Cup</span>
        </div>
      </nav>
      <div className="containerInput">
          <input className="inputNavbar" placeholder="Search a product"/>
      </div>
      {/*Second Nav*/}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <img className="logo" src= {process.env.PUBLIC_URL+ `../img/logo-react-sport.png`} /> 
            </a>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* CATEGORY */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Sportwear
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      shoes
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Tecnology
                    </a>
                  </li>
                </ul>
              </li>
              {/*   GENERO */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Genre
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Female
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Male
                    </a>
                  </li>
                </ul>
              </li>

              {/*   BRAND */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Brand
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Adidas
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Nike
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Umbro
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Puma
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Fila
                    </a>
                  </li>
                </ul>
              </li>
              {/*  SPORTS */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sports
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Football
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Running
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Tennis
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Trainign and fitness
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <a className="text-reset me-3" href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>

            <div className="dropdown">
              <a
                className="text-reset me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell"></i>
                <img
                  src={logoCarrito}
                  className="rounded-circle carritoUser"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
                <span className="badge rounded-pill badge-notification bg-danger">
                  1
                </span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Some news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle carritoUser"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
       
      </nav>
     
          
      
    </div>
  );
};

export default Header;

{
  /* <nav classNameNameNameName="navbar navbar-expand-lg navbar-light bg-light">
            <div classNameNameNameName="container-fluid">
                <button classNameNameNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span classNameNameNameName="navbar-toggler-icon"></span>
                </button>
                
                <div classNameNameNameName="navbar-brand logoApp" style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ `/logo-react-sport.png`})` }}> 
                    
                </div>
                <div classNameNameNameName='factorLogoCarrito eliminar992'>
                    <div classNameNameNameName='carrito'>
                    <img   classNameNameNameName='imagenCarrito' src ={logoCarrito} alt="logoIniciar" ></img>
                    </div>
                    
                    <Login classNameNameNameName="loginUsuario"/>
                </div>
                <div classNameNameNameName="collapse navbar-collapse" id="navbarTogglerDemo01">
                    
                    <ul classNameNameNameName="navbar-nav me-auto mb-2 mb-lg-0">
                    <li classNameNameNameName="nav-item btn-group">
                            <button classNameNameNameName="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                CATEGORIAS
                            </button>
                            <ul classNameNameNameName="dropdown-menu">
                                <li>CALZADO</li>
                                <li>INDUMENTARIA</li>
                                <li>ACCESORIOS</li>
                                <li>TECNOLOGIA</li>
                                
                            </ul>
                        </li>
                        <li classNameNameNameName="nav-item btn-group ">
                            <button classNameNameNameName="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                GENERO
                            </button>
                            <ul classNameNameNameName="dropdown-menu">
                                <li>HOMBRE</li>
                                <li>MUJER</li>
                            </ul>
                        </li>
                        <li classNameNameNameName="nav-item btn-group">
                            <button classNameNameNameName="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                DEPORTES
                            </button>
                            <ul classNameNameNameName="dropdown-menu">
                                <li>FUTBOL</li>
                                <li>RUNNING</li>
                                <li>TENIS</li>
                                <li>TRAINING Y FITNESS</li>
                            </ul>
                        </li>
                        <li classNameNameNameName="nav-item btn-group">
                            <button classNameNameNameName="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                MARCAS
                            </button>
                            <ul classNameNameNameName="dropdown-menu">
                                <li>NIKE</li>
                                <li>ADIDAS</li>
                                <li>PUMA</li>
                                <li>REEBOK</li>
                                <li>FILA</li>
                            </ul>
                        </li>

                        <li classNameNameNameName="nav-item">
                            <a classNameNameNameName="nav-link" href="/#">OFERTAS</a>
                        </li>
                        
                        
                    </ul>
                    <div classNameNameNameName='factorLogoCarrito eliminar993'>
                        
                            <div classNameNameNameName='carrito'>
                                <img   classNameNameNameName='imagenCarrito' src ={logoCarrito} alt="logoIniciar" ></img>
                            </div>
                        
                            <Login classNameNameNameName="loginUsuario"/>
                      
                        
                    </div>
                </div>
                
      
            </div>
           
        </nav>
 */
}
