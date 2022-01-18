import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navContainer">
            <ul>
                <li>Nosotros</li>
                <li>Tienda</li>
                <li>Contacto</li>
                <CartWidget />
            </ul>
        </nav>
    );
}

export default Navbar;
