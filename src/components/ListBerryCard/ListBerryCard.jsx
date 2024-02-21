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
        <ul className="single-berry">
        <li className="list-berry-name">
            {/*img from items sprites*/}
            <button className="list-berry-name-button" onClick={handleClick}>{name} berry</button>
        </li>

            <li>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${name}-berry.png`} alt="berrydex-img"/>
            </li>
        </ul>
    );
};

export default ListBerryCard;
