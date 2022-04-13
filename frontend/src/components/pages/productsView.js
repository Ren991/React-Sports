import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCard from "../cards/productCard";
// import '../../styles/cardView.css'
//importaciones redux
import { getAllProducts } from "../../redux/productos/productos";

function ProductsView() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const allProducts = useSelector((state) => state.productosMain.products);
  const dispatch = useDispatch();
  const [filterSelected] = Object.keys(useParams());
  const [filterValue] = Object.values(useParams());
  const filteredProducts = [];

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  switch (filterSelected) {
    case "brand":
      filteredProducts.push(
        allProducts.filter((element) => element.brand.brand == filterValue)
      );
      break;
    case "type":
      filteredProducts.push(
        allProducts.filter((element) => element.type == filterValue)
      );
      break;
    case "sport":
      filteredProducts.push(
        allProducts.filter((element) => element.sport == filterValue)
      );
      break;
    case "gender":
      filteredProducts.push(
        allProducts.filter((element) => element.genre == filterValue)
      );
      break;

  }

  //TO_DO__PENDIENTE 100% DINAMICO, ¿COMO LE PASO LA PROPIEDAD DINAMICAMENTE? filterSelected como propiedad a evaluar
  // console.log(allProducts.filter(element => element.gender == filterValue))
  // filteredProducts.push(allProducts.filter(element => element.gender == filterValue))
  //TO_DO__COMO EVITAR QUE SE GENERE UN ARRAY CON UNA UNICA POSICION QUE CONTIENE EL ARRAY FILTRADO???
  // console.log(filteredProducts[0])

  return (
    <main>
      <section>
        {filteredProducts[0]?.map((element, index) =>
          <ProductCard key={index} product={element} />
        )}
      </section>
    </main>
  );
}

export default ProductsView;
