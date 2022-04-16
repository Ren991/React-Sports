import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../../styles/admin.css";
import productsActions from "../../redux/actions/productsActions";
import { searchProductById } from "../../redux/productos/productos";
import { useParams } from "react-router-dom";
import 'animate.css';


function AdminView(props) {
  //inicio CRUD

  const { id } = useParams();
  const productId = id;
  console.log(productId)
  const [currentProduct, setCurrentProduct] = useState([]);

  useEffect(() => {
    searchProductById(productId).then((res) => setCurrentProduct(res.response));
  }, []);


  function modProduct(event) {
    console.log(event)
    event.preventDefault()
    const idProd = event.target[11].value
    const toModifyProduct={
      productName: event.target[0].value,
      type: event.target[1].value,
      sport: event.target[2].value,
      description: event.target[3].value,
      color: event.target[4].value,
      stock: Number(event.target[5].value),
      image: event.target[6].value,
      price: Number(event.target[7].value),
      genre: event.target[8].value,
      brand: event.target[9].value,
      size:  event.target[10].value,
    }
    console.log(idProd)
    console.log(toModifyProduct)
    props.modifyProduct(idProd,toModifyProduct)
  }

  async function delProduct(event) {
    event.preventDefault();
    const toDeleteProduct = event.target[0].value
    props.deleteProduct(toDeleteProduct) 
  }

  //FIN CRUD

  const handleSubmit = (event) => {
    event.preventDefault();
    const uploadProduct = {
      productName: event.target[0].value,
      type: event.target[1].value,
      sport: event.target[2].value,
      description: event.target[3].value,
      color: event.target[4].value,
      stock: Number(event.target[5].value),
      image: event.target[6].value,
      price: Number(event.target[7].value),
      genre: event.target[8].value,
      brand: event.target[9].value,
      size: Number(event.target[10].value),
    };
    props.loadProduct(uploadProduct)
  };

  return (
    <div className="adminContainer">
      <div>
        <h1 className="titleAdmin animate__backInDown">Admin Section</h1>
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
              <form onSubmit={delProduct}>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Product ID
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    value={productId}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    />
                </div>
                <button
                  variant="primary"
                  type="submit"
                  id="productDeleted"
                  className="submitButton"
                >
                  DELETE PRODUCT
                </button>
                <input type="submit" className="submitButton" placeholder="DELETE PRODUCT"/>     
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
                    Product Name
                  </span>
                  <p
                    type="text"
                    className="form-control"
                    contentEditable="true"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  >{currentProduct?.productName}</p>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Type
                  </span>
                  <p
                    type="text"
                    className="form-control"
                    contentEditable="true"
                    aria-label="Type"
                    aria-describedby="basic-addon1"
                  >{currentProduct?.type}</p>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Sport
                  </span>
                  <p
                    type="text"
                    className="form-control"
                    contentEditable="true"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  >{currentProduct?.sport}</p>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Description
                  </span>
                  <p
                    type="text"
                    className="form-control"
                    contentEditable="true"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  >{currentProduct?.description}</p>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Color
                  </span>
                  <p
                    type="text"
                    className="form-control"
                    contentEditable="true"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  >{currentProduct?.color}</p>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Stock
                  </span>
                  <p
                    type="text"
                    className="form-control"
                    contentEditable="true"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  >{currentProduct?.stock}</p>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Image URL
                  </span>
                  <p
                    type="text"
                    className="form-control"
                    contentEditable="true"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  >{currentProduct?.image}</p>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Price $
                  </span>
                  <p
                    type="text"
                    className="form-control"
                    contentEditable="true"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  >{currentProduct?.price}</p>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Gender
                  </span>
                  <p
                    type="text"
                    className="form-control"
                    contentEditable="true"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  >{currentProduct?.genre}</p>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Brand ID
                  </span>
                  <p
                    type="text"
                    className="form-control"
                    contentEditable="true"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  >{currentProduct?.brand}</p>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Size
                  </span>
                  <p
                    type="text"
                    className="form-control"
                    contentEditable="true"
                    aria-label="Size"
                    aria-describedby="basic-addon1"
                  >{currentProduct?.size}</p>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Product ID
                  </span>
                  <p
                    type="text"
                    className="form-control"
                    contentEditable="true"
                    aria-label="prodID"
                    aria-describedby="basic-addon1"
                  >{currentProduct?._id}</p>
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
                    Product Name
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Hoodie Nike"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Type
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Hoodies"
                    aria-label="Type"
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
                    placeholder="Fitness"
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
                    placeholder="Description of the product"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Color
                  </span>
                  <input
                    type="color"
                    className="form-control color"
                    placeholder="Color"
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
                    placeholder="18"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Image URL
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="https://imageProduct.jpg"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Price $
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="70"
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
                    placeholder="Unisex"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Brand ID
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="6250579e0111b78ea9c27101"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Size
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="XL"
                    aria-label="Size"
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
  loadProduct: productsActions.addProduct
};
// const mapStateToProps = (state) => {
//   return {
//     cart: state.cartReducer.cart,
//     product: state.productosMain.product,
//     user: state.userReducer.user,
//   };

export default connect(null, mapDispatchToProps)(AdminView);
