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
    );
}

export default Preferences;
