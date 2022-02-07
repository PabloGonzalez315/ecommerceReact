import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import ItemDetail from "../components/ItemDetailContainer/ItemDetail";

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
		<div className="contenedorItem">
			<ItemDetail Item={producto} />
		</div>
	);
};
export default ProductDetailPage;
