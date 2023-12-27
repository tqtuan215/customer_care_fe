import { useState } from "react";

export default function InputTextSelect({ options, name }) {
    const [inputType, setInputType] = useState('text');
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSelectChange = (event) => {
        setSelectValue(event.target.value);
    };

    const handleToggleClick = () => {
        // Toggle between 'text' and 'select' input types
        setInputType((prevInputType) => (prevInputType === 'text' ? 'select' : 'text'));
    };

    return (
        <div>
            <button onClick={handleToggleClick}>{inputType === 'text' ? `Chon ${name}` : `Nhap ${name}`}</button>

            {inputType === 'text' ? (
                <div>
                    <label>Nhap {name}:</label>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        
                    />
                </div>
            ) : (
                <div>
                    <label>Select {name}:</label>
                    <select value={selectValue} onChange={handleSelectChange}>
                        {options.map(option =>
                            <option key={option.id}>{option.value}</option>
                        )}
                    </select>
                </div>
            )}
        </div>
    )
}