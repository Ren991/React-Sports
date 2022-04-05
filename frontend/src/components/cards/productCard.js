import React from "react";
import "../../styles/productCard.css";

function ProductCard() {
  return (
    <div className="cardBody">
      <div class="container">
        <div class="card">
          <div class="imgBx">
            <img src="https://cdn.discordapp.com/attachments/959958122384994367/960974493076045844/pngwing.com.png" />
          </div>
          <div class="contentBx">
            <h2>Nike Shoes</h2>
            <div class="size">
              <h3>Sizes :</h3>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </div>
            <div class="color">
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
