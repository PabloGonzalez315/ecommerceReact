import React  from "react";
import Select from "react-select";
import { useState } from "react";


const options = [
    { value: "40", label: "40" },
    { value: "41", label: "41" },
    { value: "42", label: "42" },
    { value: "43", label: "43" },
    { value: "44", label: "44" },
    { value: "45", label: "45" },
];

const ItemSizeSelect = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const SelectorChange = (value) => {
        setSelectedOption(value);
        console.log(selectedOption);
        
    };

    return (
        <div className="select">
            <Select options={options} onChange={SelectorChange} value={selectedOption} />
        </div>
    );
};

export default ItemSizeSelect;
