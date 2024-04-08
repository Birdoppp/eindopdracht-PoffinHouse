// InputField.jsx
import React from 'react';
import './InputField.css';

function InputField({ name, type, label, value, handleChange, maxLength}) {

    return (
        <>
            <label htmlFor={`${name}-field`}>{label}</label>
            <input
                name={`${name}-field`}
                id={`${name}-field`}
                type={type}
                value={value}
                maxLength={maxLength}
                onChange={handleChange}
                className="input-field"
            />
        </>
    );
}

export default InputField;