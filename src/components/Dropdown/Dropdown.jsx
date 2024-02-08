import './Dropdown.css';
import React, { useEffect, useState } from 'react';

export function Dropdown({ name, value, optionsArray }) {
    const [useOptions, setUseOptions] = useState([]);

    useEffect(() => {
        if (optionsArray && optionsArray.length > 0) {
            setUseOptions(optionsArray.map(option => option.name));
        }
    }, [optionsArray]);

    return (
        <>
            <label htmlFor={name}>{name}</label>
            <select id={name} value={value}>
                {useOptions.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </>
    );
}
