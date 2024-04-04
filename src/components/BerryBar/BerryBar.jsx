import './BerryBar.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import ListBerryCard from "../ListBerryCard/ListBerryCard.jsx";
import BerryDexCard from "../BerryDexCard/BerryDexCard.jsx";
import {berryID} from "../../constants/constants.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import FlavorFilter from "../FlavorFilter/FlavorFilter.jsx";
import SortButton from "../SortButton/SortButton.jsx";

export default function BerryBar({isOpen}) {
    const [berries, setBerries] = useState([]);
    const [selectedBerry, setSelectedBerry] = useState({name: ""});
    const [selectedFlavor, setSelectedFlavor] = useState('');
    const [selectedButton, setSelectedButton] = useState('All');
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
        // Toggle selection state
        if (selectedButton === flavorName) {
            setSelectedButton("All"); // Deselect the button
            setFilteredBerries(null); // Clear filtered berries
            setSearchDisabled(false); // Enable search bar
        } else {
            setSelectedButton(flavorName); // Select the button
            setSelectedFlavor(flavorName);
            void fetchBerriesByFlavor(flavorName);
            setSearchDisabled(true); // Disable search bar when filter button is clicked
        }
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
        setSelectedButton("All")
        setFilteredBerries("");
        setSearchDisabled(false);
        setSearchQuery("");
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
                    <FlavorFilter
                        selectedButton={selectedButton}
                        handleButtonClick={handleButtonClick}
                        filterDisabled={filterDisabled}
                        handleDeselectAll={handleDeselectAll}
                    />
                    <SortButton sortOrder={sortOrder} toggleSortingOrder={toggleSortingOrder}/>

                    <SearchBar
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        searchDisabled={searchDisabled}
                        clearSearch={() => setSearchQuery("")}
                    />

                </div>
                <div className="berry-tool">
                    <ul className="berry-list">
                        {searchQuery &&
                            <div className="search-message"> Showing results for <strong> {searchQuery} </strong>
                            </div>}
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
                        {selectedBerry && <BerryDexCard selectedBerry={selectedBerry}/>}
                    </section>
                </div>
                <footer className="berry-dex-footer"><p> For the flavor-potency of All berries in one
                    list &nbsp; click&nbsp; <a href="https://bulbapedia.bulbagarden.net/wiki/Flavor"
                                               target="_blank"> Here </a>!</p>

                </footer>
            </div>
        </div>
    );
}
