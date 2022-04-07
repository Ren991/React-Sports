import React, {useEffect} from 'react'
import Header from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import './styles/cardsView.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {connect} from 'react-redux';
import Home from './components/pages/home';
import DetalleProducto from './components/detalleProducto/detalleProducto'
import BrandsView from './components/pages/brandsView'
import SportsView from './components/pages/sportsView'
import ProductsView from './components/pages/productsView'
import SignIn from './components/login/signIn';
import SignUp from './components/login/signUp'
import userAction from './redux/actions/userAction';

function App(props) {

  useEffect(() => {
    if(localStorage.getItem('token')!==null){
      const token = localStorage.getItem('token')
      props.verifyToken(token)
    }
  }, [])
  

  return (
    <>
     <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="*"  element={<Home />}/> 
          <Route path="/DETALLEPRODUCTO"  element={<DetalleProducto />}/>
          <Route path="/PRODUCTSVIEW"  element={<ProductsView />}/> 
          <Route path="/brands" element={<BrandsView />}/>
          <Route path="/sports" element={<SportsView />}/>
          <Route path="/sports/:sport" element={<ProductsView />}/>
          <Route path="/brands/:brand" element={<ProductsView />}/>
          {!props.user &&<Route path="/signUp" element={<SignUp/>}/>}
          {!props.user &&<Route path="/signIn" element={<SignIn/>}/>} 
        </Routes>
        <Footer />
      </BrowserRouter>
      
      
    </>
  );
}

const mapStateToProps = (state) => {
  return{
    user: state.userReducer.user
  }
}

const mapDispatchToProps = {
  verifyToken: userAction.verifyToken,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);