import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../styles/productsView.css'
import ProductCard from '../productCard/productCard'

import {getAllProducts} from '../../redux/productos/productos'


function ProductsView() {
  const productos = useSelector(state => state.productosMain.products)
  const dispatch = useDispatch()
  console.log(productos)
  useEffect(()=>{
    dispatch(getAllProducts())
  },[])
  return (
    <main>
        <section>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </section>
    </main>
  )
}

export default ProductsView