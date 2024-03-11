import { Link } from "react-router-dom";
import './TeamDisplay.css';
import PokemonCard from "../PokemonCard/PokemonCard.jsx";
import { useContext, useEffect } from "react";
import { TeamContext } from "../../context/TeamContext.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";

export default function TeamDisplay({ isOpen }) {
    const {user} =useContext(AuthContext);
    const { team, setTeam } = useContext(TeamContext);

    useEffect(() => {
        setTeam(JSON.parse(localStorage.getItem(`team-${user.username}`)));
    }, []);

    return (
        <div className={`team ${isOpen ? "team--isOpen" : "team--isClosed"}`}>
            {team && team[0].name !== "" ? (
                team.filter(pokemon => pokemon.name.trim() !== "").map((pokemon, index) => (
                    <PokemonCard
                        key={index}
                        name={pokemon.name}
                        nature={pokemon.nature}
                    />
                ))
            ) : (
                <p className="no-team-text"> No Pokémon in team </p>
            )}
            <Link to="/edit-team" className="my-team-link">
                Edit your Team
            </Link>
        </div>
    );
}
