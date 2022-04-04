import React from 'react';
import '../../styles/detalleProducto.css';

function DetalleProducto() {
  return (
    <div className='contenedorDetalleProducto'>
        <div className="detalleProductoIzquierda">
          <div className="detalleProductoContenedorRuta">
            <a href="#"> Inicio</a>
            <h5>Producto prueba</h5>         
          </div>
          <div className="detalleProductoContenedorFotosProductos">
            <img className="logoProducto"src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" />
            <img className="fotoProducto"src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esAR/Images/ORIGINALS_SuperStar_StorySnippet_D_700x490_tcm216-848685.jpg" />
          </div>
          <div className='detalleProductoContenedorDescripcion'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec ante ex. Donec posuere laoreet varius. Mauris tempus iaculis sapien a laoreet. Duis placerat posuere nulla, ut dapibus est finibus sit amet. Nam pellentesque ac tortor eu imperdiet. Etiam quis dictum mauris. Quisque et luctus lectus. Fusce ligula justo, fermentum ac enim ac, gravida auctor risus. Nulla in nisl nec libero elementum eleifend. Aliquam scelerisque justo lectus, et ornare felis scelerisque vel. Duis ac massa dictum, gravida lorem sed, suscipit eros. Donec eu efficitur nisi, quis feugiat diam. Pellentesque efficitur eu nunc eget imperdiet.</p>
          </div>
        </div>
        <div className='detalleProductoDerecha'>
          <div>
            <div className='ternarioStockProducto'>
              {/* Ojo que aca va con un ternario en base al stock */}
              <h3>Ultimas unidades!</h3>
              {/* <h3>Sin stock!</h3> */}
              {/* hasta aca */}
            </div> 
            <div className='headerProducto'>
              <h2>Producto prueba</h2>
              <h3>$10.000</h3>
            </div>
            <div className='detallesProducto'>
              <p>Color: Negro</p>
              <p>Talles disponibles: 42, 43, 44 </p>
            </div>
          </div>
          <div className='detalleProductoCarrito'>
            <input type='number' defaultValue='1'></input>
            <button>Añadir al carrito</button>
          </div>
            
        </div>
    </div>
  )
}

export default DetalleProducto