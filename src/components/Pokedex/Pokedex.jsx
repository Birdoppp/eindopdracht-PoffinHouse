import React, { useState } from 'react';

export const ImageSlider = ({ pokedexImages }) => {
    const [currentIndex, setCurrentIndex] = useState(1);

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
            <button onClick={goToPreviousImage}>&lt;</button>
            <img src={`${pokedexImages[currentIndex].toString()}`} alt={`Image ${currentIndex + 1}`} />
            <button onClick={goToNextImage}>&gt;</button>
        </div>
    );
};

export const PokedexGen4 = () => {
    const pokedexImages = [
        "https://archives.bulbagarden.net/media/upload/4/44/Diamond_summary_1.png",
        "https://archives.bulbagarden.net/media/upload/1/13/Diamond_summary_2.png",
        "https://archives.bulbagarden.net/media/upload/3/3e/Diamond_summary_3.png",
        "https://archives.bulbagarden.net/media/upload/d/dc/Diamond_summary_4.png",
        "https://archives.bulbagarden.net/media/upload/0/03/Diamond_summary_5.png",
        "https://archives.bulbagarden.net/media/upload/0/02/Diamond_summary_6.png",
        "https://archives.bulbagarden.net/media/upload/1/19/Diamond_summary_6_desc.png",
        "https://archives.bulbagarden.net/media/upload/2/2d/Diamond_summary_7.png",
        "https://archives.bulbagarden.net/media/upload/e/ee/Diamond_summary_7_desc.png"

    ];

    return (
        <div>
            <ImageSlider pokedexImages={pokedexImages} />
        </div>
    );
};
