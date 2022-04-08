import React, { useEffect, useState } from 'react';
import "../../styles/productCard.css";
import { Link, useParams } from 'react-router-dom';


function ProductCard(props) {

  const prod = props.product
 /*  console.log(prod) */
  
  return (
    <div className="cardBody">
      <div className="container" >
        <div className="card">
            <h1 className="marcaZapatilla">{prod.productName}</h1>
          <div className="imgBx">
            <img src="https://cdn.discordapp.com/attachments/959958122384994367/960974493076045844/pngwing.com.png" />
          </div>
          <div className="contentBx">
            <h2>{prod.productName}</h2>
            <div className="size">
              <h3>Sizes :</h3>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </div>
            <div className="color">
              <h3>Color :</h3>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <Link to={`/DETALLEPRODUCTO/${prod._id}`}>
              View product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
