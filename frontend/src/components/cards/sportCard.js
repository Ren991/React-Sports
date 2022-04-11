import React from "react";
import "../../styles/sportCard.css";

function SportCard(props) {
  return (
    <div className="cardBody">
      <div className="container">
        <div className="card" style={{content:"Hola cmt"}}>
          <div className="imgBx">
            <img src="https://images.pexels.com/photos/209841/pexels-photo-209841.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
          </div>
          <div className="contentBx">
            <h2>Football</h2>
            <a href="#">View more..</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SportCard;
