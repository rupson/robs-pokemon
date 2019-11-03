import React from "react";
import "./App.css";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";

// const GET_POKEMON_INFO = gql`
//     {
//         pokemons(first: 300) {
//             id
//             number
//             name
//             image
//             evolutions {
//                 id
//                 number
//                 name
//                 image
//             }
//         }
//     }
// `;

const GET_SNORLAX = gql`
    {
        pokemon(name: "snorlax") {
            id
            name
            image
            classification
            evolutions {
                id
                number
                name
                image
            }
            attacks {
                special {
                    name
                    type
                    damage
                }
                fast {
                    name
                    type
                    damage
                }
            }
        }
    }
`;

function App() {
    const { data, loading, error } = useQuery(GET_SNORLAX);

    return (
        <div className="App">
            {loading && (
                <div style={{ fontSize: "48px", textAlign: "center" }}>
                    Looking for the best pokemon...
                </div>
            )}
            {error && <div>Error!</div>}
            {!loading && !error && (
                <>
                    <div>
                        <br />
                        {data &&
                            data.pokemons &&
                            data.pokemons.map((pokemon, index) => (
                                <div key={index}>
                                    <img
                                        src={pokemon.image}
                                        alt={pokemon.name}
                                    />
                                    <div>
                                        <span style={{ fontWeight: "bold" }}>
                                            {pokemon.name}
                                        </span>
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
                                        <hr />
                                    </div>
                                </div>
                            ))}
                        {data && data.pokemon && (
                            <div style={{ textAlign: "center" }}>
                                <h1>Rob's best pokemon</h1>
                                <h2>{data.pokemon.name}</h2>
                                <img
                                    src={data.pokemon.image}
                                    alt={data.pokemon.name}
                                />
                                <h3>{data.pokemon.classification}</h3>
                                <table style={{ margin: "0 auto" }}>
                                    <tr>
                                        <td>
                                            {data &&
                                                data.pokemon.attacks &&
                                                data.pokemon.attacks
                                                    .special && (
                                                    <div>
                                                        <h3>Special Attacks</h3>
                                                        <table
                                                            style={{
                                                                margin: "auto",
                                                            }}
                                                        >
                                                            <tr>
                                                                <td
                                                                    style={{
                                                                        fontWeight:
                                                                            "bold",
                                                                        border:
                                                                            "solid 1px black",
                                                                    }}
                                                                >
                                                                    Name
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        fontWeight:
                                                                            "bold",
                                                                        border:
                                                                            "solid 1px black",
                                                                    }}
                                                                >
                                                                    Type
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        fontWeight:
                                                                            "bold",
                                                                        border:
                                                                            "solid 1px black",
                                                                    }}
                                                                >
                                                                    Damage
                                                                </td>
                                                            </tr>
                                                            {data.pokemon.attacks.special.map(
                                                                (attack) => (
                                                                    <tr>
                                                                        <td
                                                                            style={{
                                                                                border:
                                                                                    "solid 1px black",
                                                                            }}
                                                                        >
                                                                            {
                                                                                attack.name
                                                                            }
                                                                        </td>
                                                                        <td
                                                                            style={{
                                                                                border:
                                                                                    "solid 1px black",
                                                                            }}
                                                                        >
                                                                            {
                                                                                attack.type
                                                                            }
                                                                        </td>
                                                                        <td
                                                                            style={{
                                                                                border:
                                                                                    "solid 1px black",
                                                                            }}
                                                                        >
                                                                            {
                                                                                attack.damage
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                ),
                                                            )}
                                                        </table>
                                                    </div>
                                                )}
                                        </td>
                                        <td>
                                            {data &&
                                                data.pokemon.attacks &&
                                                data.pokemon.attacks.fast && (
                                                    <div>
                                                        <h3>Fast Attacks</h3>
                                                        <table
                                                            style={{
                                                                margin: "auto",
                                                            }}
                                                        >
                                                            <tr>
                                                                <td
                                                                    style={{
                                                                        fontWeight:
                                                                            "bold",
                                                                        border:
                                                                            "solid 1px black",
                                                                    }}
                                                                >
                                                                    Name
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        fontWeight:
                                                                            "bold",
                                                                        border:
                                                                            "solid 1px black",
                                                                    }}
                                                                >
                                                                    Type
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        fontWeight:
                                                                            "bold",
                                                                        border:
                                                                            "solid 1px black",
                                                                    }}
                                                                >
                                                                    Damage
                                                                </td>
                                                            </tr>
                                                            {data.pokemon.attacks.fast.map(
                                                                (attack) => (
                                                                    <tr>
                                                                        <td
                                                                            style={{
                                                                                border:
                                                                                    "solid 1px black",
                                                                            }}
                                                                        >
                                                                            {
                                                                                attack.name
                                                                            }
                                                                        </td>
                                                                        <td
                                                                            style={{
                                                                                border:
                                                                                    "solid 1px black",
                                                                            }}
                                                                        >
                                                                            {
                                                                                attack.type
                                                                            }
                                                                        </td>
                                                                        <td
                                                                            style={{
                                                                                border:
                                                                                    "solid 1px black",
                                                                            }}
                                                                        >
                                                                            {
                                                                                attack.damage
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                ),
                                                            )}
                                                        </table>
                                                    </div>
                                                )}
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        )}
                    </div>
                </>
            )}
            <span>
                View source on{" "}
                <a href="https://github.com/rupson/robs-pokemon">GitHub</a>
            </span>
        </div>
    );
}

export default App;
