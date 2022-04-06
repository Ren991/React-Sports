
import Header from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import './styles/cardsView.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {connect} from 'react-redux';
import Home from './components/pages/home';
import BrandsView from './components/pages/brandsView'
import SportsView from './components/pages/sportsView'
import ProductsView from './components/pages/productsView'


function App() {
  return (

    <>
     <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="*"  element={<Home />}/> 
          <Route path="/brands" element={<BrandsView />}/>
          <Route path="/sports" element={<SportsView />}/>
          <Route path="/sports/:sport" element={<ProductsView />}/>
          <Route path="/brands/:brand" element={<ProductsView />}/>
          {/* <Route path="/signUp" element={ <SignUp/>}/>
          <Route path="/signIn" element={ <SignIn/>}/>  */}
        </Routes>
        <Footer />
      </BrowserRouter>
      
      
    </>
  );
}

export default App;
