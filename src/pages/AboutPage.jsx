import React from "react";
/* import { getFirestore } from "../firebase/index";
 */
/* const productos = [
    
        {
            "nombre": "Zapatillas Jordan",
            "precio": 15000,
            "descripcion": "Zapatillas Jordan Air",
            "img": "https://essential.vteximg.com.br/arquivos/ids/446376-1000-1000/316-0006_1.jpg?v=637612784142230000"
        },
        {
            "nombre": "Zapatillas Nike",
            "precio": 11000,
            "descripcion": "Zapatillas Nike",
            "img": "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw6018be7f/products/NI_CU9453-002/NI_CU9453-002-2.JPG"
        },
        {
            "nombre": "Zapatillas Lebron",
            "precio": 18000,
            "descripcion": "descripcion Zapatillas Lebron",
            "img": "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwd8168679/products/NI_BV7427-001/NI_BV7427-001-2.JPG"
        },
        {
            "nombre": "Zapatillas Addidas",
            "precio": 8000,
            "descripcion": "descripcion Zapatillas Addidas",
            "img": "https://essential.vteximg.com.br/arquivos/ids/461203-1000-1000/261-2624_1.jpg?v=637650813161900000"
        },
        {
            "nombre": "Zapatillas Fila",
            "precio": 19000,
            "descripcion": "Zapatillas Fila Axilus Ace",
            "img": "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwf2f438ba/products/FI_F01TN004169-1168/FI_F01TN004169-1168-2.JPG"
        },
        {
            "nombre": "Zapatillas Umbro",
            "precio": 17500,
            "descripcion": "Zapatillas Umbro Street Jogger",
            "img": "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw4bc8817c/products/UB_0S74037-784/UB_0S74037-784-2.JPG"
        },
        {
            "nombre": "Zapatillas Wilson",
            "precio": 22000,
            "descripcion": "Zapatillas Wilson Pro Open",
            "img": "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwfe405d49/products/WL_WRB01336/WL_WRB01336-2.JPG"
        },
        {
            "nombre": "Zapatillas Puma",
            "precio": 13000,
            "descripcion": "Zapatillas Puma R78 Adiprene",
            "img": "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw4644732a/products/PU_381811-40/PU_381811-41-2.JPG"
        }
    ]; */

const AboutPage = () => {
/*     const db = getFirestore();
    const collection = db.collection('productos');

    const creatreProductsFirestone = () => {
        productos.forEach((producto) => {
            collection
                .add(producto)
                .then((resp) => console.log("producto agregado", resp.id))
                .catch((err) => console.log("error", err));

        });
    };
         */
    return (
			<div className="homeP">
				<h1>About</h1>
{/* 				<button onClick={creatreProductsFirestone}>Boton para agregar productos a firestore</button>
 */}			</div>
		);
};


export default AboutPage;
