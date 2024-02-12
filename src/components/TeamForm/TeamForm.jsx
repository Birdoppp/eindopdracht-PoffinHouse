import React from 'react';
import "./TeamForm.css"
import InputField from "../InputField/InputField.jsx";
import {natures} from "../../constants/constants.jsx";
import {Dropdown} from "./../Dropdown/Dropdown.jsx";
import pixelball from './../../assets/assorted-collection/poke-ball-pixel-nbg.png'
import Button from "../Button/Button.jsx";

export function TeamForm() {

    return (
        // 6x input, 6x dropdown voor nature
        <>
            <form className="Edit-team-form">

                <div className="individualPokemon">
                    <img className="pixelball" src={pixelball} alt="Pokeball" maxLength={10}/>
                    <InputField
                        name="first Pokemon" type="text" label="1"/>
                    <Dropdown
                        name="firstNature"
                        optionsArray={natures}/>
                </div>

                <div className="individualPokemon">
                    <img className="pixelball" src={pixelball} alt="Pokeball"/>
                    <InputField
                        name="second Pokemon" type="text" label="2"/>
                    <Dropdown
                        name="secondNature"
                        optionsArray={natures}/>
                </div>

                <div className="individualPokemon">
                    <img className="pixelball" src={pixelball} alt="Pokeball"/>
                    <InputField
                        name="thirdPokemon" type="text" label="3"/>
                    <Dropdown
                        name="thirdNature"
                        optionsArray={natures}/>
                </div>

                <div className="individualPokemon">
                    <img className="pixelball" src={pixelball} alt="Pokeball"/>
                    <InputField
                        name="fourthPokemon" type="text" label="4"/>
                    <Dropdown
                        name="fourthNature"
                        optionsArray={natures}/>
                </div>

                <div className="individualPokemon">
                    <img className="pixelball" src={pixelball} alt="Pokeball"/>
                    <InputField
                        name="fifthPokemon" type="text" label="5"/>
                    <Dropdown
                        name="fifthNature"
                        optionsArray={natures}/>
                </div>

                <div className="individualPokemon">
                    <img className="pixelball" src={pixelball} alt="Pokeball"/>
                    <InputField
                        name="sixthPokemon" type="text" label="6"/>
                    <Dropdown
                        name="sixthNature"
                        optionsArray={natures}/>
                </div>
            <Button className="team-submit-btn" type="submit"> Ready! </Button>
            </form>
        </>
    );
}
