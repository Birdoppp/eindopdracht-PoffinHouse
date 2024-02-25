import React from 'react';

function Button({ clickHandler, children, type, name, value}) {


    return (
        <button
            onClick={clickHandler}
            type={type}
            name={name}
            value={value}

        >
            {name}
            {children}
        </button>
    );
}

export default Button;