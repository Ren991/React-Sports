import React from "react";
const Table = (props) => {
  const reload = props.reload
  const setReload = props.setReload
  const productsUser = props.productosAMostar;
  var lStorage;
  if (localStorage.getItem("carrito")) {
    lStorage = localStorage.getItem("carrito").split(" ");
  }

  function removeItem() {
    lStorage = lStorage.filter((id) => id !== productsUser[0]._id);
    localStorage.setItem("carrito", lStorage.join(" ").toString());
    setReload(!reload)
  }

  return (
    <tbody id="cuerpo">
      {productsUser.length !== 0 ? (
        productsUser?.map((productos, index) => {
          return (
            <tr key={index}>
              <td id="nombreProducto">
                <div>
                  <img
                    id="imagenProducto"
                    src={
                      process.env.PUBLIC_URL +
                      `/img/productImages/${productos.image}`
                    }
                  />
                </div>
                <div>
                  <h6>{productos.productName}</h6>
                </div>
              </td>

              <td>{productos.price}</td>

              <td className="botonera2">
                <button onClick={removeItem} className="restaSuma">
                  x
                </button>
              </td>
            </tr>
          );
        })
      ) : (
        <p>Please Add an item to the cart</p>
      )}
    </tbody>
    
  );
};

export default Table;
