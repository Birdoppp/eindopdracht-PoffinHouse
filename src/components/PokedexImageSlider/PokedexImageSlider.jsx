import React, {useState} from 'react';
import './PokedexImageSlider.css'
import {empoleonImages} from "../../constants/dexConstants.jsx";

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
            <img src={`${pokedexImages[currentIndex]}`} alt={`Image ${currentIndex + 1}`}/>
            <div className="dex-button-wrapper">
                <button className="image-back-btn" onClick={goToPreviousImage}>&lt;</button>
                <button className="image-next-btn" onClick={goToNextImage}>&gt;</button>
            </div>
        </div>
    );
};

export const EmpoleonDex = () => {
    return (
        <div>
            <PokedexImageSlider pokedexImages={empoleonImages}/>
        </div>
    );
};

export const MudkipDex = () => {
    const mudkipImages = [
        "https://archives.bulbagarden.net/media/upload/9/9a/Emerald_summary_1.png",
        "https://archives.bulbagarden.net/media/upload/e/ec/Emerald_summary_2.png",
        "https://archives.bulbagarden.net/media/upload/9/98/Emerald_summary_3.png",
        "https://archives.bulbagarden.net/media/upload/8/81/Emerald_summary_3_desc.png",
        "https://archives.bulbagarden.net/media/upload/4/47/Emerald_summary_4.png",
        "https://archives.bulbagarden.net/media/upload/2/2d/Emerald_summary_4_desc.png",

    ];
    return (
        <>
            <div>
                <PokedexImageSlider pokedexImages={mudkipImages}/>
            </div>
        </>
    );
};

export const BulbaDex = () => {
    const bulbaImages = [
        "https://archives.bulbagarden.net/media/upload/a/a0/FR_summary_1.png",
        "https://archives.bulbagarden.net/media/upload/c/c5/FR_summary_2.png",
        "https://archives.bulbagarden.net/media/upload/c/ca/FR_summary_3.png",
        "https://archives.bulbagarden.net/media/upload/b/b5/FR_summary_3_desc.png"
    ];
    return (
        <div>
            <PokedexImageSlider pokedexImages={bulbaImages}/>
        </div>
    );
};
