
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
<<<<<<< HEAD
import './styles/productsView.css'
import './styles/detalleProducto.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/home';
=======
import './styles/detalleProducto.css';
import SportsView from './components/pages/sportsView'
>>>>>>> 46c460c90b91f75b009b7b4e4a8aa911985be7cc


function App() {
  return (

    <>
<<<<<<< HEAD
     <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/signUp" element={ <SignUp/>}/>
          <Route path="/signIn" element={ <SignIn/>}/>  */}
        </Routes>
        {/* <DetalleProducto/> */}
        <Footer />

      </BrowserRouter>
      
      
=======
      <Header/>
      {/* A modo de ejemplo!
      <div className='mainHtml'>
        <DetalleProducto/>
      </div> */}
        {/* <SportsView/>
        <ProductsView/> */}
        <SportsView/>
      <Footer/>
>>>>>>> 46c460c90b91f75b009b7b4e4a8aa911985be7cc
    </>
  );
}

export default App;
