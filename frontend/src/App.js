
import React,{useSelector} from 'react';
import Header from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import './styles/cardsView.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/home';
import ProductsView from './components/pages/productsView'
import SignIn from '../src/components/login/signIn';


function App() {

  return (
    
    <>
     <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/signIn" element={<SignIn/>}/> 
        </Routes>
       

        <Footer />

      </BrowserRouter>
      
      
    </>
  );
}

export default App;
