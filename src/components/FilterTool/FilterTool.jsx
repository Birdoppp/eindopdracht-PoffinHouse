import React, { useState } from 'react';
import axios from 'axios';
import ListBerryCard from './../ListBerryCard/ListBerryCard.jsx';

function BerryFilter() {
    const [berries, setBerries] = useState([]);
    const [selectedFlavor, setSelectedFlavor] = useState('');

    const fetchBerriesByFlavor = async (flavorName) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/berry-flavor/${flavorName}/`);
            setBerries(response.data.berries);
        } catch (error) {
            console.error('Error fetching berries by flavor:', error);
        }
    };

    const handleButtonClick = (flavorName) => {
        setSelectedFlavor(flavorName);
      void fetchBerriesByFlavor(flavorName);
    };

    return (
        <div>
            <button onClick={() => handleButtonClick('spicy')}>Spicy</button>
            <button onClick={() => handleButtonClick('dry')}>Dry</button>
            <button onClick={() => handleButtonClick('sweet')}>Sweet</button>
            <button onClick={() => handleButtonClick('bitter')}>Bitter</button>
            <button onClick={() => handleButtonClick('sour')}>Sour</button>

            <div className="berry-list">
                {berries.map((berry, index) => (
                    <ListBerryCard key={index} name={berry.berry.name} url={berry.berry.url} />
                ))}
            </div>
        </div>
    );
}

export default BerryFilter;