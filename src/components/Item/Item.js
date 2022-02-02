import "./Item.css";
import ItemCounter from "../Counter/ItemCounter";
import React from "react";
import { useNavigate } from "react-router-dom";


const Item = ({ producto }) => {
    const navigate = useNavigate();
        return (
            <div className="card">
                <img src={producto.img} alt="{producto.img}" className="imgProduct" />
                <p>{producto.nombre}</p>
                <p className="price">
                    precio: {"$"}
                    {producto.precio}
                </p>
                <p>ID: {producto.id}</p>
                <button onClick={() => navigate(`/productos/${producto.id}`)} className="buttonList">Ver Detalle</button>

                
            </div>
        );
};

export default Item;

