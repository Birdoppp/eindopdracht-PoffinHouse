import PokemonCard from "../components/PokemonCard/PokemonCard.jsx";

export default function fetchPokemon(userTeam) {
    // console.log(userTeam)
    if (userTeam && userTeam.length > 0) {
        // console.log("hoi")
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
}