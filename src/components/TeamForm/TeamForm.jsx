// TeamForm.jsx
import React, { useContext, useState, useEffect } from 'react';
import "./TeamForm.css";
import InputField from "../InputField/InputField.jsx";
import { natures } from "../../constants/constants.jsx";
import { Dropdown } from "./../Dropdown/Dropdown.jsx";
import pixelball from './../../assets/assorted-collection/poke-ball-pixel-nbg.png';
import Button from "../Button/Button.jsx";
import {LocalTeamContext} from "../../context/LocalTeamContext.jsx";

export function TeamForm() {
    const { team, setTeam } = useContext(LocalTeamContext);
    const [formChanged, setFormChanged] = useState(false);

    const handleInputChange = (index, field, value) => {
        const updatedTeam = [...team];
        updatedTeam[index][field] = value;
        setTeam(updatedTeam);
        setFormChanged(true);
    };

    useEffect(() => {
        if (formChanged) {
            // You can add your form submission logic here
            console.log("Form changed:", team);
            setFormChanged(false);
        }
    }, [team, formChanged]);

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('team', "")
        console.log("Form submitted:", team); // You can handle the submission here as well
        if (!localStorage.getItem("team") ){
            localStorage.setItem("team", JSON.stringify(team)) }
    };

    return (
        <>
            <form className="Edit-team-form" onSubmit={(e) => handleSubmit(e)}>
                {team.map((pokemon, index) => (
                    <div className="individualPokemon" key={index}>
                        <img className="pixelball" src={pixelball} alt="Pokeball" />
                        <InputField
                            name={`pokemon-${index}`}
                            type="text"
                            label={`${index + 1}`}
                            value={pokemon.name}
                            onChange={(value) => handleInputChange(index, 'name', value)}
                        />
                        <Dropdown
                            name={`nature-${index}`}
                            label="Nature"
                            value={pokemon.nature}
                            optionsArray={natures}
                            onChange={(value) => handleInputChange(index, 'nature', value)}
                        />
                    </div>
                ))}
                <Button className="team-submit-btn" type="submit">Ready!</Button>
            </form>
        </>
    );
}
