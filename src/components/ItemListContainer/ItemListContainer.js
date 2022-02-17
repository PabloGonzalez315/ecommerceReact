import React from "react";
import Item from "../Item/Item";
import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { getFirestore } from "../../firebase";


const ItemListContainer = () => {
	const [productos, setproductos] = useState([]);
	const [cargando, setCargando] = useState(false);
	const [error] = useState(null);
	useEffect(() => {
		const db = getFirestore();
		const productosCollection = db.collection("productos");

		const getDataFromFirestore = async () => {
			setCargando(true);
		const response = await productosCollection.get();
		if (response.empty) {
			console.log("no hay productos");
		}
		setproductos(response.docs.map((doc) => ({...doc.data(), id: doc.id})));
		
	};
			
		getDataFromFirestore();
		setCargando(false);
		
	}, []);
	if (cargando) {
		return <div>Cargando...</div>;
	} else if (error) {
		return <div>Error: {error.message}</div>;
	} else {
		return (
			<div>
				<div className="containerList">
					{productos.map((producto) => {
						return <Item key={producto.id} producto={producto} />;
					})}
				</div>
			</div>
		);
	}
};
export default ItemListContainer;
