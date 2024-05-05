import './ImageSwapper.css';
import React, {useState, useEffect} from 'react';
import poffinHouse from './../../assets/assorted-collection/poffinhouse-new-gen.jpg';
import poffinHouseNew from './../../assets/assorted-collection/Poffin-house.png';

const ImageSwapper = () => {
    const [isFirstImage, setIsFirstImage] = useState(false);
    const [intervalCount, setIntervalCount] = useState(null);

    useEffect(() => {
        // Interval that switches the image every 5 seconds
        const count = setInterval(() => {
            setIsFirstImage((prev) => !prev);
        }, 5000);

        // Save the interval in the state
        setIntervalCount(count);

        return () => clearInterval(count);
    }, []);

    // Switch between images onClick and reset the interval
    const toggleImage = () => {
        // Switch between the current image
        setIsFirstImage((prev) => !prev);

        // Stop the existing interval and start a new one to show the full 5 seconds
        clearInterval(intervalCount);
        const newIntervalCount = setInterval(() => {
            setIsFirstImage((prev) => !prev);
        }, 5000);
        setIntervalCount(newIntervalCount);
    };

    return (
        <div className="image-swapper">
            <p className="image-swapper-label">Poffin house in-game</p>
            {isFirstImage ? (
                <img src={poffinHouse} alt="Poffin House, Pokémon Diamond and Pearl, Gen 4"/>
            ) : (
                <img src={poffinHouseNew} alt="Poffin House, Brilliant Diamond and Shining Pearl, Gen 8"/>
            )}
            <button className="image-swapper-btn" onClick={toggleImage}>Travel through Time!</button>
        </div>
    );
};

export default ImageSwapper;
