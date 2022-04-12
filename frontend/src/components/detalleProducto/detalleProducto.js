import React, { useEffect, useState } from "react";
import "../../styles/detalleProducto.css";
import { connect } from "react-redux";
import { searchProductById } from "../../redux/productos/productos";
import { Link, useParams } from "react-router-dom";
import cartAction from "../../redux/actions/cartAction";

function DetalleProducto(props) {
  const { id } = useParams();
  const productId = id;
  const [reload, setReload] = useState(false);
  const [currentProduct, setCurrentProduct] = useState([]);

  useEffect(() => {
    searchProductById(productId).then((res) => setCurrentProduct(res.response));
  }, []);

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
                    <h3 className="fewUnitsRemaining">Few units remaining!</h3>
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
              {currentProduct.stock !== 0 && props.user ? (
                <button id={productId} onClick={addCart}>
                  Add to cart
                </button>
              ) : (
                <></>
              )}
            </div>
            <div className="divGoToCartOrContinueShopping">
              {currentProduct.stock !== 0 ? (
                <>
                  <Link
                    to="/checkout"
                    // className="linkResponsive userButton"
                    // onClick={SignOut}
                  >
                    <button>Proceed to check out</button>
                  </Link>
                  <p>or</p>
                  <button onClick={() => window.history.back()}>Go back</button>
                </>
              ) : (
                <button onClick={() => window.history.back()}>Go Back</button>
              )}
            </div>
            <>
              {/* TO_DO__cambiar condicion ""=== true" PARA QUE SOLO SEA VISIBLE A ADMIN */}
              {props.user?.isAdmin === true && (
                <Link to={`/adminView/${productId}`}>
                  <button>Take to CRUD (Admin View)</button>
                </Link>
              )}
            </>
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
    product: state.productosMain.product,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetalleProducto);
