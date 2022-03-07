import React from "react";
import "./ItemCounter.css";

const ItemCounter = ({ count, setCount }) => {
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
			<div className="contador">
				<button onClick={() => restar((prev) => prev - 1)} className="pushButton">
					{" "}
					-
				</button>
				<p>{count}</p>
				<button onClick={() => contar((prev) => prev + 1)} className="pushButton">
					{" "}
					+
				</button>
			</div>
		</div>
	);
};
export default ItemCounter;