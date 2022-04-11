import React from "react";
import '../../styles/navBar.css'
const inputSearch = () => {

  return (
      <div className="containerInput">
          <input className="inputNavbar" placeholder="¿What are you looking for?"/>
          <div className="containerSearch">
          <img className="logoSearch" src= {process.env.PUBLIC_URL+ `../img/buscar.png`} /> 
          </div>
      </div>
  );
};



export default inputSearch;



