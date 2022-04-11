import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import {connect} from 'react-redux'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../styles/home.css";

// import required modules
import Sweetalert from '../login/sweetalert'
import Swal from 'sweetalert2'


const Home = (props) => {

 /*  useEffect(() => {
    {props.user??
      <Sweetalert/>}
  }, [props.user]) */
  

  return (
    <>
    <div className="carouselContainer">
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className="imgCarousel" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/85b1cd26-23ff-44a1-80b6-360ce24cf5ed/sitio-web-oficial-de-nike.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
            <img className="imgCarousel" src={process.env.PUBLIC_URL+ `../img/imagen_carousel_messi.png`}/>
        </SwiperSlide>
        <SwiperSlide>
            <img className="imgCarousel qatar"  src= {process.env.PUBLIC_URL+ `../img/qatar2022.png`} /> 
        </SwiperSlide>
        <SwiperSlide>
            <img className="imgCarousel" src="https://www.gameit.es/wp-content/uploads/2022/03/Reebok.jpg"/>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
      user: state.userReducer.user,
      
  }
}

export default connect(mapStateToProps, null)(Home);
