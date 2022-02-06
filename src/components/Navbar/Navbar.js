import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

function Navbar() {
	return (
		<nav className="navContainer">
			<span>
				<Link to="/">MonkeyShoes</Link>
			</span>
			<ul>
				<li>
					<Link to="/"> Home </Link>
				</li>
				<li>
					<Link to="/about"> About </Link>
				</li>
				<li>
					<Link to="/productos"> Products</Link>
				</li>
				<li>
					<Link to="/cart">
						<CartWidget />
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
