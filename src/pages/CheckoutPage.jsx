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
		<div className="checkOut">
			<h3>Gracias por su comra</h3>
			<p> Detalles de su pedido: </p>
			<p> Nombre: {order.buyer.name} </p>
			<p> Telefono: {order.buyer.phone} </p>
			<p> Total: {order.total} </p>
			<p> Articulos: </p>
			<p>
				{order?.items.map((item) => (
					<div key={item.id}>
						<p> nombre:{item?.Item.nombre} </p>
						<p> Cantidad: {item.quantity} </p>
						<p> Precio: {item?.Item.precio} </p>
						<img src={item?.Item.img} alt={item?.Item.nombre} className="ImgDetail" />
					</div>
				))}
			</p>
		</div>
	);
};

export default CheckoutPage;
