import React, {useContext, useState} from 'react';
import "./TeamForm.css";
import InputField from "../InputField/InputField.jsx";
import {natures} from "../../constants/constants.jsx";
import {Dropdown} from "./../Dropdown/Dropdown.jsx";
import pixelball from './../../assets/assorted-collection/poke-ball-pixel-nbg.png';
import Button from "../Button/Button.jsx";
import {TeamContext} from "../../context/TeamContext.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";

export function TeamForm() {
    const {team, setTeam} = useContext(TeamContext);
    const {user} = useContext(AuthContext);
    const [combined, setCombined] = useState(JSON.parse(localStorage.getItem(`team-${user.username}`)) || [
        {name: '', nature: ''}, // Initial state for the first Pokémon in form
        {name: '', nature: ''}, // Initial state for the second Pokémon in form
        {name: '', nature: ''}, // Initial state for the third Pokémon in form
        {name: '', nature: ''}, // Initial state for the fourth Pokémon in from
        {name: '', nature: ''}, // Initial state for the fifth Pokémon in from
        {name: '', nature: ''}])// Initial state for the sixth Pokémon in from

    const [charCounts, setCharCounts] = useState(Array(combined.length).fill(0));
    const handleNameChange = (index, value) => {
        const updatedTeam = [...combined];
        updatedTeam[index].name = value;
        setCombined(updatedTeam);
        // Update character count for the input field
        const counts = [...charCounts];
        counts[index] = value.length;
        setCharCounts(counts);
    };

    const handleNatureChange = (index, value) => {
        const updatedTeam = [...combined];
        updatedTeam[index].nature = value;
        setCombined(updatedTeam);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedTeam = combined.map((pokemon) => ({
            name: pokemon.name,
            nature: pokemon.nature
        }));
        setTeam(updatedTeam);
        // Update the local storage with the updated team data
        localStorage.setItem(`team-${user.username}`, JSON.stringify(updatedTeam));
        // console.log("Form submitted:", updatedTeam);
    };

    return (
        <>
            <form className="Edit-team-form" onSubmit={handleSubmit}>
                {Object.keys(combined).length > 0 && combined.map((pokemon, index) => (
                    <div className="individual-pokemon-wrapper" key={index}>
                        <div className="individual-pokemon" key={index}>
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
                            />
                        </div>
                        {charCounts[index] === 12 &&
                            <div className="char-limit-message">Maximum character limit reached</div>}
                    </div>
                ))}
                <Button className="team-submit-btn" type="submit">Ready!</Button>
            </form>
        </>
    );
}
