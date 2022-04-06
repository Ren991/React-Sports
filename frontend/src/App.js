
import React,{useSelector} from 'react';
import Header from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import './styles/cardsView.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/home';


function App() {
/*   const usuario = useSelector(state => state.usuarioMain.usuario) */
  return (
    
    <>
     <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* {!usuario && <Route path="/signUp" element={ <SignUp/>}/>}
          {!usuario && <Route path="/signIn" element={ <SignIn/>}/>} */}
        </Routes>
        {/* <DetalleProducto/> */}
        <Footer />

      </BrowserRouter>
      
      
    </>
  );
}

export default App;
