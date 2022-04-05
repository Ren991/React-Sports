<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import Index from './components/paginas/Index'
import NavBar from './components/compenentes/navBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path='/' element={<Index />} />
      </Routes>

    </BrowserRouter>
=======
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Header/>
      <Footer/>
    </>
    

>>>>>>> 3d6f45752d127b5ed4e6d515ba8cdafada752713
  );
}

export default App;
