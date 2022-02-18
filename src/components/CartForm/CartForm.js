import React from "react";
import { useState } from "react";

const CartForm = () => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(name, phone);
	}
	return (
		<div>
			<h2>Introduzca sus datos:</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Nombre:</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Escriba su nombre"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<label htmlFor="phone">Teléfono:</label>
				<input
					type="number"
					id="phone"
					name="phone"
					placeholder="Escriba su nombre"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
				/>
				<input type="submit" value="Finalizar Compra" />
			</form>
		</div>
	);
};

export default CartForm;
