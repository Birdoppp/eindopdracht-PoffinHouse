import PokemonCard from "../components/PokemonCard/PokemonCard.jsx";

export default function userPokemon(userTeam) {
    // console.log(userTeam)

        return (
            userTeam.map((pokemon, index) => (
                <PokemonCard
                    key={index}
                    name={pokemon.name}
                    nature={pokemon.nature}
                />
            ))
        );
    }
