import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import ItemDetail from "../components/ItemDetailContainer/ItemDetail";
import { getFirestore } from "../firebase";

const ProductDetailPage = () => {
	const { productId } = useParams();
	const [producto, setProducto] = useState();
	const [cargando, setCargando] = useState(false);

	useEffect(() => {
		const db = getFirestore();
		const productsCollection = db.collection("productos");
		const selectedProduct = productsCollection.doc(productId);

		setCargando(true);
		selectedProduct
			.get()
			.then((response) => {
				if (!response.exists) console.log("El producto no existe");
				setProducto({ ...response.data(), id: response.id });
			})
			.finally(() => setCargando(false));
	}, [productId]);

	if (cargando || !producto) return <p>Cargando...</p>;
	return <ItemDetail Item={producto} />;
};

export default ProductDetailPage;
