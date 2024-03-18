import './Preferences.css'
import React, {useEffect, useState} from "react";
import {natures} from "../../constants/constants.jsx";
import NaturesTable from "../../components/NaturesTable/NaturesTable.jsx";

function Preferences() {
    // const [natureClicked,toggleNatureClicked] = useState(false)
    const [selectedNature, setSelectedNature] = useState("")
    const [dislikedFlavor, setDislikedFlavor] = useState("");
    const [favoriteFlavor, setFavoriteFlavor] = useState("");
    const [noPreference, toggleNoPreference] = useState(false)

    const handleFlavorClick = (index) => {
        setSelectedNature(natures[index].name);
        setDislikedFlavor(natures[index].disliked_flavor);
        setFavoriteFlavor(natures[index].favorite_flavor);
    };
    useEffect(() => {
        if (favoriteFlavor === "—") {
            toggleNoPreference(true);
        } else {
            toggleNoPreference(false);
        }
    }, [favoriteFlavor]);

    return (
        <>
            <section>
                All Pokémon have poke-food preferences based on their Nature. The nature can be found in the summary of your pokemon. For example in the Diamond and Pearl gameplay the summary will look like this:
                {/*Add photo of the Pokemon summary*/}
                This Pokémon nature reads Hasty! Try clicking on Hasty in the Nature table, and find what berries Empoleon prefers to eat in the BerryDex on the left side of your screen.
                Besides the preferences, the stats of a Pokemon are also influenced based on their Nature. While here in the PoffinHouse we focus less on the battle ability of our pokemon, it is still good information to have when we want to get to know our pokemon better.
                 find here today are all about berries, how we make the best poffins and their effect on Pokémon and usability in Poké-contests. Unlock secrets about a special evolutions You will find the berries in the BerryDex on the left of your screen.Here at the PoffinHouse we learn how to best feed our Pokémon!
                The topics you will find here today are all about berries, how we make the best poffins and their effect on Pokémon and usability in Poké-contests. Unlock secrets about a special evolutions You will find the berries in the BerryDex on the left of your screen.</section>
        <div className="preference-wrapper">
            {selectedNature && (
                <div className="preferences-tab-text">
                    <h3>{selectedNature}</h3>
                    {!noPreference && (
                        <div>
                            <h5>Favorite flavor:</h5>
                            <p>{favoriteFlavor}</p>
                            <h5>Disliked flavor:</h5>
                            <p>{dislikedFlavor}</p>
                        </div>
                    )}
                    {noPreference && (
                        <div>
                            <p>This Nature<br/> has no <br/> Preference</p>
                        </div>
                    )}
                </div>
            )}
            <section className="preferences-tab">
                <NaturesTable className="preferences-tab" natures={natures} onFlavorClick={handleFlavorClick}/>
            </section>
        </div>
        </>
    );
}

export default Preferences;
