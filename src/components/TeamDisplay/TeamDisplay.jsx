import {Link} from "react-router-dom";
import './TeamDisplay.css'
import PokemonCard from "../PokemonCard/PokemonCard.jsx";
import {useContext, useEffect} from "react";
import {TeamContext} from "../../context/TeamContext.jsx";


export default function TeamDisplay({isOpen}) {

    const { team, setTeam } = useContext(TeamContext);

    useEffect(() => {
        setTeam(JSON.parse(localStorage.getItem("team")));
    }, [])

    return (
        <>
            <div className={`team ${isOpen ? "team--isOpen" : "team--isClosed"}`}>
                {/* Filtering out empty names */}
                {team.filter(pokemon => pokemon.name.trim() !== "").map((pokemon, index) => (
                    <PokemonCard
                        key={index}
                        name={pokemon.name}
                        nature={pokemon.nature}
                    />
                ))}
                <Link to="/edit-team" className="my-team-link">
                    Edit your Team
                </Link>
            </div>

        </>
    );
}

