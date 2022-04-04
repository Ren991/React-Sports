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
  );
}

export default App;
