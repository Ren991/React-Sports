import React from "react";

import Carrusel from '../compenentes/carrusel';
import { Link as LinkRouter } from 'react-router-dom'







const Main = () => {
    var flexDirection = {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "20px!important",
        width: "80px!important"
    }




    return (
        <div style={{ flexDirection }}>
            <Carrusel />
        </div>
    )

}

export default Main