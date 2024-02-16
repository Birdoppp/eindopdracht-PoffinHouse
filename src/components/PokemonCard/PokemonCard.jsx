import React from 'react';
import {natures} from "../../constants/constants.jsx";
import './PokemonCard.css'
import pixelball from './../../assets/assorted-collection/small-pixelball.png'

function PokemonCard({index, name, nature}) {
    return (
        <section id={index} className="pokemon-card">
            <div className="text-wrapper" >
                <img className="small-pixelball" src={pixelball} alt="bal"/>
                <p>{name}</p>
                <p>{nature}</p>
            </div>
        </section>
    );
}

export default PokemonCard;