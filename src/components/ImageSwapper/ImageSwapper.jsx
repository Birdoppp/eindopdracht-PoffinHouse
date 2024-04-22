import './ImageSwapper.css';
import React, { useState, useEffect } from 'react';
import poffinHouse from './../../assets/assorted-collection/poffinhouse-new-gen.jpg';
import poffinHouseNew from './../../assets/assorted-collection/Poffin-house.png';

const ImageSwapper = () => {
    const [isFirstImage, setIsFirstImage] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const id = setInterval(() => {
            setIsFirstImage((prev) => !prev);
        }, 5000);

        setIntervalId(id);

        return () => clearInterval(id);
    }, []);

    const toggleImage = () => {
        setIsFirstImage((prev) => !prev);
        // Clear existing interval and start a new one to show the full 5 seconds
        clearInterval(intervalId);
        const newIntervalId = setInterval(() => {
            setIsFirstImage((prev) => !prev);
        }, 5000);
        setIntervalId(newIntervalId);
    };

    return (
        <div className="image-swapper">
            {isFirstImage ? (
                <img src={poffinHouse} alt="Poffin House,Pokémon Diamond and Pearl, Gen 4" />
            ) : (
                <img src={poffinHouseNew} alt="Poffin House, Brilliant Diamond and Shining Pearl, Gen 8" />
            )}
            <button className="image-swapper-btn" onClick={toggleImage}>Travel trough Time!</button>
        </div>
    );
};

export default ImageSwapper;
