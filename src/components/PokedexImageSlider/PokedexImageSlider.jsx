import React, {useState} from 'react';
import './PokedexImageSlider.css'

export const PokedexImageSlider = ({pokedexImages}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pokedexImages.length);
        console.log(pokedexImages[currentIndex])
    };

    const goToPreviousImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pokedexImages.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="image-slider">
            <img className="dex-display" src={`${pokedexImages[currentIndex]}`} alt={`Image ${currentIndex + 1}`}/>
            <div className="dex-button-wrapper">
                <button className="image-back-btn" onClick={goToPreviousImage}>&lt;</button>
                <button className="image-next-btn" onClick={goToNextImage}>&gt;</button>
            </div>
        </div>
    );
};
