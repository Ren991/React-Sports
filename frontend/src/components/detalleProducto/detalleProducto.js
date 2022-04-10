import React, {useEffect, useState} from 'react';
import '../../styles/detalleProducto.css';
import {useDispatch, useSelector} from 'react-redux';
import {getAllProducts} from '../../redux/productos/productos'
import { Link, useParams } from 'react-router-dom';




function DetalleProducto(props) {

  // TO_DO__crashea con F5

  const {id} = useParams()
  const productId = id
  const [reload, setReload] = useState(false)
  const products = useSelector(state => state.productosMain.products)
  const aux = [...products.filter(e => e._id == productId)]
  const [currentProduct] = aux
  console.log(currentProduct)
  const dispatch = useDispatch()
  var cartProducts = JSON.parse(localStorage.getItem("cartItems")) || [];

  useEffect(()=>{
    dispatch(getAllProducts())
  },[]);

  function getProductId (event){
    cartProducts.push(event)
    const uniqueCartProduct = new Set(cartProducts)
    var clearCartProduct = [...uniqueCartProduct]
    localStorage.setItem("cartItems", JSON.stringify(clearCartProduct))

    // var badge = ""
    // if (clearCartProduct.length > 0){
    //   badge = clearCartProduct.length
    // }

    setReload(!reload)
  }

  return (
    <div className='contenedorDetalleProducto'>
        <div className="detalleProductoIzquierda">
          <div className="detalleProductoContenedorRuta">
            <a href="#"> Inicio</a>
            <h5>{currentProduct.productName}</h5>         
          </div>
          <div className="detalleProductoContenedorFotosProductos">
            <img className="logoProducto"src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" />
            <img className="fotoProducto"src={currentProduct.image} />
          </div>
          <div className='detalleProductoContenedorDescripcion'>
            <p>{currentProduct.description}</p>
          </div>
        </div>
        <div className='detalleProductoDerecha'>
          <div>

            <div className='ternarioStockProducto'>
              {/* TO_DO__REVISAR LOS TERNARIOS */}
              {currentProduct.stock==0 ??
                <h3>Out of stock!</h3>
              }
              {currentProduct.stock<=10 ?? 
                <h3>Last units!</h3>
              }
            </div> 
            <div className='headerProducto'>
              <h2>{currentProduct.productName}</h2>
              <h3>${currentProduct.price}</h3>
            </div>
            <div className='detallesProducto'>
              <p>Color: N/A</p>
              <p>Sizes: {currentProduct.size}</p>
            </div>
          </div>
          <div className='detalleProductoCarrito'>
            <input type='number' defaultValue='1'></input>
            <button onClick={getProductId}>Añadir al carrito</button>
          </div>
        </div>
    </div>
  )
}

// const mapDispatchToProps = {
//   getAllProducts: itinerariesActions.getAllProducts,

// }
// const mapStateToProps = (state) => {
//   return {
//     oneCity: state.citiesReducer.oneCity,

//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(DetalleProducto)

export default DetalleProducto