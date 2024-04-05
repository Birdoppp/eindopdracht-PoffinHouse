import React from 'react';
import './SearchBar.css'

export default function SearchBar({ searchQuery, setSearchQuery, searchDisabled, clearSearch }) {
    return (
        <div className="search-container">
            <input
                className="search-bar"
                type="text"
                placeholder={searchDisabled ? 'Please select Show All' : 'Search berries...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                disabled={searchDisabled}
            />

                <button className={`clear-search-button ${searchQuery === '' ? 'hidden' : ''}`} onClick={clearSearch}>
                    Clear
                </button>

        </div>
    );
}