import './ListBerryCard.css'
import React from "react";


const ListBerryCard = ({ name, url, onSelect}) => {
    // console.log(url)
    // Function to handle button click and pass the berry name to the parent component
    const handleClick = () => {
        console.log(`${name} berry selected!`)
        onSelect(name);
    };

    return (
        <li className="single-berry">
            {/*img from items sprites*/}
            <button className="single-berry" onClick={handleClick}>{name} berry</button>
        </li>
    );
};

export default ListBerryCard;
