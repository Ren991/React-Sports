import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllProducts} from '../../redux/productos/productos'
import ProductCard from '../cards/productCard'
// import '../../styles/cardView.css'

function ProductsView() {

  const products = useSelector(state => state.productosMain.products)
  const dispatch = useDispatch()
  console.log(products)

  useEffect(()=>{
    dispatch(getAllProducts())
  },[]);

  return (
    <main>
        <section> 
            {products?.map(element=>
              <ProductCard product={element} />
            )}
        </section>
    </main>
  )
}

export default ProductsView