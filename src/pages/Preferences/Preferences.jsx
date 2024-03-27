import './Preferences.css'
import React, {useEffect, useState} from "react";
import {natures} from "../../constants/constants.jsx";
import NaturesTable from "../../components/NaturesTable/NaturesTable.jsx";
import {EmpoleonDex} from "../../components/PokedexImageSlider/PokedexImageSlider.jsx";


function Preferences() {
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
        <div className="preference-page-wrapper">
            <section>
                Each Pokémon has its own unique nature, influencing how it behaves in battle and how it grows as it
                levels up. Whether your Pikachu is bashful, your Charizard is adamant, or your Eevee is quirky, each
                nature brings its own set of characteristics and traits to the table.
            </section>
            <section>
                <NaturesTable
                    selectedNature={selectedNature}
                    dislikedFlavor={dislikedFlavor}
                    favoriteFlavor={favoriteFlavor}
                    noPreference={noPreference}
                    onFlavorClick={handleFlavorClick}
                    natures={natures}/>

            </section>
            <section>
                <EmpoleonDex/>
            </section>
            <section>
                <p> Click <a
                    href="https://lparchive.org/Pokemon-Platinum-%28by-Crosspeice%29/Update%2038/2-Berry.png"
                    target="_blank"> Here</a> for our recommendations per flavor</p>
            </section>
            <section>
                All Pokémon have poke-food preferences based on their Nature. The nature can be found in the summary of
                your pokemon. For example in the Diamond and Pearl gameplay the summary will look like this:
                {/*Add photo of the Pokemon summary*/}
                This Pokémon nature reads Hasty! Try clicking on Hasty in the Nature table, and find what berries
                Empoleon prefers to eat in the BerryDex on the left side of your screen.
                Besides the preferences, the stats of a Pokemon are also influenced based on their Nature. While here in
                the PoffinHouse we focus less on the battle ability of our pokemon, it is still good information to have
                when we want to get to know our pokemon better.
                find here today are all about berries, how we make the best poffins and their effect on Pokémon and
                usability in Poké-contests. Unlock secrets about a special evolutions You will find the berries in the
                BerryDex on the left of your screen.Here at the PoffinHouse we learn how to best feed our Pokémon!
                The topics you will find here today are all about berries, how we make the best poffins and their effect
                on Pokémon and usability in Poké-contests. Unlock secrets about a special evolutions You will find the
                berries in the BerryDex on the left of your screen.
            </section>
        </div>
    );
}

export default Preferences;
