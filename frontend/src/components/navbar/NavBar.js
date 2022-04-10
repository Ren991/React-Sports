import React, { useEffect } from "react";
import '../../styles/navBar.css'
import * as mdb from "mdb-ui-kit";
import { Link as LinkRouter } from 'react-router-dom';
import logoCarrito from "./logoImagen/carrito.png";
import userAction from "../../redux/actions/userAction";
import { connect, useDispatch, useSelector } from "react-redux";
import Counter from '../counterWorldCup/counter'
// importaciones internas
import { getAllbrand } from '../../redux/brand/brand'
import { getAllProducts } from '../../redux/productos/productos'
import { x } from "joi";

const Header = (props) => {
  let hambur = "https://www.clipartmax.com/png/middle/351-3518256_menu-hamburger-icon-svg-white.png"
  function SignOut() {
    props.signOutUser(props.user.email)
  }
  //funcionalidades redux
  const dispatch = useDispatch()
  const brand = useSelector(state => state.brandMain.brand)
  const goods = useSelector(state => state.productosMain.products)
  console.log(goods);
  console.log(brand);

  //////////////
  useEffect(() => {
    dispatch(getAllbrand())
    dispatch(getAllProducts())
  }, [])

  var arrayOfGender = goods?.map(oneGender => oneGender.gender)
  const ArrayGender = new Set(arrayOfGender);
  var genders = [...ArrayGender]

  console.log(genders);
  return (
    <div className="containerNavbar ">
      {/*   CONTADOR QATAR 2022 */}

      <div className="containerCounter">
        <div className="boxCounter">
          <Counter
            countDownTimestampMs={1669086060000} />
        </div>
      </div>
      {/*Second Nav*/}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid  ">
          <button

            className="navbar-toggler menuHamburguesa"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/*  <img  
            src="https://www.clipartmax.com/png/middle/351-3518256_menu-hamburger-icon-svg-white.png"
            style={{width:40}} /> */}
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <LinkRouter to={`/`} className="navbar-brand mt-2 mt-lg-0">
              <img className="logo" src={process.env.PUBLIC_URL + `../img/REACT_LOGO.png`} />
            </LinkRouter>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* CATEGORY
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  CATEGORY
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Sportwear
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      shoes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Tecnology
                    </a>
                  </li>
                </ul>
              </li> */}
              GENERO
              * <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  GENRE
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >

                  {genders?.map(oneGender => {
                    return (
                      <li key={oneGender}>
                        <LinkRouter to={`/brands/${oneGender}`} className="dropdown-item">
                          {oneGender}
                        </LinkRouter>
                      </li>
                    )
                  })}
                </ul>
              </li>

              {/*   BRAND */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shoes
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {brand?.map(oneBrand => {
                    return (
                      <li key={oneBrand._id}>
                        <LinkRouter to={`/brands/${oneBrand._id}`} className="dropdown-item">
                          {oneBrand.brand}
                        </LinkRouter>
                      </li>
                    )
                  })}

                </ul>
              </li>
              {/*  SPORTS */}
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  SPORTS
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                  <LinkRouter to={`/sports/Futbol`} className="dropdown-item">
                      Futbol
                  </LinkRouter> 
                  </li>
                  <li>
                  <LinkRouter to={`/sports/Running`} className="dropdown-item">
                      Running
                  </LinkRouter> 
                  </li>
                  <li>
                  <LinkRouter to={`/sports/Tennis`} className="dropdown-item">
                      Tennis
                  </LinkRouter> 
                  </li>
                  <li>
                  <LinkRouter to={`/sports/Training&Fitness`} className="dropdown-item">
                      Training & Fitness
                  </LinkRouter> 
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <a className="text-reset me-3" href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>

            {/*  <div className="dropdown">
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
                  TO_DO__CANT_CARRITO
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
            </div> */}
            {/*   USER ACCOUNT */}
            {/* <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                {props.user? <img className="userImg" src={props.user.image}/> : 
                <img
                  src="https://cdn-icons.flaticon.com/png/512/1144/premium/1144760.png?token=exp=1649341453~hmac=d683c2d497b0a64e9ed8bbdb1aa280a1"
                  className="rounded-circle userImg"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
                }
                
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
                >
                {!props.user ?
                  <>
                <li>
                  <a className="dropdown-item" href="#">
                  <LinkRouter to="signIn" className="linkResponsive userButton">Sign In</LinkRouter>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  <LinkRouter to="signUp" className="linkResponsive userButton">Sign Up</LinkRouter>
                  </a>
                </li>
                </>
                  :
                <li>
                  <a className="dropdown-item" href="#">
                  <LinkRouter to="signOut" className="linkResponsive userButton" onClick={SignOut}>Sign Out</LinkRouter>
                  </a>
                </li>
              }
              </ul>
            </div> */}
          </div>
        </div>
      </nav>
      <div className="containerInput">
        <input className="inputNavbar" placeholder="Search a product" />
      </div>



    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = {
  signOutUser: userAction.signOutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

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
