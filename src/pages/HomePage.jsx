import React from "react";
import { useNavigate } from "react-router-dom";



/* const { nombre, apellido, email, password, direccion } = UseContext(userContext); */
const HomePage = () => {
    let navigate = useNavigate();
    const goToProducts = () => {
        navigate("/productos");
    };
    return (
        <div className="homeP">
           
            <h1>Home</h1>
            <button onClick={goToProducts} className="pushButton">
                Ir a la pagina de Productos
            </button>
        </div>
    );
};

export default HomePage;
