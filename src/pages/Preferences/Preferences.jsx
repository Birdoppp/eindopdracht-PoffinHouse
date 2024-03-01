import './Preferences.css'
import React, {useState} from "react";
import {natures} from "../../constants/constants.jsx";
import NaturesTable from "../../components/NaturesTable/NaturesTable.jsx";

function Preferences() {
    // const [natureClicked,toggleNatureClicked] = useState(false)
    const [selectedNature, setSelectedNature] = useState("")
    const [dislikedFlavor, setDislikedFlavor] = useState("");
    const [favoriteFlavor, setFavoriteFlavor] = useState("");

    const handleFlavorClick = (index) => {
        setSelectedNature(natures[index].name);
        setDislikedFlavor(natures[index].disliked_flavor);
        setFavoriteFlavor(natures[index].favorite_flavor);
    };

    // if (selectedNature.length >0){
    //     toggleNatureClicked(true)
    // }
    return (
        <>
            <section className="preferences-tab">
                <NaturesTable natures={natures} onFlavorClick={handleFlavorClick}/>
                <div className="preferences-tab-text">
                    <h4>{selectedNature}</h4>
                    <p>Favorite flavor: {favoriteFlavor}</p>
                    <p>Disliked flavor: {dislikedFlavor}</p>
                </div>
            </section>
        </>
    );
}

export default Preferences;
