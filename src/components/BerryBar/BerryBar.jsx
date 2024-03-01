import './BerryBar.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import ListBerryCard from "../ListBerryCard/ListBerryCard.jsx";
import BerryDexCard from "../BerryDexCard/BerryDexCard.jsx";
import { berryID } from "../../constants/constants.jsx";

export default BerryBar;

export function BerryBar({ isOpen }) {
    const [berries, setBerries] = useState([]);
    const [selectedBerry, setSelectedBerry] = useState({ name: "" });
    const [selectedFlavor, setSelectedFlavor] = useState('');
    const [filteredBerries, setFilteredBerries] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [searchQuery, setSearchQuery] = useState('');
    const [filterDisabled, setFilterDisabled] = useState(false);

    useEffect(() => {
        // Check if searchQuery is an empty string
        if (searchQuery.length === 0) {
            // If searchQuery is an empty string, enable the filter buttons
            setFilterDisabled(false);
        } else {
            // If searchQuery is not an empty string, disable the filter buttons
            setFilterDisabled(true);
        }
    }, [searchQuery]);


    // Gets all Berries from API
    useEffect(() => {
        async function fetchBerry() {
            try {
                const response = await axios.get(
                    "https://pokeapi.co/api/v2/berry/?offset=0&limit=64"
                );
                setBerries(response.data.results);
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

    // FilterTool for berries
    const fetchBerriesByFlavor = async (flavorName) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/berry-flavor/${flavorName}/`);
            setFilteredBerries(response.data.berries);
        } catch (error) {
            console.error('Error fetching berries by flavor:', error);
        }
    };

    const handleButtonClick = (flavorName) => {
        setSelectedFlavor(flavorName);
        void fetchBerriesByFlavor(flavorName);
    };

    // Function to deselect filtered berries
    const handleDeselectAll = () => {
        setFilteredBerries(null);
        setFilterDisabled(false); // Enable filter buttons
    };

    // Toggle sorting order
    const toggleSortingOrder = () => {
        setSortOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc');
    };

    // Filter berries by search query
    const filteredBySearch = berries.filter(berry =>
        berry.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort berries by ID based on the current sorting order
    const sortedBerries = () => {
        const targetBerries = filteredBerries || filteredBySearch;
        return targetBerries.slice().sort((a, b) => {
            const berryA = berryID.find(item => item.name === (a.berry ? a.berry.name : a.name));
            const berryB = berryID.find(item => item.name === (b.berry ? b.berry.name : b.name));
            const orderFactor = sortOrder === 'asc' ? 1 : -1;
            return orderFactor * (berryA.id - berryB.id);
        });
    };



    return (
        <div className={`aside ${isOpen ? "aside--isOpen" : "aside--isClosed"}`}>
            <div className="berry-bar">
                <div className="filter-tool">
                    <button className="spicy-button" onClick={() => handleButtonClick('1')} disabled={filterDisabled}>Spicy</button>
                    <button className="dry-button" onClick={() => handleButtonClick('2')} disabled={filterDisabled}>Dry</button>
                    <button className="sweet-button" onClick={() => handleButtonClick('3')} disabled={filterDisabled}>Sweet</button>
                    <button className="bitter-button" onClick={() => handleButtonClick('4')} disabled={filterDisabled}>Bitter</button>
                    <button className="sour-button" onClick={() => handleButtonClick('5')} disabled={filterDisabled}>Sour</button>
                    {filteredBerries && <button className="reset-button" onClick={handleDeselectAll}>Show All</button>}
                    <button className="sort-button" onClick={toggleSortingOrder}>Sort by <br/> berry number</button>
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search berries..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                            <button className="clear-search-button" onClick={() => setSearchQuery("")}>
                                Clear
                            </button>
                        )}
                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                        {searchQuery && <div className="search-message">Showing results for "{searchQuery}"</div>}
                    </div>
                </div>
                <div className="berry-tool">
                    <ul className="berry-list">
                        {sortedBerries().map((sorted, index) => (
                            <ListBerryCard
                                key={index}
                                name={filteredBerries ? sorted.berry.name : sorted.name}
                                id={filteredBerries ? berryID.find(item => item.name === sorted.berry.name).id : berryID.find(item => item.name === sorted.name).id}
                                url={filteredBerries ? sorted.berry.url : sorted.url}
                                onSelect={handleBerrySelect}
                            />
                        ))}
                    </ul>
                    <section className="berry-display">
                        {selectedBerry && <BerryDexCard selectedBerry={selectedBerry} />}
                    </section>
                </div>
                <footer className="berry-dex-footer"> For the flavor-potency of All berries in one list &nbsp; click&nbsp;<a href="https://bulbapedia.bulbagarden.net/wiki/Flavor" target="_blank" rel="noreferrer"> Here </a>! </footer>
            </div>
        </div>
    );
}
