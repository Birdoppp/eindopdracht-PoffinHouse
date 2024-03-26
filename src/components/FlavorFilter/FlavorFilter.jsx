import './FlavorFilter.css'
import React from "react";

export default function FlavorFilter({ selectedButton, handleButtonClick, filterDisabled, handleDeselectAll}) {
    return (
        <div className="flavor-filter">
            <button className={`spicy-button ${selectedButton === '1' ? 'selected' : ''}`} onClick={() => handleButtonClick('1')} disabled={filterDisabled}>Spicy</button>
            <button className={`dry-button ${selectedButton === '2' ? 'selected' : ''}`} onClick={() => handleButtonClick('2')} disabled={filterDisabled}>Dry</button>
            <button className={`sweet-button ${selectedButton === '3' ? 'selected' : ''}`} onClick={() => handleButtonClick('3')} disabled={filterDisabled}>Sweet</button>
            <button className={`bitter-button ${selectedButton === '4' ? 'selected' : ''}`} onClick={() => handleButtonClick('4')} disabled={filterDisabled}>Bitter</button>
            <button className={`sour-button ${selectedButton === '5' ? 'selected' : ''}`} onClick={() => handleButtonClick('5')} disabled={filterDisabled} id="sour-button">Sour</button>
            <button className={`show-all-button ${selectedButton === 'All'? 'selected' : ''}`} onClick={handleDeselectAll}>Show All</button>
        </div>
    );
}