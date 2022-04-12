import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../../styles/admin.css";
import productsActions from "../../redux/actions/productsActions";
import { searchProductById } from "../../redux/productos/productos";
import { useParams } from "react-router-dom";

function AdminView(props) {
  //inicio CRUD

  const { id } = useParams();
  const productId = id;
  const [currentProduct, setCurrentProduct] = useState([]);

  useEffect(() => {
    searchProductById(productId).then((res) => setCurrentProduct(res.response));
  }, []);

  async function modProduct(event) {
    // props.modifyProduct("LOS DETALLES DEL PRODUCTO");
    console.log(event.target)
  }

  async function delProduct(event) {
    props.deleteProduct("EL ID");
  }

  //FIN CRUD

  const handleSubmit = (event) => {
    event.preventDefault();
    const uploadProduct = {
      ProductName: event.target[0].value,
      Sport: event.target[1].value,
      Description: event.target[2].value,
      Color: event.target[3].value,
      Stock: event.target[4].value,
      Image: event.target[5].value,
      Price: event.target[6].value,
      Genre: event.target[7].value,
      Brand: event.target[8].value,
    };
    /* props.signUpUser(userData) */
  };
  return (
    <div className="adminContainer">
      <div>
        <h1 className="titleAdmin">Admin Section</h1>
      </div>
      <div
        className="accordion accordion-flush accordionContainer"
        id="accordionFlushExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Delete Product
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <form>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={productId}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <button
                  onClick={delProduct}
                  variant="primary"
                  type="submit"
                  className="submitButton"
                >
                  DELETE PRODUCT
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* FIN DELETE */}

        {/* INICIO MODIFICAR */}

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Modify Product
            </button>
          </h2>

          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <form onSubmit={modProduct}>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Product name:
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={currentProduct?.productName}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Sport
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={currentProduct?.sport}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Description
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={currentProduct?.description}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Color
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={currentProduct?.color}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Stock
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={currentProduct?.stock}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Image name (with extension)
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={currentProduct?.image}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Price
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={currentProduct?.price}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Gender
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={currentProduct?.gender}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Brand "_id"
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={currentProduct?.brand}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <button
                  variant="primary"
                  type="submit"
                  className="submitButton"
                >
                  MODIFY PRODUCT
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FIN MODIFICAR */}

        {/* START OF UPLOAD PRODUCT */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Upload Product
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Product`s Name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Sport"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Color"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Stock"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="image url"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Price"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type male or female"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Brand"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <button
                  variant="primary"
                  type="submit"
                  className="submitButton"
                >
                  UPLOAD PRODUCT
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* END OF UPLOAD PRODUCT */}
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  modifyProduct: productsActions.modifyProduct,
  deleteProduct: productsActions.deleteProduct,
};
// const mapStateToProps = (state) => {
//   return {
//     cart: state.cartReducer.cart,
//     product: state.productosMain.product,
//     user: state.userReducer.user,
//   };

export default connect(null, mapDispatchToProps)(AdminView);
