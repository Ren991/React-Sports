import React from "react";
import "../../styles/sportCard.css";

function SportCard() {
  return (
    <div className="cardBody">
      <div class="container">
        <div class="card">
          <div class="imgBx">
            <img src="https://images.pexels.com/photos/209841/pexels-photo-209841.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
          </div>
          <div class="contentBx">
            <h2>Football</h2>
            <a href="#">View more..</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SportCard;
