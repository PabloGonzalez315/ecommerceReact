import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Badge from "react-bootstrap/Badge";
import { HiOutlineShoppingCart } from "react-icons/hi";
import "../../CSS/styles.css";



const CartWidget = () => {
	const { sumQuantity } = useContext(CartContext);

	return (
		<>
			<NavLink to="/cart">
				<span>
					<HiOutlineShoppingCart />
				</span>
			</NavLink>
			{sumQuantity() === 0 ? null : (
				<Badge className="badgeCart" bg="dark">
					{sumQuantity()}
				</Badge>
			)}
		</>
	);
};

export default CartWidget;
