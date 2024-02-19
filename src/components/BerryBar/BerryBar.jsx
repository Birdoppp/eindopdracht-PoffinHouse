import './BerryBar.css'
import axios from "axios";
import React, {useEffect, useState} from "react";
import ListBerryCard from "../ListBerryCard/ListBerryCard.jsx";
import BerryDexCard from "../BerryDexCard/BerryDexCard.jsx";


export function BerryBar({isOpen}) {
    const [berries, setBerries] = useState([]);

    useEffect(() => {
        async function fetchBerry() {
            try {
                const response = await axios.get("https://pokeapi.co/api/v2/berry/?offset=0&limit=64")
                setBerries(response.data.results)
                console.log("response", response.data.results)
            } catch (e) {
                console.error(e);
            }
        }

        void fetchBerry()
    }, []);

    useEffect(() => {
        console.log("berries", berries)
    }, [berries]);

    return (
        <div className={`aside ${isOpen ? "aside--isOpen" : "aside--isClosed"}`}>
            <div className="berry-tool">
                <div className="filter-tool">

                </div>
                <div className="berry-display">
                    <ul className="berry-list">
                        {berries && berries.map((berry, index) => (
                            <ListBerryCard
                                key={index}
                                name={berry.name}
                                url={berry.url}
                                id={berry.name}
                            />))}
                    </ul>

                    <section className="berry-dex">
                     {/*    dex-card,
                    with number, name, picture, description*/}
                    </section>
                </div>

            </div>
        </div>
    );
}