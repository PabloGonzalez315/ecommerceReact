import React from "react";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { getFirestore } from "../firebase/index";
import { useNavigate } from "react-router-dom";
import CartForm from "../components/CartForm/CartForm";
const CartPage = () => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	let navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!name || !phone) {
			alert("Por favor llene los campos para finalizar");
			return false;
		}
		console.log(newOrder);
		const db = getFirestore();
		db.collection("orders")
			.add(newOrder)
			.then((resp) => {
				console.log("compra realizada con exito", resp.id);
				navigate(`/Checkout/${resp.id}`);
			})
			.catch((err) => console.log("error al realizar la compra", err));
	};

	const { cart, addItem, removeItem, removeFromCart, totalPrice, sumTotal, clearCart } = useCart();

	const newOrder = {
		buyer: {
			name,
			phone,
		},
		items: cart,
		total: totalPrice(),
	};

	return (
		<div>
			<h1>Carrito</h1>
			{cart.map((compra) => {
				return (
					<div key={compra.Item.id} className="BoxCart">
						<p>Articulo: {compra.Item.nombre}</p>
						<p>Cantidad: {compra.quantity}</p>
						<p>
							Precio: {"$"}
							{compra.Item.precio}
						</p>
						{/*como se hace el ItemSizeSelect?/*
						{/* <p>talle: <ItemSizeSelect /> </p> */}
						<img src={compra.Item.img} alt={compra.Item.nombre} className="ImgCart" />
						<br />
						{/* Eliminar productos del carrito */}
						<button onClick={() => removeItem(compra?.Item.id)} className="pushButton">
							Eliminar Articulo
						</button>
					</div>
				);
			})}
			{/* <CartForm /> */}

			<CartForm cart={cart} sumTotal={sumTotal()} clearCart={clearCart}/>
			</div>
		
	);
};

export default CartPage;
