import React, { useEffect, useState }from 'react';
import { productos } from '../../baseDeDatos';

const getProductos = () => {
    return new Promise((resolve,reject) => {
        SetTimeout(() => resolve(productos), 5000);
});
};[];


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
        <div>
            <h1>vamosss coñooo</h1>
            {cargando ? (
            <p>Cargando...</p>
            ) : (
            productos.map((productos) => <item key={productos.id} productos={productos} />
            ))}
        </div>

    );
};


export default Item;