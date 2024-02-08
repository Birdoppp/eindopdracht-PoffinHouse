import React from 'react';

export function InputField({name, type}) {
    return (
        <>
            <label htmlFor={name}>{name}</label>
            <input type={type} name={name} id={name}></input>
        </>
    )
}
