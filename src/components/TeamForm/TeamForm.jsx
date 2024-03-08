import React, {useContext, useState} from 'react';
import "./TeamForm.css";
import InputField from "../InputField/InputField.jsx";
import {natures} from "../../constants/constants.jsx";
import {Dropdown} from "./../Dropdown/Dropdown.jsx";
import pixelball from './../../assets/assorted-collection/poke-ball-pixel-nbg.png';
import Button from "../Button/Button.jsx";
import {TeamContext} from "../../context/TeamContext.jsx";
import authContext, {AuthContext} from "../../context/AuthContext.jsx";

export function TeamForm() {
    const {team, setTeam} = useContext(TeamContext);
    const {user} = useContext(AuthContext);

    const teamList = localStorage.getItem('team')

    const [combined, setCombined] = useState(JSON.parse(teamList) || team);

    const handleNameChange = (index, value) => {
        const updatedTeam = [...combined];
        updatedTeam[index].name = value;
        setCombined(updatedTeam);
    };

    const handleNatureChange = (index, value) => {
        const updatedTeam = [...combined];
        updatedTeam[index].nature = value;
        setCombined(updatedTeam);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Map over the combined state and create a new array with the updated values
        const updatedTeam = combined.map((pokemon) => ({
            name: pokemon.name,
            nature: pokemon.nature
        }));
        // Update the team state with the new array
        setTeam(updatedTeam);
        // Update the local storage with the updated team data
        localStorage.setItem(`team-${user.username}`, JSON.stringify(updatedTeam));
        console.log("Form submitted:", updatedTeam);

    };

    return (
        <>
            <form className="Edit-team-form" onSubmit={handleSubmit}>
                {combined.map((pokemon, index) => (
                    <div className="individualPokemon" key={index}>
                        <img className="pixelball" src={pixelball} alt="Pokeball"/>
                        <InputField
                            name={`pokemon-${index}`}
                            type="text"
                            label={`${index + 1}`}
                            value={combined[index].name}
                            handleChange={(e) => handleNameChange(index, e.target.value)}
                        />
                        <Dropdown
                            name={`nature-${index}`}
                            label="Nature"
                            value={combined[index].nature}
                            optionsArray={natures}
                            onChange={(value) => handleNatureChange(index, value)}
                        />
                    </div>
                ))}
                <Button className="team-submit-btn" type="submit">Ready!</Button>
            </form>
        </>
    );
}