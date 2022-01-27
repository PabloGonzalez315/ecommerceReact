import React, { useEffect, useState }from 'react';
import { productos } from '../../baseDeDatos';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const getProductos = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve(productos), 2000);
});
};


function Item () {
    const [productos, setproductos] = useState([]);
    const [cargando, setCargando] = useState(false);
    useEffect(() => {
        setCargando(true);
    getProductos()
    .then((data) => setproductos(data))
    .catch((error) => console.error(error))
    .finally(() => setCargando(false));
},
    []);
    
    return (
        <div>{cargando ? <p>Cargando...</p> : productos.map((producto) => <ItemListContainer key={producto.id} producto={producto} />)}</div>
    );
};

export default Item;