import './Preferences.css'
import React, {useEffect, useState} from "react";
import {natures} from "../../constants/constants.jsx";
import NaturesTable from "../../components/NaturesTable/NaturesTable.jsx";
import OpeningElement from "../../components/OpeningElement/OpeningElement.jsx";
import gible from "./../../assets/pokemon-assets/gible-eating.gif"
import miloticSprite from "./../../assets/pokemon-assets/milotic-sprite.png"
import feebas from "../../assets/pokemon-assets/feebas-evo.png"
import maxBeauty from "../../assets/pokemon-assets/milotic.png"


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
                <h3> Nature & Preference
                    <img className="gible-img" src={gible} alt="Gible eating a Berry"/>
                </h3>
                <article>
                    Each Pokémon has its own unique Nature that can be found in the Trainer Notes within the Summary
                    section of your Pokédex. This Nature significantly impacts its behavior in battles and its growth as
                    it levels up. Whether your Pikachu is Brave, boosting a higher Attack, your Charizard is Calm,
                    prioritizing high Special Defense over Attack, or your Eevee is Quirky, with a well-balanced
                    profile,
                    each Nature brings a unique set of characteristics and traits to your Pokémon.
                    <br/>
                    The Nature of a Pokémon influences which Flavor they prefer and what Flavor they dislike. The
                    provided Nature Table will give you more insights into the impacted Stats and which choice of Berry
                    will be most useful to your Pokémon.
                </article>
            </section>
            <section className="natures-table-wrapper">
                <NaturesTable
                    selectedNature={selectedNature}
                    dislikedFlavor={dislikedFlavor}
                    favoriteFlavor={favoriteFlavor}
                    noPreference={noPreference}
                    onFlavorClick={handleFlavorClick}
                    natures={natures}/>

                <p> Click <a className="purple-link"
                             href="https://lparchive.org/Pokemon-Platinum-%28by-Crosspeice%29/Update%2038/2-Berry.png"
                             target="_blank"> Here</a> for our recommendations for easy to find Berries per Flavor</p>
                <p> and <a className="purple-link" href="https://bulbapedia.bulbagarden.net/wiki/Nature#List_of_Natures"
                           target="_blank">Here</a> for a less condensed table</p>
            </section>


            <section>
                <h3>Contest Condition dependent Evolution
                    <img className="milotic-sprite" src={miloticSprite} alt="Milotic sprite"/>
                </h3>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <article> After defeating Cynthia (the Champion of Sinnoh) and becoming the "the very best", the next
                    step is to complete the Pokédex by obtaining all Pokémon. This appears to be a challenging feat due
                    to the difficulty of finding the Milotic evolution line.
                    Feebas, the basic Pokémon, is good at hiding and does not appear randomly. It has designated
                    spots.<br/>
                    Each day, six tiles on the lake of Mt. Coronet, change where Feebas can be found with a fishing rod.
                    This can be
                    very confusing because this does not get explained in the game, so we have added a guide below.
                </article>
                <OpeningElement openingText="How to get a Feebas" closingText="Close">
                    <iframe width="560" height="315"
                            src="https://www.youtube-nocookie.com/embed/4rGNv138dkM?si=xGhsJwbBmt8n94D5"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </OpeningElement>
                <article>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    To enhance Feebas's Beauty Condition to the max, you'll need to obtain strong Dry
                    Berries for crafting potent Poffins. As weak Poffin will make your Pokémon reach maximum Sheen and
                    making it to refuse to eat more Poffins. This would prevent you from attaining the necessary maximum
                    Beauty Condition needed. After maxing out Beauty, Feebas has to Level up once more to trigger
                    the long awaited evolution to Milotic!
                </article>
                <div className="feebas-evolution" id="feebas-evolution">
                    <img className="maxBeauty" src={maxBeauty} alt="Milotic w/ Max Beauty"/>
                    <img className="feebas" src={feebas} alt="Feebas Evolution"/>
                </div>
                <article>
                    In later games (after Gen IV), a new way of Evolution is introduced. The second method requires you
                    to Trade your Feebas whist holding a <a className="purple-link"
                                                            href="https://bulbapedia.bulbagarden.net/wiki/Prism_Scale">Prism
                    Scale</a>, evolving him into Milotic.
                </article>
            </section>

        </div>
    );
}

export default Preferences;
