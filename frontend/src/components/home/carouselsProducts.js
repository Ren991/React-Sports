import React,{useEffect} from "react";
import "../../styles/home.css";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

import  {getAllProducts}  from '../../redux/productos/productos'
import {useDispatch,useSelector} from 'react-redux'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



function CarouselProducts(props) {
  const allProducts = useSelector(state => state.productosMain.products)//Estado de productos
  const dispatch = useDispatch() //Se declara dispatch para que no rompa los huevos en el useEffect

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  console.log(allProducts)
  //Productos mas vendidos --> 5 o menos || 
  const bestSeller = allProducts.filter(product => product.stock < 7) //Modificar stock base de datos
  console.log(bestSeller)

  const basquetBall = allProducts.filter(product=>product.sport==="Basketball" )
  console.log(basquetBall)

 
   
  return (
    <div className="containerCarouselProducts">
    <div style={{marginTop:15}} className="carouselProducts">
      <p style={{textAlign:"center"}} className="tittlesCarouselProducts">BEST SELLER PRODUCTS</p>
       <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiperProducts"
      >
        
        {bestSeller.map((product, index) => (
          <SwiperSlide key="index" className="carouselProductsSlide">
            <img className="imageProductsCarousel" src={process.env.PUBLIC_URL +`/img/productImages/${product.image}`} />
            <Link to={`/productDetail/${product._id}`} productInfo={product} className="linksCarousel">
            <p className="productNameCarousel">{product.productName}</p>
            <p className="productPriceCarousel">${product.price}</p>
            </Link>
          </SwiperSlide>
           
        ))}

        
      </Swiper>
    </div>
      <div style={{marginTop:15}} className="carouselProducts" >

      <p style={{textAlign:"center"}} className="tittlesCarouselProducts">BASQUETBALL</p>
       <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiperProducts"
      >
        
        {basquetBall.map((product, index) => (
          <SwiperSlide key="index" className="carouselProductsSlide">
            <img className="imageProductsCarousel" src={process.env.PUBLIC_URL +`/img/productImages/${product.image}`} />
            <Link to={`/productDetail/${product._id}`} productInfo={product} className="linksCarousel">
            <p className="productNameCarousel">{product.productName}</p>
            <p className="productPriceCarousel">${product.price}</p>
            </Link>
          </SwiperSlide>
           
        ))}

        
      </Swiper>
      </div>
    </div>
  );
}




export default CarouselProducts;
