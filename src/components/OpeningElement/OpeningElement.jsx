import React, { useState } from 'react';
import './OpeningElement.css';

const OpeningElement = ({ children, openingText, closingText, className }) => {
    const [open, toggleOpen] = useState(false);

    const handleClick = () => {
        toggleOpen(!open);
    };

    return (
        <div className={`opening-container ${className} ${open ? 'open' : 'closed'}`}>
            <button className="opening-button" onClick={handleClick}>
                {open ? closingText : openingText}
            </button>
            {open && children}
        </div>
    );
};

export default OpeningElement;
