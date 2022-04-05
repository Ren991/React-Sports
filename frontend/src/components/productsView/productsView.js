import React from 'react'
import '../../styles/productsView.css'
import ProductCard from '../productCard/productCard'


function ProductsView() {
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