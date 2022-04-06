
import Header from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import './styles/cardsView.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/home';
import ProductsView from './components/pages/productsView'


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
        <ProductsView/>
       

        <Footer />

      </BrowserRouter>
      
      
    </>
  );
}

export default App;
