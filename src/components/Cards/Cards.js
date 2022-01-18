import "./Cards.css";
import React from "react";

const Cards = ({ id, name, price, size }) => {
    return (
        <div className="CardsStyle">
            <h3>Articulo</h3>
            <p>ID: {id}</p>
            <p>Nombre: {name}</p>
            <p>precio:{price}</p>
            <p>talla:{size}</p>
        </div>
    );
};

export default Cards;
