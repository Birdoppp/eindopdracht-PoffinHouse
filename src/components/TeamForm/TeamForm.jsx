import './TeamForm.css'
import React, {useContext, useState} from 'react';
import InputField from "../InputField/InputField.jsx";
import {Dropdown} from "./../Dropdown/Dropdown.jsx";
import {natures} from "../../constants/constants.jsx";
import pixelball from './../../assets/assorted-collection/poke-ball-pixel-nbg.png';
import {TeamContext} from "../../context/TeamContext.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";
import DeleteConfirmation from "../DeleteConfirmation/DeleteConfirmation.jsx";

export function TeamForm() {
    const {team, setTeam} = useContext(TeamContext);
    const {user} = useContext(AuthContext);
    const [combined, setCombined] = useState(
        JSON.parse(localStorage.getItem(`team-${user.username}`)) || [
            {name: '', nature: ''},
            {name: '', nature: ''},
            {name: '', nature: ''},
            {name: '', nature: ''},
            {name: '', nature: ''},
            {name: '', nature: ''}
        ]
    );

    const [charCounts, setCharCounts] = useState(Array(combined.length).fill(0));
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [confirmIndex, setConfirmIndex] = useState(null); // State to keep track of the index of the Pokémon to be confirmed for deletion

    const handleNameChange = (index, value) => {
        const updatedTeam = [...combined];
        updatedTeam[index].name = value;
        setCombined(updatedTeam);
        const counts = [...charCounts];
        counts[index] = value.length;
        setCharCounts(counts);
    };

    const handleNatureChange = (index, value) => {
        const updatedTeam = [...combined];
        updatedTeam[index].nature = value;
        setCombined(updatedTeam);
    };

    const handleClearPokemon = (index) => {
        if (confirmIndex === index) {
            setConfirmIndex(null);
        } else {
            setConfirmIndex(index);
        }
    };

    const handleConfirmDelete = () => {
        const updatedTeam = [...combined];
        updatedTeam[confirmIndex] = {name: '', nature: ''};
        setCombined(updatedTeam);
        setConfirmIndex(null); // Reset the confirmIndex state
    };

    const handleCancelDelete = () => {
        setConfirmIndex(null); // Reset the confirmIndex state
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedTeam = combined.map((pokemon) => ({
            name: pokemon.name,
            nature: pokemon.nature
        }));
        setTeam(updatedTeam);
        localStorage.setItem(`team-${user.username}`, JSON.stringify(updatedTeam));
    };

    return (
        <>
            <form className="edit-team-form" onSubmit={handleSubmit}>
                {combined.map((pokemon, index) => (
                    <div className="individual-pokemon-wrapper" key={index}>
                        <div className="individual-pokemon">
                            <img className="pixelball" src={pixelball} alt="Pokeball"/>
                            <InputField
                                name={`pokemon-${index}`}
                                type="text"
                                label={`${index + 1}`}
                                value={combined[index].name}
                                handleChange={(e) => handleNameChange(index, e.target.value)}
                                maxLength={12}
                            />
                            <Dropdown
                                name={`nature-${index}`}
                                label="Nature"
                                value={combined[index].nature}
                                optionsArray={natures}
                                onChange={(value) => handleNatureChange(index, value)}
                                isOpen={isDropdownOpen}
                                toggleDropdown={() => setIsDropdownOpen(!isDropdownOpen)}
                            />
                            {combined[index].name !== '' ? ( // Render the "Clear" button only if the Pokémon has input
                                <button
                                    className="X-btn"
                                    type="button"
                                    onClick={() => handleClearPokemon(index)}
                                >
                                    X
                                </button>
                            ) : (
                                <span className="empty-space"></span>
                            )}
                        </div>
                        {confirmIndex === index && (
                            <DeleteConfirmation
                                message="Do you want to delete this Pokémon?"
                                onConfirm={handleConfirmDelete}
                                onCancel={handleCancelDelete}
                            />
                        )}
                        {charCounts[index] === 12 &&
                            <div className="char-limit-message">Maximum character limit reached</div>}
                    </div>
                ))}
                <button className="team-submit-btn" type="submit">Save your Team!</button>
            </form>
        </>
    );
}
