import React, { useEffect, useState } from "react";
import "../../styles/detalleProducto.css";
import { connect } from "react-redux";
import { searchProductById } from "../../redux/productos/productos";
import { Link, useParams } from "react-router-dom";
import cartAction from "../../redux/actions/cartAction";
import productsActions from "../../redux/actions/productsActions";

import AddProduct from "./AddProduct"
function DetalleProducto(props) {
  window.scrollTo({ top: 0, behavior: "smooth" });
  console.log(useParams())
  const { id, brand } = useParams();
  const productId = id;
  const [reload, setReload] = useState(false);
  const [currentProduct, setCurrentProduct] = useState([]);

  
  useEffect(() => {
    searchProductById(productId).then((res) => setCurrentProduct(res.response));
  }, []);
  
  console.log(currentProduct)
  async function addCart(event) {
    props.addToCart(event.target.id);
  }


  return (
    <div className="mainHtml">
      <div className="contenedorDetalleProducto">
        <div className="detalleProductoIzquierda">
          <div className="detalleProductoContenedorRuta">
            <p>{currentProduct.productName}</p>
          </div>
          <div className="detalleProductoContenedorFotosProductos">
            {<img
              className="logoProducto"
              src={process.env.PUBLIC_URL + `/img/${brand}.png`} />}
            <img
              className="fotoProducto"
              src={
                process.env.PUBLIC_URL +
                `/img/productImages/${currentProduct?.image}`
              }
            />
          </div>
        </div>
        <div className="detalleProductoDerecha">
          <div>
            <div className="ternarioStockProducto">
              {currentProduct?.stock <= 5 ? (
                <>
                  {currentProduct?.stock == 0 ? (
                    <h3 className="outOfStock">SOLD OUT</h3>
                  ) : (
                    <h3 className="fewUnitsRemaining">FEW UNITS</h3>
                  )}
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="headerProducto">
              <h2>{currentProduct.productName}</h2>
              <h3>${currentProduct.price}</h3>
              <p>{currentProduct.stock}</p>
            </div>
            <div className="colorProducto">
              <p>COLOR:</p>
              <div className="circuloColorYSize" style={{backgroundColor:`${currentProduct?.color}`}} ></div>
            </div>
            <div className="SizeProducto">
              <p>SIZE:</p>
              <div className="circuloColorYSize">{currentProduct?.size}</div>
              </div>
          </div>
            <div className="detalleProductoCarrito">
              {currentProduct?.stock !== 0 && props.user ? (
                <button className="botonAgregarAlCarrito" id={productId} onClick={addCart}>
                  <img className='logoCarritoBoton' src={process.env.PUBLIC_URL + "/img/carritoBlanco.png"} />
                  <p className="addToCart">ADD TO CART</p>
                  <img className='logoCarritoBoton' src={process.env.PUBLIC_URL + "/img/siguiente.png"} />
                </button>
              ) : (
                <></>
              )}
            </div>
            <div className="divGoToCartOrContinueShopping">
              {currentProduct?.stock !== 0 ? (
                <>
                  <Link
                    to="/checkout"
                    className="contenedorComprarAhora"
                  >
                    <button className="botonComprarAhora">
                    <img className='logoCarritoBoton' src={process.env.PUBLIC_URL + "/img/bolsa.png"} />
                      <p className="addToCart">BUY NOW</p>
                      <img className='logoCarritoBoton' src={process.env.PUBLIC_URL + "/img/siguiente.png"} />  
                      </button>
                  </Link>
                  <button className="botonAtras" onClick={() => window.history.back()}><img className='logoCarritoBoton' src={process.env.PUBLIC_URL + "/img/atras.png"} /></button>
                </>
              ) : (
                <button className="botonAtras" onClick={() => window.history.back()}><img className='logoCarritoBoton' src={process.env.PUBLIC_URL + "/img/atras.png"} /></button>
              )}
            </div>
            <div className="containerAdmin">
              {/* TO_DO__cambiar condicion ""=== true" PARA QUE SOLO SEA VISIBLE A ADMIN */}
              {props.user?.isAdmin === true && (
                <>
                <Link className="rutaAdmin" to={`/adminView/${productId}`}>
                  <button className="botonAdmin">
                    <p className="tittleAdmin">ADMIN ACTIONS</p>
                    <img src={process.env.PUBLIC_URL + "/img/cargar_producto.png"} /> 
                    <img src={process.env.PUBLIC_URL + "/img/eliminar_producto.png"} /> 
                    <img src={process.env.PUBLIC_URL + "/img/editar_producto.png"} /> 
                    </button>
                </Link>
                </>
              )}
            </div>
            <div className="containerEnvios">
              <div className="containerTextoEnvios">
                <div className="camionYTitulo">
                  <img src={process.env.PUBLIC_URL + "/img/camion.png"} /> 
                  <p>FREE SHIPING TO ANY STATE</p>
                </div>
                  <h4 className="precioEnvio">ON ORDERS OVER $59.99</h4>
              </div>
            </div>
        </div>
      </div>
      <div className="contenedorDescripcionProducto">
        <div className="contenedorDescriptionIzquierdo">
          <div className="description">
          <p>DESCRIPTION:</p>
          <h4 className="precioEnvio">{currentProduct?.description}</h4>

          </div>

        </div>
        <div className="contenedorDescriptionDerecho">

        </div>

      </div>
    </div>
  );
}
const mapDispatchToProps = {
  addToCart: cartAction.addToCart,
  deleteProduct: productsActions.deleteProduct
};
const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
    product: state.productosMain.product,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetalleProducto);
