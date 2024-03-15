import React, {useState} from 'react';
import './PokedexImageSlider.css'
import mudkip from './../../assets/pokedex-assets/Emerald_summary_2.png'

export const ImageSlider = ({pokedexImages}) => {
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
            <img src={`${pokedexImages[currentIndex].toString()}`} alt={`Image ${currentIndex + 1}`}/>
            <div className="dex-button-wrapper">
            <button className="image-back-btn" onClick={goToPreviousImage}>&lt;</button>
            <button className="image-next-btn" onClick={goToNextImage}>&gt;</button>
            </div>
        </div>
    );
};

export const PokedexGen4 = () => {
    const gen4Images = [
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
            <ImageSlider pokedexImages={gen4Images}/>
        </div>
    );
};

export const PokedexGen3 = () => {
    const gen3Images = [
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
                <ImageSlider pokedexImages={gen3Images}/>
            </div>
            {/*<img src={mudkip} alt="test"/>*/}
        </>
    );
};

export const PokedexGen = () => {
    const genImages = [
        "https://archives.bulbagarden.net/media/upload/e/ec/Emerald_summary_2.png",
        "https://archives.bulbagarden.net/media/upload/c/c5/FR_summary_2.png",
        "https://archives.bulbagarden.net/media/upload/c/ca/FR_summary_3.png",
        "https://archives.bulbagarden.net/media/upload/b/b5/FR_summary_3_desc.png"
    ]
    return (
        <div>
            <ImageSlider pokedexImages={genImages}/>
        </div>
    );
};

