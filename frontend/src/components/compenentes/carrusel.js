import React from "react";
import Slider from "react-carousel-responsive";
import "react-carousel-responsive/dist/styles.css";


const App = () => {
    var tamaño = {
        width: "100%",
        height: "20rem"
    }
    return (
        <Slider>
            <img style={tamaño}
                src="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=630&h=354"
                alt=""
            />
            <img style={tamaño}
                src="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=630&h=354"
                alt=""
            />
            <img style={tamaño}
                src="https://m.media-amazon.com/images/I/71WuEPVhcML._AC_UY395_.jpg"
                alt=""
            />
        </Slider>
    )
};

export default App;