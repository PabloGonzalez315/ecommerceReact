import "./Item.css";
import ItemCounter from "../Counter/ItemCounter";
import React from "react";


const Item = ({ producto }) => {
        return (
            <div className="CardsStyle">
                <h3>Articulo</h3>
                <p>ID: {producto.id}</p>
                <p>Nombre: {producto.nombre}</p>
                <p>
                    precio: {"$"}
                    {producto.precio}
                </p>
                <p>talla:{producto.Talla}</p>
                <img src={producto.img} alt="{producto.img}" className="imgProduct" />

                <ItemCounter />
            </div>
        );
};

export default Item;

