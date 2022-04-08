//import externo
import React, { useRef, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles interno
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/home.css";
// import interno Componentes
import ProductsView from './productsView'

export default function Home() { //rompe carta y header
  return (
    <> 
    <div className="carouselContainer">
      <Swiper  navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <img className="imgCarousel" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/85b1cd26-23ff-44a1-80b6-360ce24cf5ed/sitio-web-oficial-de-nike.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
            <img className="imgCarousel" src={process.env.PUBLIC_URL+ `../img/adidas1.png`}/>
        </SwiperSlide>
        <SwiperSlide>
        
        <img className="imgCarousel qatar"  src= {process.env.PUBLIC_URL+ `../img/qatar2022.png`} /> 
  
      
        </SwiperSlide>
        <SwiperSlide>
            <img className="imgCarousel" src="https://www.gameit.es/wp-content/uploads/2022/03/Reebok.jpg"/>
        </SwiperSlide>
       
        
        
      </Swiper>
      </div>
      <div ></div>
      <h3 style={{textAlign:"center"}}>Top deals</h3>
      <ProductsView/>
      <h3 style={{textAlign:"center"}}>What's news</h3>
      <ProductsView/>
      
    </>
  );
}
