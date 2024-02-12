import React from 'react';
import './InputField.css'

function InputField({ name, type, label, value, changeHandler}) {
    return (
        <>
            <label htmlFor={`${name}-field`}>{label}</label>
            <input
                name={`${name}-field`}
                id={`${name}-field`}
                type={type}
                value={value}
                onChange={(e) => changeHandler(e.target.value)}
            />
        </>
    );
}

export default InputField;

// export function InputField({name, type}) {
//     return (
//         <>
//             <label htmlFor={name}>{name}</label>
//             <input type={type} name={name} id={name}></input>
//         </>
//     )
// }
