import React from "react";
import { useState } from "react";
import "./ItemCounter.css";

const ItemCounter = () => {
    const [count, setCount] = useState(1);
    const contar = () => {
        setCount(count + 1);
    };
    const restar = () => {
        if (count <= 0) {
            return alert("No puedes tener una cantidad negativa");
        }

        setCount(count - 1);
    };

    return (
        <div className="titulo3">
            <h4></h4>
            <div className="contador">
                <button onClick={restar} className="pushButton">
                    -
                </button>
                <p>{count}</p>
                <button onClick={contar} className="pushButton">
                    +
                </button>
            </div>
            <button className="pushButton">Agregar al Carro</button>
        </div>
    );
};

export default ItemCounter;
