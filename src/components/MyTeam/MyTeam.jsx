import './MyTeam.css'
import React, {useState} from "react";
let teamButton = ({handleClick, isOpen}) => {


    return (
        <>
            <button onClick={handleClick} className="toggle-team">
                {isOpen ? "My Pokémon" : "My Team"}
            </button>
        </>
    );
};
export default teamButton;

