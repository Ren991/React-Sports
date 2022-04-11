<div className="detalleProductoContenedorRuta">
            <a href="#"> Inicio</a>
            <h5>{currentProduct.productName}</h5>         
          </div>
          <div className="detalleProductoContenedorFotosProductos">
            <img className="logoProducto"src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" />
            <img className="fotoProducto"src={currentProduct.image} />
          </div>
          <div className='detalleProductoContenedorDescripcion'>
            <p>{currentProduct.description}</p>
          </div>
        </div>
        <div className='detalleProductoDerecha'>
          <div>

            <div className='ternarioStockProducto'>
              {/* TO_DO__REVISAR LOS TERNARIOS */}
              {currentProduct.stock==0 ??
                <h3>Out of stock!</h3>
              }
              {currentProduct.stock<=10 ?? 
                <h3>Last units!</h3>
              }
            </div> 
            <div className='headerProducto'>
              <h2>{currentProduct.productName}</h2>
              <h3>${currentProduct.price}</h3>
            </div>
            <div className='detallesProducto'>
              <p>Color: N/A</p>
              <p>Sizes: {currentProduct.size}</p>
            </div>
          </div>
          <div className='detalleProductoCarrito'>
            <input type='number' defaultValue='1'></input>
            <button id={currentProduct._id} onClick={addCart}>Añadir al carrito</button>
          </div>