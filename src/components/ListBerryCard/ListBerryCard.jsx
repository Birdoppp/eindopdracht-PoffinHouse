import './ListBerryCard.css'
import React from "react";

const ListBerryCard = ({name, id, url, onSelect}) => {
    // Function to handle button click and pass the berry name to the parent component
    const handleClick = () => {
        console.log(`${name} berry selected!`)
        onSelect(name);
    };

    return (
        // will get reversed to place the scrollbar on the left
        <ul className="single-berry" onClick={handleClick}>
            <li className="list-berry-name">
                {/*img from items sprites*/}
                <button className="list-berry-name-button">{name} berry</button>
            </li>
            <li>
                <div className="vertical-line"></div>
            </li>
            <li>
                <img className="list-berry-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${name}-berry.png`}
                     alt="berrydex-img"/>
            </li>
            <li>
                <p className="list-berry-id">{id}</p>
            </li>
        </ul>
    );
};

export default ListBerryCard;
