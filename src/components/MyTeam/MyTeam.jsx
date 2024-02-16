// import Dropdown from 'react-bootstrap/Dropdown';
import {Link, NavLink} from "react-router-dom";
import TeamDisplay from "../TeamDisplay/TeamDisplay.jsx";
import './MyTeam.css'
import React, {useState} from "react";
let teamButton = ({handleClick, isOpen}) => {

    // const [isOpen, toggleIsOpen] = useState(true)
    // const handleClickIsOpen = () => toggleIsOpen(prev=>!prev)

    return (
        <>
            <button onClick={handleClick} className="toggle-team">
                {isOpen ? "My Pokémon" : "My Team"}
            </button>
        </>
    );
};
export default teamButton;

