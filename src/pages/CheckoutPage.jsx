import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase/index";
import { useState } from "react";

const CheckoutPage = () => {
	const { orderId } = useParams();
	const [order, setOrder] = useState({});
	useEffect(() => {
		const db = getFirestore();
		db.collection("orders")
			.doc(orderId)
			.get()
			.then((resp) => setOrder({ id: resp.id, ...resp.data() }));
	}, [orderId]);

	if (!order.id) {
		return <p>Cargando...</p>;
	}

	return (
		<div>
			<h3>Gracias por su comra</h3>
			<p> Detalles de su pedido: </p>
			<p> Nombre: {order.buyer.name} </p>
			<p> Telefono: {order.buyer.phone} </p>
			<p> Total: {order.total} </p>
			<p> Articulos: </p>
			{/* <p>

                {/* //no me anda me da error de key pero viene desde el cart como hago??// 
				{order.items.map((item) => (
					<div key={item.id}>
						<p> nombre:{item.name} </p>
						<p> Cantidad: {item.quantity} </p>
						<p> Precio: {item.precio} </p>
					</div>
				))}
			</p> */}
		</div>
	);
};

export default CheckoutPage;
