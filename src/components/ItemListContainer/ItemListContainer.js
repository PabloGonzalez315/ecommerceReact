import React from "react";
import Item from "../Item/Item";
import { useState, useEffect } from "react";


const URL = "http://localhost:3001/productos";

const ItemListContainer = () => {
    const [productos, setproductos] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        setCargando(true);
    fetch(URL)
        .then((resp) => resp.json())
        .then((json) => setproductos(json))
        .catch((error) => console.error(error))
        .finally(() => setCargando(false));
},
    []);
    if (cargando) {
        return <div>Cargando...</div>;
    }
    else if (error) {
        return <div>Error</div>;
    }
    else 
    return (
    <div> 
        {productos.map((producto) => { 
            return <Item key={producto.id} producto={producto} />})}
    </div>
    );
};

export default ItemListContainer;