import PokemonCard from "../components/PokemonCard/PokemonCard.jsx";

export default function pokemonCards(fakeTeam) {
    // console.log(fakeTeam)
    if (fakeTeam && fakeTeam.length > 0) {
        // console.log("hoi")
        return (
            fakeTeam.map((pokemon, index) => (
                <PokemonCard
                    key={index}
                    name={pokemon.name}
                    nature={pokemon.nature}
                />
            ))
        );
    }
}