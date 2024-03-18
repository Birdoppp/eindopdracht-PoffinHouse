import './BerryBar.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import ListBerryCard from "../ListBerryCard/ListBerryCard.jsx";
import BerryDexCard from "../BerryDexCard/BerryDexCard.jsx";
import { berryID } from "../../constants/constants.jsx";

export default function BerryBar({ isOpen }) {
    const [berries, setBerries] = useState([]);
    const [selectedBerry, setSelectedBerry] = useState({ name: "" });
    const [selectedFlavor, setSelectedFlavor] = useState('');
    const [selectedButton, setSelectedButton] = useState('');
    const [filteredBerries, setFilteredBerries] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [searchQuery, setSearchQuery] = useState('');
    const [filterDisabled, setFilterDisabled] = useState(false);
    const [searchDisabled, setSearchDisabled] = useState(false);

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

    // FilterTool for berries by flavor
    const fetchBerriesByFlavor = async (flavorName) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/berry-flavor/${flavorName}/`);
            setFilteredBerries(response.data.berries);
        } catch (error) {
            console.error('Error fetching berries by flavor:', error);
        }
    };

    // handleClick for flavor-buttons
    const handleButtonClick = (flavorName) => {
        setSelectedButton(flavorName);
        setSelectedFlavor(flavorName);
        void fetchBerriesByFlavor(flavorName);
        setSearchDisabled(true); // Disable search bar when filter button is clicked
    };

    // Disable flavor-buttons if search input is active
    useEffect(() => {
        if (searchQuery.length === 0) {
            setFilterDisabled(false);
        } else {
            setFilterDisabled(true);
        }
    }, [searchQuery]);

    // Filter berries by search query
    const filteredBySearch = berries.filter(berry =>
        berry.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle for Show all button
    const handleDeselectAll = () => {
        setSelectedButton("")
        setFilteredBerries("");
        setSearchDisabled(false);
    };

    // Toggle sorting order
    const toggleSortingOrder = () => {
        setSortOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc');
    };


    // Sort berries by ID based on the current sorting order
    const sortedBerries = () => {
        const targetBerries = filteredBerries || filteredBySearch;
        return targetBerries.slice().sort((a, b) => {
            const berryA = berryID.find(berry => berry.name === (a.berry ? a.berry.name : a.name));
            const berryB = berryID.find(berry => berry.name === (b.berry ? b.berry.name : b.name));
            const orderFactor = sortOrder === 'asc' ? 1 : -1;
            return orderFactor * (berryA.id - berryB.id);
        });
    };

    return (
        <div className={`aside ${isOpen ? "aside--isOpen" : "aside--isClosed"}`}>
            <div className="berry-bar">
                <div className="filter-tool">
                    <button className={`spicy-button ${selectedButton === '1' ? 'selected' : ''}`} onClick={() => handleButtonClick('1')} disabled={filterDisabled}>Spicy</button>
                    <button className={`dry-button ${selectedButton === '2' ? 'selected' : ''}`} onClick={() => handleButtonClick('2')} disabled={filterDisabled}>Dry</button>
                    <button className={`sweet-button ${selectedButton === '3' ? 'selected' : ''}`} onClick={() => handleButtonClick('3')} disabled={filterDisabled}>Sweet</button>
                    <button className={`bitter-button ${selectedButton === '4' ? 'selected' : ''}`} onClick={() => handleButtonClick('4')} disabled={filterDisabled}>Bitter</button>
                    <button className={`sour-button ${selectedButton === '5' ? 'selected' : ''}`} onClick={() => handleButtonClick('5')} disabled={filterDisabled}>Sour</button>
                    {filteredBerries && <button className="show-all-button" onClick={handleDeselectAll}>Show All</button>}
                    <button className="sort-button" onClick={toggleSortingOrder}>Sort by <br/> berry number</button>

                            <input
                                className="search-bar"
                                type="text"
                                placeholder={searchDisabled ? 'Please select Show All' : 'Search berries...'}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                disabled={searchDisabled}
                            />

                        {searchQuery && (
                            <button className="clear-search-button" onClick={() => setSearchQuery("")}>
                                Clear
                            </button>
                        )}

                </div>
                <div className="berry-tool">
                    <ul className="berry-list">
                        {searchQuery && <div className="search-message"> Showing results for <strong>{searchQuery} </strong>  </div>}
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
                <footer className="berry-dex-footer"> For the flavor-potency of All berries in one list &nbsp; click&nbsp; <a href="https://bulbapedia.bulbagarden.net/wiki/Flavor" target="_blank" > Here </a>! </footer>
            </div>
        </div>
    );
}
