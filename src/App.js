import React from "react";
import "./App.css";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";

const GET_POKEMON_INFO = gql`
    {
        pokemons(first: 150) {
            id
            number
            name
            image
            evolutions {
                id
                number
                name
                image
            }
        }
    }
`;

function App() {
    const { data, loading, error } = useQuery(GET_POKEMON_INFO);

    return (
        <>
            {loading && <div>Loading...</div>}
            {error && <div>Error!</div>}
            {!loading && !error && (
                <>
                    <div>
                        {data &&
                            data.pokemons &&
                            data.pokemons.map((pokemon, index) => (
                                <div key={index}>
                                    <img
                                        src={pokemon.image}
                                        alt={pokemon.name}
                                    />
                                    <div>
                                        <span>{pokemon.name}</span>
                                        {pokemon.evolutions &&
                                            pokemon.evolutions.length !== 0 && (
                                                <>
                                                    <p>Evolutions:</p>
                                                    {pokemon.evolutions.map(
                                                        (evolution, index) => (
                                                            <p key={index}>
                                                                {evolution.name}
                                                            </p>
                                                        ),
                                                    )}
                                                </>
                                            )}
                                    </div>
                                </div>
                            ))}
                    </div>
                </>
            )}
        </>
    );
}

export default App;
