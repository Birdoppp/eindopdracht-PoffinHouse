import React from "react";
import './SortButton.css'
export default function SortButton({ sortOrder, toggleSortingOrder }) {
    return (
        <button className="sort-button" onClick={toggleSortingOrder}>
            Sort by number{sortOrder === 'asc' ? '↓' : '↑'}
        </button>
    );
}