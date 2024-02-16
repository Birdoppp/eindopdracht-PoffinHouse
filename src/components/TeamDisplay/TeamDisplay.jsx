import {Link, NavLink} from "react-router-dom";
import {fakeTeam} from "../../constants/constants.jsx";
import './TeamDisplay.css'
import PokemonCard from "../PokemonCard/PokemonCard.jsx";
import pokemonCards from './../../helpers/pokemonCards.jsx'
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";

export default function TeamDisplay({isOpen}) {

    const [team, setTeam] = useState([])

    useEffect(() => {
        setTeam(JSON.parse(localStorage.getItem("team")));
    }, [JSON.parse(localStorage.getItem("team"))])
    return (
        <>
            <div className={`team ${isOpen ? "team--isOpen" : "team--isClosed"}`}>
                {pokemonCards(team)}
                <Link to="/edit-team" className="my-team-link">
                    Edit your Team
                </Link>
            </div>

        </>
    );
}

