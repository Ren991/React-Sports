import React from "react";
import "../../styles/brandCard.css";

function BrandCard() {
  return (
    <div className="cardBody">
      <div class="container">
        <div class="card">
          <div class="imgBx">
            <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c4f3.png" />
          </div>
          <div class="contentBx">           
            <a href="#">View more..</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandCard;
