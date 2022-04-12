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

import Carousel from "../home/carousel";
import CarouselProducts from "../home/carouselsProducts"

const Home = (props) => {

 /*  useEffect(() => {
    {props.user??
      <Sweetalert/>}
  }, [props.user]) */
  

  return (
    <>
    <Carousel/>
    <CarouselProducts/>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
      user: state.userReducer.user,
      
      
  }
}


export default connect(mapStateToProps, null)(Home);
