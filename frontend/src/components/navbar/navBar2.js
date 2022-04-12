import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import "../../styles/stylesNavBar2.css"
import {Link as LinkRouter} from "react-router-dom"

import {connect} from 'react-redux';
import userAction from '../../redux/actions/userAction';
import Counter from '../counterWorldCup/counter'

const NavBar2 = (props) => {

  function SignOut() {
		props.signOutUser(props.user.email)
	}
  console.log(props.user)

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElCarrito, setAnchorElCarrito] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenCarritoMenu = (event) => {
    setAnchorElCarrito(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseCarritoMenu = () => {
    setAnchorElCarrito(null);
  };

  return (
    <>
    <div className="containerCounter">
          <div className="boxCup">
            <h4>FIFA WORLD CUP</h4>
          </div>
        <div className="boxCounter">
          <Counter 
          countDownTimestampMs={1669086060000}/>
        </div>
          <div className="boxCup">
            <h4>QATAR 2022</h4>
          </div>
      </div>
    <AppBar position="static" className="boxNavBar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="nombreLogo"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <LinkRouter to="/home" className="linkResponsive">
              <img className="logoReactSports" src= {process.env.PUBLIC_URL+ `../img/Logo_react_final.png`} /> 
            </LinkRouter>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              className='burgerMenu'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none'},
              }}
            >
            
              <MenuItem>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
              </li>
              </ul>
              </MenuItem>
              <MenuItem>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
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
                  <li>
                    <a className="dropdown-item" href="#">
                      Male
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Female
                    </a>
                  </li>
                </ul>
              </li>
              </ul>
              </MenuItem>
              <MenuItem>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                  >
                  BRAND
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Adidas
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Nike
                    </a>
                  </li>
                </ul>
              </li>
              </ul>
              </MenuItem>
              <MenuItem>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
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
                    <a className="dropdown-item" href="#">
                      Soccer
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Tennis
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Running
                    </a>
                  </li>
                </ul>
              </li>
              </ul>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="nombreLogo"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img className="logoReactSports" src= {process.env.PUBLIC_URL+ `../img/Logo_react_final.png`} /> 
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className="containerDropdowns">
              <MenuItem>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
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
              </li>
              </ul>
              </MenuItem>
              <MenuItem>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
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
                  <li>
                    <a className="dropdown-item" href="#">
                      Male
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Female
                    </a>
                  </li>
                </ul>
              </li>
              </ul>
              </MenuItem>
              <MenuItem>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  BRAND
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Adidas
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Nike
                    </a>
                  </li>
                </ul>
              </li>
              </ul>
              </MenuItem>
              <MenuItem>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
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
                    <a className="dropdown-item" href="#">
                      Soccer
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Tennis
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Running
                    </a>
                  </li>
                </ul>
              </li>
              </ul>
              </MenuItem>
          </Box>

          <Box>
          <Tooltip title="Open shopping cart">
              <IconButton onClick={handleOpenCarritoMenu} sx={{ p: 0 }}>
              <img className="logoCarrito" src= {process.env.PUBLIC_URL+ `../img/carrito.png`} /> 
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElCarrito}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElCarrito)}
              onClose={handleCloseCarritoMenu}
            >
              
              {props.user ?
              <>
              <MenuItem>
              My shopping
              </MenuItem>
              <MenuItem>
              Checkout
              </MenuItem>
              </>
              :
              <>
              <p className='messageCart'>
               Please sign in to use the cart
              </p>
              </>
              }
              
            </Menu>
       
          </Box>

          <Box sx={{ flexGrow: 0 }} className="containerUser">
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {!props.user ?<Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL+ `../img/user.png`} /> : 
                <img src={props.user.image} alt="User Image" className='userImage'/>}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
              {!props.user ?
              <>
              <MenuItem>
              <LinkRouter to="signUp" className="linkResponsive">Sign Up</LinkRouter>
              </MenuItem>
              <MenuItem>
              <LinkRouter to="signIn" className="linkResponsive">Sign In</LinkRouter>
              </MenuItem>
              </>
              :
              <>
              <MenuItem>
              <LinkRouter to="signOut" className="linkResponsive" onClick={SignOut}>Sign Out</LinkRouter>
              </MenuItem>
              <MenuItem>
              {(props.user.isAdmin) === true ? <h1>I am the Admin</h1> : <span>Hola no soy admin</span> }
              </MenuItem>
              </>
              }
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
};

const mapStateToProps = (state) =>{
  
  return{
    user: state.userReducer.user 
  }
}

const mapDispatchToProps = {
  signOutUser: userAction.signOutUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar2);
