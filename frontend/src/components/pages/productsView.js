import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, filterProducts } from "../../redux/productos/productos";
import ProductCard from "../cards/productCard";
// import '../../styles/cardView.css'

function ProductsView() {
  const products = useSelector((state) => state.productosMain.products);
  const filprods = useSelector((state)=> state.productosMain.filteredProducts)
  console.log(filprods)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const filtProducts = (event) => {
    dispatch(filterProducts(event.target.value));
  };

  

  return (
    <main>
      {/* <div className="input-group mb-3" >
        <div className="form-outline">
          <input type="search" id="form1" onChange={filtProducts} className="form-control" />
          <label className="form-label" for="form1">
            Search
          </label>
        </div>
        <button type="button"  className="btn btn-primary">
          <i className="fas fa-search"></i>
        </button>
      </div> */}
      <section>
        {products?.map((element, index) => (
          <ProductCard key={index} product={element} />
        ))}
      </section>
    </main>
  );
}

export default ProductsView;
