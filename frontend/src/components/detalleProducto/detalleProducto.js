import React, { useEffect, useState } from "react";
import "../../styles/detalleProducto.css";
import { connect } from "react-redux";
import { searchProductById } from "../../redux/productos/productos";
import { Link, useParams } from "react-router-dom";
import cartAction from "../../redux/actions/cartAction";

function DetalleProducto(props) {
<<<<<<< HEAD

  // TO_DO__crashea con F5

  const {id} = useParams()
  const productId = id
  console.log(productId)
  const [reload, setReload] = useState(false)
  
  
  useEffect(() => {
    
    searchProductById(productId).then(res=>console.log(res))
    
  }, [])
  
  
  console.log(props)




  async function addCart (event){

    props.addToCart(event.target.id)

=======
  const { id } = useParams();
  const productId = id;
  const [reload, setReload] = useState(false);
  const [currentProduct, setCurrentProduct] = useState([]);

  useEffect(() => {
    searchProductById(productId).then((res) => setCurrentProduct(res.response));
  }, []);
  console.log(currentProduct);
>>>>>>> 0e4f75d3c394fc8f2adb076da2e5216b65b9c4d5

  async function addCart(event) {
    props.addToCart(event.target.id);
  }

  return (
    <div className="mainHtml">
      <div className="contenedorDetalleProducto">
        <div className="detalleProductoIzquierda">
          <div className="detalleProductoContenedorRuta">
            <Link to="/checkout">
              <a href="#">Inicio</a>
            </Link>
            <p> / </p>
            <p>{currentProduct.productName}</p>
          </div>
          <div className="detalleProductoContenedorFotosProductos">
            <img
              className="logoProducto"
              src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
            />
            <img
              className="fotoProducto"
              src={
                process.env.PUBLIC_URL +
                `/img/productImages/${currentProduct.image}`
              }
            />
          </div>
          <div className="detalleProductoContenedorDescripcion">
            <p>Description: {currentProduct.description}</p>
          </div>
        </div>
        <div className="detalleProductoDerecha">
          <div>
            <div className="ternarioStockProducto">
              {currentProduct.stock <= 5 ? (
                <>
                  {currentProduct.stock == 0 ? (
                    <h3 className="outOfStock">Out of stock!</h3>
                  ) : (
                    <h3>Last units!</h3>
                  )}
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="headerProducto">
              <h2>{currentProduct.productName}</h2>
              <h3>${currentProduct.price}</h3>
            </div>
            <div className="detallesProducto">
              <p>Color: N/A</p>
              <p>Sizes: {currentProduct.size}</p>
            </div>
          </div>
          <div className="contCaritoComprarBack">
            <div className="detalleProductoCarrito">
              {/* <input type="number" defaultValue="1"></input> */}
              <button id={productId} onClick={addCart}>
                Añadir al carrito
              </button>
            </div>
            <div className="divGoToCartOrContinueShopping">
              {currentProduct.stock !== 0 ? (
                <>
                  <Link
                    to="/checkout"
                    // className="linkResponsive userButton"
                    // onClick={SignOut}
                  >
                    <button>Go to check out</button>
                  </Link>
                  <p>or</p>
                  <button onClick={() => window.history.back()}>Go Back</button>
                </>
              ) : (
                <button onClick={() => window.history.back()}>Go Back</button>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = {
  addToCart: cartAction.addToCart,
};
const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
<<<<<<< HEAD
    productId: state.productosMain.productId,
    

  }
}



export default connect(mapStateToProps,mapDispatchToProps)(DetalleProducto)
=======
    product: state.productosMain.product,
  };
};
>>>>>>> 0e4f75d3c394fc8f2adb076da2e5216b65b9c4d5

export default connect(mapStateToProps, mapDispatchToProps)(DetalleProducto);
