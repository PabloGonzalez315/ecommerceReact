import React from "react";
import { useCart } from "../context/CartContext";
import CartForm from "../components/CartForm/CartForm";
import { Link } from "react-router-dom";
import "../CSS/styles.css";
const CartPage = () => {
	/* const [name, setName] = useState("");
	const [phone, setPhone] = useState(""); */
	

	/* const handleSubmit = async (e) => {
		e.preventDefault();
		if (!name || !phone) {
			alert("Por favor llene los campos para finalizar");
			return false;
		} */
		
			
			const { cart, removeItem,sumTotal, clearCart } = useCart();
			
			/* const newOrder = {
				buyer: {
					name,
					phone,
				},
				items: cart,
				total: totalPrice(),
			}; */
			
		;

	return (
		<div>
			
			{cart.length === 0 ? (
				<div className="container mt-5">
					<div className="row text-center justify-content-center">
						<h3 className="my-5">
							<strong>No hay productos en tu carrito</strong>
						</h3>
						<h4 className="my-5">¿Qué te parece si agregás algunos?</h4>
						<Link className="btn btn-danger bg-gradient w-25" to="/">
							Ir a comprar
						</Link>
					</div>
				</div>
			) : (
				
			

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
				<div className="BoxCart">
					<button onClick={clearCart} className="bg-gradient btn-danger btn">
						Vaciar Carrito
					</button>
				</div>

				<div className="finalPrice">El total de la compra es: $ {sumTotal()}</div>
				<br />
				<br />
				<CartForm cart={cart} sumTotal={sumTotal()} clearCart={clearCart} />
			</div>
		
		)}
		</div>
	);
};

export default CartPage;
