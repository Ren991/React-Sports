import React from "react";
import "../../styles/brandCard.css";

function BrandCard() {
  return (
    <div className="cardBody">
      <div className="container">
        <div className="card" style={{backgroundColor:"red!important"}}>
          
          <div className="imgBx">
            <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c4f3.png" />
          </div>
          <div className="contentBx">           
            <a href="#">View more..</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandCard;
