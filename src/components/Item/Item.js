import "./Item.css";
import ItemCounter from "../Counter/ItemCounter";
import React from "react";
import { useNavigate } from "react-router-dom";


const Item = ({ producto }) => {
    const navigate = useNavigate();
        return (
            <div className="CardsStyle">
                <p>ID: {producto.id}</p>
                <p>Nombre: {producto.nombre}</p>
                <p>
                    precio: {"$"}
                    {producto.precio}
                </p>
                <p>talla:{producto.Talla}</p>
                <img src={producto.img} alt="{producto.img}" className="imgProduct" />
                <button onClick={() => navigate(`/productos/${producto.id}`)} className="pushButton">Ver Detalle</button>

                <ItemCounter />
            </div>
        );
};

export default Item;

