
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './styles/productsView.css'
import './styles/detalleProducto.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/home';


function App() {
  return (

    <>
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
      
      
    </>
  );
}

export default App;
