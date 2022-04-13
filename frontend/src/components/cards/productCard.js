import React, { useEffect, useState } from 'react';
import "../../styles/productCard.css";
import { Link, useParams } from 'react-router-dom';
import {useSelector} from 'react-redux'


function ProductCard(props) {

  const prod = props.product
  /*  console.log(prod) */

  return (
    <div className="cardBody">
      <div className="container" >
        <div className="card">
          <h1 className="marcaZapatilla">{prod.productName}</h1>
          <div className="imgBx">
            <img src={process.env.PUBLIC_URL + `/img/productImages/${prod.image}`} />
          </div>
          <div className="contentBx">
            <h2>{prod.productName}</h2>
            <div className="size">
              <h3>Size : {prod.size}</h3>
            </div>
            <div className="color">
              <h3>Color :</h3>
              <span></span> {/* style={{backgroundColor:`${prod.color}`}  COMPLETAR CARGA DE DATOS CON COLOR*/}

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
