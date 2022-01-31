import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";

const ProductDetailPage = () => {
    const { productId } = useParams();
      const [producto, setproducto] = useState([]);
      const [cargando, setCargando] = useState(false);
      useEffect(() => {
        const URL = `http://localhost:3001/productos/${productId}`;
        setCargando(true);
        
            fetch(URL)
                .then((resp) => resp.json())
                .then((data) => setproducto(data))
                .finally(() => setCargando(false));
  }, [productId]);

  if (cargando || !producto) return <p>Cargando...</p>;
  return (
      <div>
          <h1>{producto.id}</h1>
          <h1>{producto.nombre}</h1>
          <img src={producto.img} alt={producto.nombre} />
          <p>{producto.descripcion}</p>
          <p>{producto.precio}</p>
      </div>
  );
};
export default ProductDetailPage;