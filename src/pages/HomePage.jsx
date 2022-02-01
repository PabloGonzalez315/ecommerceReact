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
            {/* <p>nombre: {nombre}</p>
            <p>apellido: {apellido}</p>
            <p>email: {email}</p>
            <p>password: {password}</p>
            <p>direccion: {direccion}</p>
            <button onClick={goToProducts}>Ir a productos</button> */}

            <h1>Home</h1>
            <button onClick={goToProducts}>Ir a la pagina de Productos </button>
        </div>
    );
};

export default HomePage;
