import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    let navigate = useNavigate();
    const goToProducts = () => {
        navigate("/products");
    }
    return (
        <div>
            <h1>home</h1>
            <button onClick={goToProducts}>Ir a la pagina de Productos </button>
        </div>
    );
};

export default HomePage;
