import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { getAllProducts } from "../../redux/productos/productos";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/stylesNavBar2.css";
import { Link as LinkRouter } from "react-router-dom";
import { connect } from "react-redux";
import userAction from "../../redux/actions/userAction";
import Counter from "../counterWorldCup/counter";

const NavBar2 = (props) => {
  // INICIO Manipuleo para renderizado dinamico de categorias NavBar

  const allProducts = useSelector((state) => state.productosMain.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const uniqueSports = new Set();
  const uniqueGender = new Set();
  const uniqueBrand = new Set();
  const uniqueType = new Set();

  allProducts.forEach((element) => {
    uniqueSports.add(element.sport);
    uniqueGender.add(element.gender);
    uniqueBrand.add(element.brand.brand);
    uniqueType.add(element.type);
  });

  const uniqueSportsArray = Array.from(uniqueSports);
  const uniqueGendersArray = Array.from(uniqueGender);
  const uniqueBrandsArray = Array.from(uniqueBrand);
  const uniqueTypesArray = Array.from(uniqueType);

  // FIN manipuleo para renderizado dinamico NavBar

  function SignOut() {
    props.signOutUser(props.user.email);
  }

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElCarrito, setAnchorElCarrito] = React.useState(null);
  const [anchorElSport, setAnchorElSport] = React.useState(null); //DROPDOWN SPORT
  const [anchorElBrand, setAnchorElBrand] = React.useState(null); //DROPDOWN BRAND
  const [anchorElCategory, setAnchorElCategory] = React.useState(null); //DROPDOWN CATEGORY
  const [anchorElGender, setAnchorElGender] = React.useState(null); //DROPDOWN GENDER

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenCarritoMenu = (event) => {
    setAnchorElCarrito(event.currentTarget);
  };

  const handleOpenSportMenu = (event) => {
    setAnchorElSport(event.currentTarget);
  };

  const handleOpenBrandMenu = (event) => {
    setAnchorElBrand(event.currentTarget);
  };

  const handleOpenCategoryMenu = (event) => {
    setAnchorElCategory(event.currentTarget);
  };

  const handleOpenGenderMenu = (event) => {
    setAnchorElGender(event.currentTarget);
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

  const handleCloseSportMenu = () => {
    setAnchorElSport(null);
  };

  const handleCloseBrandMenu = () => {
    setAnchorElBrand(null);
  };

  const handleCloseCategoryMenu = () => {
    setAnchorElCategory(null);
  };

  const handleCloseGenderMenu = () => {
    setAnchorElGender(null);
  };

  /*  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => { //
    setAnchorEl(null);
  }; */

  return (
    <>
      <div className="containerCounter">
        <div className="boxCup">
          <h4>FIFA WORLD CUP</h4>
        </div>
        <div className="boxCounter">
          <Counter countDownTimestampMs={1669086060000} />
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
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <LinkRouter to="/home" className="linkResponsive">
                <img
                  className="logoReactSports"
                  src={process.env.PUBLIC_URL + `../img/Logo_react_final.png`}
                />
              </LinkRouter>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                className="burgerMenu"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem>
                  {/*HERE STARTS CATEGORY */}

                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                      <IconButton
                        onClick={handleOpenCategoryMenu}
                        sx={{ p: 0 }}
                      >
                        <p>Category</p>
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElCategory}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElCategory)}
                      onClose={handleCloseCategoryMenu}
                    >
                      <>
                        {uniqueTypesArray?.map((element) => (
                          <MenuItem>
                            <LinkRouter to={`/type/${element}`}>{element}</LinkRouter>
                          </MenuItem>
                        ))}
                      </>
                      {/* <>
              <MenuItem>
              <p>Sport wear</p>
              </MenuItem>
              <MenuItem>
              <p>Shoes</p>
              </MenuItem>
              </> */}
                    </Menu>
                  </Box>
                </MenuItem>
                {/*  SPORT MENU */}
                <MenuItem>
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenSportMenu} sx={{ p: 0 }}>
                        <p>Sport</p>
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElSport}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElSport)}
                      onClose={handleCloseSportMenu}
                    >
                      <>
                        {uniqueSportsArray?.map((element) => (
                          <MenuItem>
                            <LinkRouter to={`/sports/${element}`}>{element}</LinkRouter>
                          </MenuItem>
                        ))}
                      </>
                      {/* <>
              <MenuItem>
              <p>Soccer</p>
              </MenuItem>
              <MenuItem>
              <p>Tennis</p>
              </MenuItem>
              <MenuItem>
              <p>Running</p>
              </MenuItem>
              <MenuItem>
              <p>Fitness and Training</p>
              </MenuItem>
              </> */}
                    </Menu>
                  </Box>
                </MenuItem>
                {/*  HERE STARTS GENDER */}
                <MenuItem>
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenGenderMenu} sx={{ p: 0 }}>
                        <p>Gender</p>
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElGender}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElGender)}
                      onClose={handleCloseGenderMenu}
                    >
                      <>
                        {uniqueGendersArray?.map((element) => (
                          <MenuItem>
                            <LinkRouter to={`/gender/${element}`}>{element}</LinkRouter>
                          </MenuItem>
                        ))}
                      </>
                      {/* <>
              <MenuItem>
              <p>Male</p>
              </MenuItem>
              <MenuItem>
              <p>Female</p>
              </MenuItem>
              </> */}
                    </Menu>
                  </Box>
                </MenuItem>

                <MenuItem>
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenBrandMenu} sx={{ p: 0 }}>
                        <p>Brand</p>
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElBrand}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElBrand)}
                      onClose={handleCloseBrandMenu}
                    >
                      <>
                        {uniqueBrandsArray?.map((element) => (
                          <MenuItem>
                            <LinkRouter to={`/brands/${element}`}>{element}</LinkRouter>
                          </MenuItem>
                        ))}
                      </>
                      {/* <>
              <MenuItem>
              <p>Adidas</p>
              </MenuItem>
              <MenuItem>
              <p>Nike</p>
              </MenuItem>
              </> */}
                    </Menu>
                  </Box>
                </MenuItem>
              </Menu>
            </Box>
            {/*  HERE FINISH HAMBURGUER MENU */}

            {/*  HERE START COMMON MENU */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              className="nombreLogo"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <LinkRouter to="/home">
              <img
                className="logoReactSports"
                src={process.env.PUBLIC_URL + `../img/Logo_react_final.png`}
              />
              </LinkRouter>
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              className="containerDropdowns"
            >
              <MenuItem>
                {/*HERE STARTS CATEGORY */}

                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Select a category">
                    <IconButton onClick={handleOpenCategoryMenu} sx={{ p: 0 }}>
                      <p>Category</p>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElCategory}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElCategory)}
                    onClose={handleCloseCategoryMenu}
                  >
                    <>
                      {uniqueTypesArray?.map((element) => (
                        <MenuItem>
                          <LinkRouter to={`/type/${element}`}>{element}</LinkRouter>
                        </MenuItem>
                      ))}
                    </>
                    {/* <>
              <MenuItem>
              <p>Sport wear</p>
              </MenuItem>
              <MenuItem>
              <p>Shoes</p>
              </MenuItem>
              </> */}
                  </Menu>
                </Box>
              </MenuItem>
              {/*  SPORT MENU */}
              <MenuItem>
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Select a Sport">
                    <IconButton onClick={handleOpenSportMenu} sx={{ p: 0 }}>
                      <p>Sport</p>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElSport}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElSport)}
                    onClose={handleCloseSportMenu}
                  >
                    <>
                      {uniqueSportsArray?.map((element) => (
                        <MenuItem>
                          <LinkRouter to={`/sports/${element}`}>{element}</LinkRouter>
                        </MenuItem>
                      ))}
                    </>
                    {/* <>
              <MenuItem>
              <p>Soccer</p>
              </MenuItem>
              <MenuItem>
              <p>Tennis</p>
              </MenuItem>
              <MenuItem>
              <p>Running</p>
              </MenuItem>
              <MenuItem>
              <p>Fitness and Training</p>
              </MenuItem>
              </> */}
                  </Menu>
                </Box>
              </MenuItem>
              {/*  HERE STARTS GENDER */}
              <MenuItem>
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Select a gender">
                    <IconButton onClick={handleOpenGenderMenu} sx={{ p: 0 }}>
                      <p>Gender</p>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElGender}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElGender)}
                    onClose={handleCloseGenderMenu}
                  >
                    <>
                      {uniqueGendersArray?.map((element) => (
                        <MenuItem>
                          <LinkRouter to={`/gender/${element}`}>{element}</LinkRouter>
                        </MenuItem>
                      ))}
                    </>
                    {/* <>
              <MenuItem>
              <p>Male</p>
              </MenuItem>
              <MenuItem>
              <p>Female</p>
              </MenuItem>
              </> */}
                  </Menu>
                </Box>
              </MenuItem>

              <MenuItem>
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Select a brand">
                    <IconButton onClick={handleOpenBrandMenu} sx={{ p: 0 }}>
                      <p>Brand</p>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElBrand}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElBrand)}
                    onClose={handleCloseBrandMenu}
                  >
                    <>
                      {uniqueBrandsArray?.map((element) => (
                        <MenuItem>
                          <LinkRouter to={`/brands/${element}`}>{element}</LinkRouter>
                        </MenuItem>
                      ))}
                    </>
                    {/* <>
              <MenuItem>
              <p>Adidas</p>
              </MenuItem>
              <MenuItem>
              <p>Nike</p>
              </MenuItem>
              </> */}
                  </Menu>
                </Box>
              </MenuItem>
            </Box>

            <Box>
              <Tooltip title="Open shopping cart">
                <IconButton onClick={handleOpenCarritoMenu} sx={{ p: 0 }}>
                  <img
                    className="logoCarrito"
                    src={process.env.PUBLIC_URL + `../img/carrito.png`}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElCarrito}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElCarrito)}
                onClose={handleCloseCarritoMenu}
              >
                {props.user ? (
                  <>
                    <LinkRouter to="/checkout" className="normalLink">
                      <MenuItem>Checkout</MenuItem>
                    </LinkRouter>
                  </>
                ) : (
                  <>
                    <p className="messageCart">
                      Please sign in to use the cart
                    </p>
                  </>
                )}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 0 }} className="containerUser">
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {!props.user ? (
                    <Avatar
                      alt="Remy Sharp"
                      src={process.env.PUBLIC_URL + `../img/user.png`}
                    />
                  ) : (
                    <img
                      src={props.user.image}
                      alt="User Image"
                      className="userImage"
                      width={40}
                    />
                  )}
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {!props.user ? (
                  <>
                    <MenuItem>
                      <LinkRouter to="signUp" className="linkResponsive">
                        Sign Up
                      </LinkRouter>
                    </MenuItem>
                    <MenuItem>
                      <LinkRouter to="signIn" className="linkResponsive">
                        Sign In
                      </LinkRouter>
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem>
                      <LinkRouter
                        to="signOut"
                        className="linkResponsive"
                        onClick={SignOut}
                      >
                        Sign Out
                      </LinkRouter>
                    </MenuItem>
                    <MenuItem>
                      {props.user.isAdmin === true ? (
                        <LinkRouter to="/adminView">
                          <span>I am the Admin</span>
                        </LinkRouter>
                      ) : (
                        <span>Pepito 123</span>
                      )}
                    </MenuItem>
                  </>
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = {
  signOutUser: userAction.signOutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar2);
