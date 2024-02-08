import React from 'react';
import {InputField} from "../InputField/InputField.jsx";
import {natures} from "../../constants/constants.jsx";
import {Dropdown} from "./../Dropdown/Dropdown.jsx";
import pixelball from './../../assets/assorted-collection/poke-ball-pixel-nbg.png'

export function TeamForm() {

    return (
        // input 6x , dropdown voor nature
        <>
            <div className="individualPokemon">

            <img className="pixelball" src={pixelball} alt="Pokeball"/>

            <InputField
                name="firstPokemon" type="text"/>
            <Dropdown
                name="firstNature"
                optionsArray={natures}
            />
            </div>
            <div className="individualPokemon">

                <img className="pixelball" src={pixelball} alt="Pokeball"/>

                <InputField
                    name="secondPokemon" type="text"/>
                <Dropdown
                    name="secondNature"
                    optionsArray={natures}
                />
            </div>
            <div className="individualPokemon">

                <img className="pixelball" src={pixelball} alt="Pokeball"/>

                <InputField
                    name="thirdPokemon" type="text"/>
                <Dropdown
                    name="thirdNature"
                    optionsArray={natures}
                />
            </div>
            <div className="individualPokemon">

                <img className="pixelball" src={pixelball} alt="Pokeball"/>

                <InputField
                    name="fourthPokemon" type="text"/>
                <Dropdown
                    name="fourthNature"
                    optionsArray={natures}
                />
            </div>
            <div className="individualPokemon">

                <img className="pixelball" src={pixelball} alt="Pokeball"/>

                <InputField
                    name="fifthPokemon" type="text"/>
                <Dropdown
                    name="fifthNature"
                    optionsArray={natures}
                />
            </div>
            <div className="individualPokemon">

                <img className="pixelball" src={pixelball} alt="Pokeball"/>

                <InputField
                    name="sixthPokemon" type="text"/>
                <Dropdown
                    name="sixthNature"
                    optionsArray={natures}
                />
            </div>

            <InputField
                name="secondPokemon" type="text"/>
            <Dropdown
            name="secondNature"
            optionsArray={natures}
        />
        </>
    );
}
