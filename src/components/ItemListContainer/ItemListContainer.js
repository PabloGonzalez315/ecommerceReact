import "./ItemListContainer.css";
import React from "react";
import ItemCounter from "../Counter/ItemCounter";
import Item from "../Item/Item";

const ItemListContainer = ({ producto }) => {
    console.log(producto);
    return (
        <div className="CardsStyle">
            <h3>Articulo</h3>
            <p>ID: {producto.id}</p>
            <p>Nombre: {producto.nombre}</p>
            <p>precio:{producto.precio}</p>
            <p>talla:{producto.Talla}</p>
            <div>
                <ItemCounter />
            </div>
        </div>
    );
};

export default ItemListContainer;
