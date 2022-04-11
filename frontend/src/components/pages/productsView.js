import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import ProductCard from '../cards/productCard'
// import '../../styles/cardView.css'
//importaciones redux
import { seachProductsMarca } from '../../redux/productos/productos'
function ProductsView() {
  const marca = useSelector(state => state.productosMain.marca)
  const dispatch = useDispatch()

  const { brand } = useParams()
  console.log(brand);
  console.log(marca);
  useEffect(() => {
    dispatch(seachProductsMarca(brand))
  }, [])
  useEffect(() => {
    dispatch(seachProductsMarca(brand))
  }, [brand])

  return (
    <main>
      <section>
        hola
        {marca?.map((element, index) =>
          <ProductCard key={index} product={element} />
        )}
      </section>
    </main>
  );
}

export default ProductsView;