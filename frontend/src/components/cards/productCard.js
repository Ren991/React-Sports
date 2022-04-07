import React, { useEffect, useState } from 'react';
import "../../styles/productCard.css";
import { useParams } from 'react-router-dom';


function ProductCard(props) {

  let {id} = useParams() 
  console.log(id)

  return (
    <div className="cardBody">
      <div className="container" >
        <div className="card">
            <h1 className="marcaZapatilla">{props.product.brand}</h1>
          <div className="imgBx">
            <img src="https://cdn.discordapp.com/attachments/959958122384994367/960974493076045844/pngwing.com.png" />
          </div>
          <div className="contentBx">
            <h2>{props.product.color}</h2>
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
            <a href="#">View product</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
