import React from 'react';
import './InputField.css'

export function InputField({name, type}) {
    return (
        <>
            <label htmlFor={name}>{name}</label>
            <input type={type} name={name} id={name}></input>
        </>
    )
}
