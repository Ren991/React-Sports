import React, { useEffect, useState } from 'react';
import "../../styles/productCard.css";
import { Link, useParams } from 'react-router-dom';
import { searchProductById } from "../../redux/productos/productos";


function ProductCard(props) {

  /* const [currentProduct, setCurrentProduct] = useState([]);

  useEffect(() => {
    searchProductById(productId).then((res) => setCurrentProduct(res.response));
  }, []); */

  const prod = props.product

  return (
    <div className="cardBody">
      <div className="container" >
        <div className="card">
          <h1 className="marcaZapatilla"><img className='imgBrands' src={process.env.PUBLIC_URL + `/img/${prod.brand.brand}.png`} /></h1>
          <div className="imgBx">
            <img src={process.env.PUBLIC_URL + `/img/productImages/${prod.image}`} />
          </div>
          <div className="contentBx">
            <h2 className='productNameStyle'>{prod.productName}</h2>
            <h3 className='productNameStyle'>USD ${prod.price}</h3>
            <div className="size">
              <h3>Size : {prod.size}</h3>
            </div>
            <div className="color">
              <h3>Color: </h3>
              <span style={{backgroundColor:`${prod.color}`}} ></span> 

            </div>
            <Link to={`/productDetail/${prod._id}`} productInfo={prod}>
              View product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
