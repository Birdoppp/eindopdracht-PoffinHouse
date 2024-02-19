// TeamForm.jsx
import React, {useContext, useState} from 'react';
import "./TeamForm.css";
import InputField from "../InputField/InputField.jsx";
import {natures} from "../../constants/constants.jsx";
import {Dropdown} from "./../Dropdown/Dropdown.jsx";
import pixelball from './../../assets/assorted-collection/poke-ball-pixel-nbg.png';
import Button from "../Button/Button.jsx";
import {TeamContext} from "../../context/TeamContext.jsx";

export function TeamForm() {
    const {team, setTeam} = useContext(TeamContext);
    const test = localStorage.getItem('team')
    console.log(JSON.parse(test))
    // Use state for each Pokémon's name and nature
    // const [pokemonNames, setPokemonNames] = useState(JSON.parse(test) || Array(6).fill(""));
    // const [pokemonNatures, setPokemonNatures] = useState(JSON.parse(test) || Array(6).fill(""));

    const [combined, setCombined] = useState(JSON.parse(test) || team);

    // Handle form changes for Pokémon's name
    // const handleNameChange = (index, name) => {
    //     const newPokemonNames = [...pokemonNames];
    //     console.log(index)
    //     newPokemonNames[index] = name;
    //     setPokemonNames(newPokemonNames);
    // };

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

    // const handleChangeTest(e, index){
    //     const inputName = e.target.name
    //     const inputValue = e.target.value
    //
    //     setTeam({
    //         ...team,
    //         [inputName]: inputValue,
    //     })
    // }

    // Handle form changes for Pokémon's nature
    // const handleNatureChange = (index, nature) => {
    //     const newPokemonNatures = [...pokemonNatures];
    //     newPokemonNatures[index] = nature;
    //     setPokemonNatures(newPokemonNatures);
    // };

    // useEffect(() => {
    //     console.log(team)
    //     // Update the team context with the new data whenever names or natures change
    //     // console.log("pokemon names ", pokemonNames)
    //     // console.log("pokemon nature", pokemonNatures)
    //     const updatedTeam = team.map((name, index) => ({
    //         name: name,
    //         nature: team[index]
    //     }));
    //     setTeam(updatedTeam);
    // }, []);

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
        localStorage.setItem("team", JSON.stringify(updatedTeam));
        console.log("Form submitted:", updatedTeam);
    };

    console.log(team)
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