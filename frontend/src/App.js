
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import DetalleProducto from './components/detalleProducto/detalleProducto';
import ProductsView from './components/productsView/productsView'
import './styles/productsView.css'
import './styles/detalleProducto.css';


function App() {
  return (
    <>
      <Header/>
      {/* A modo de ejemplo!
      <div className='mainHtml'>
        <DetalleProducto/>
      </div> */}
      <ProductsView />
      <Footer/>
    </>
  );
}

export default App;
