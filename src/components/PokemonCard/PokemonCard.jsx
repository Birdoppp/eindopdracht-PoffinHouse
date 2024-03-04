import React from 'react';
import './PokemonCard.css'
import pixelball from './../../assets/assorted-collection/small-pixelball.png'

function PokemonCard({index, name, nature}) {
    return (
        <section id={index} className="pokemon-card">
            <div className="pokemon-info" >
                <img className="small-pixelball" src={pixelball} alt="small-pixelball"/>
                <p className="name"> {name}</p>
                <p className="nature">{nature}</p>
            </div>
        </section>
    );
}

export default PokemonCard;