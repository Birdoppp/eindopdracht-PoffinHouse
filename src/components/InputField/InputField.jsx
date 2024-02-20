// InputField.jsx
import React from 'react';
import './InputField.css';

function InputField({ name, type, label, value, handleChange }) {
    // const handleChange = (e) => {
    //     onChange(e.target.value);
    // };

    return (
        <>
            <label htmlFor={`${name}-field`}>{label}</label>
            <input
                name={`${name}-field`}
                id={`${name}-field`}
                type={type}
                value={value}
                onChange={handleChange}
            />
        </>
    );
}

export default InputField;