import React, { useEffect } from 'react'
import NavBar2 from './components/navbar/navBar2'
import Footer from './components/footer/Footer'
import './styles/cardsView.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from 'react-redux';
import Home from './components/pages/home';
import DetalleProducto from './components/detalleProducto/detalleProducto'
import BrandsView from './components/pages/brandsView'
import SportsView from './components/pages/sportsView'
import ProductsView from './components/pages/productsView'
import SignIn from './components/login/signIn';
import SignUp from './components/login/signUp'
import userAction from './redux/actions/userAction';
import CheckOut from './components/carry/checkOut';
import AdminView from './components/pages/admin'
import MySnackbar from './components/snackbar/snackbar'

function App(props) {
  
  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      const token = localStorage.getItem('token')
      props.verifyToken(token)
    }
  }, [])


  return (
    <div>
      <BrowserRouter>
        <NavBar2/>
        <div className='containerWhatsappButton'>
        <a href="https://web.whatsapp.com/">
        <img className='whatsappButton' src={process.env.PUBLIC_URL + "/img/whatsappButton.png"} />
        </a>
        </div>
        <MySnackbar/>
        <Routes>
          <Route path="/home"  element={<Home />}/> 
          <Route path="*"  element={<Home />}/> 
          <Route path="/productDetail/:id/:brand"  element={<DetalleProducto />}/>
          {props.user?.isAdmin && <Route path="/adminView"  element={<AdminView />}/> }
          {props.user?.isAdmin && <Route path="/adminView/:id"  element={<AdminView />}/> }
          <Route path="/brands" element={<BrandsView />}/>
          <Route path="/sports" element={<SportsView />}/>
          <Route path="/sports/:sport" element={<ProductsView />}/>
          <Route path="/brands/:brand" element={<ProductsView />}/>
          <Route path="/gender/:gender" element={<ProductsView />}/>
          <Route path="/type/:type" element={<ProductsView />}/>
          <Route path="/checkout" element={<CheckOut />} />
          {!props.user &&<Route path="/signUp" element={<SignUp/>}/>}
          {!props.user &&<Route path="/signIn" element={<SignIn/>}/>} 
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = {
  verifyToken: userAction.verifyToken,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);