import './BerryBar.css'
import React, {useEffect, useState} from "react";
import axios from "axios";
import ListBerryCard from "../ListBerryCard/ListBerryCard.jsx";
import BerryDexCard from "../BerryDexCard/BerryDexCard.jsx";

export function BerryBar({isOpen}) {
    const [berries, setBerries] = useState([]);
    const [selectedBerry, setSelectedBerry] = useState({name: ""}); // State to hold the selected berry

    useEffect(() => {
        async function fetchBerry() {
            try {
                const response = await axios.get(
                    "https://pokeapi.co/api/v2/berry/?offset=0&limit=64"
                );
                setBerries(response.data.results);
                // setSelectedBerry(response.data.results[0])
                console.log(response.data.results)
            } catch (e) {
                console.error(e);
            }
        }

        void fetchBerry();
    }, []);

    // Callback function to handle berry selection
    const handleBerrySelect = (berryName) => {
        const selected = berries.find((berry) => berry.name === berryName);
        setSelectedBerry(selected);
    };

    return (
        <div className={`aside ${isOpen ? "aside--isOpen" : "aside--isClosed"}`}>
            <div className="berry-tool">
                <div className="filter-tool"></div>
                <div className="berry-display">
                    <ul className="berry-list">
                        {berries &&
                            berries.map((berry, index) => (
                                <ListBerryCard
                                    key={index}
                                    name={berry.name}
                                    url={berry.url}
                                    onSelect={handleBerrySelect} // Pass the callback function
                                />
                            ))}
                    </ul>

                    <section className="berry-dex">
                        {selectedBerry && <BerryDexCard selectedBerry={selectedBerry}/>}
                    </section>
                </div>
            </div>
        </div>
    );
}
