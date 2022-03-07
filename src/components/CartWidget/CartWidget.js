import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Badge from "react-bootstrap/Badge";


const CartWidget = () => {
	const { sumQuantity } = useContext(CartContext);

	return (
		<>
			<NavLink to="/cart">
				<span className="material-icons carritoIcon">shopping_cart</span>
			</NavLink>
			{sumQuantity() === 0 ? null : (
				<Badge className="badgeCart" bg="warning">
					{sumQuantity()}
				</Badge>
			)}
		</>
	);
};

export default CartWidget;
