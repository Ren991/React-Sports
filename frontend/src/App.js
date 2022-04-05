
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './styles/detalleProducto.css';
import SportsView from './components/pages/sportsView'


function App() {
  return (
    <>
      <Header/>
      {/* A modo de ejemplo!
      <div className='mainHtml'>
        <DetalleProducto/>
      </div> */}
        {/* <SportsView/>
        <ProductsView/> */}
        <SportsView/>
      <Footer/>
    </>
  );
}

export default App;
