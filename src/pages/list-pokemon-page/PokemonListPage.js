import "./PokemonListPage.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeInfo from "../../components/pokemon-info/PokeInfo";
import Button from "../../components/button/Button";
import PokemonCard from "../../components/card/pokemon-card/PokemonCard";


function PokemonListPage() {
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [endpoint, setEndpoint] = useState('https://pokeapi.co/api/v2/pokemon/?limit=18&offset=18');
    const [nextEndpoint, setNextEndpoint] = useState('');
    const [previousEndpoint, setPreviousEndpoint] = useState('');
    const [pokedex, setPokedex] = useState();


    //function 1: fetching the general pokemon data + previous and next
    async function fetchPokeData() {
        setLoading(true);
        setError(false);

        try {
            const response = await axios.get(endpoint);
            setNextEndpoint(response.data.next);
            setPreviousEndpoint(response.data.previous);
            getPokemon(response.data.results);

        } catch(e) {
            console.error(e);
            setError(true);
        }
    };


    //function 2: fetching data about specific pokemon, by passing response as parameter
    async function getPokemon(response) {
        try {
            response.map(async(poke) => {
                const result = await axios.get(poke.url);
                setPokemonData(statePoke => {
                    //1. save existing array, 2. add new array to it
                    statePoke = [...statePoke, result.data];
                    statePoke.sort((a,b) => a.id > b.id ? 1 : -1);
                    return statePoke;
                });
            })

        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        fetchPokeData();
    }, [endpoint]);

    return(
        <>
            <div className="main-pokemon-list-container">

                <div className="left-content-container">

                    <PokemonCard
                        pokemon={pokemonData}
                        loading={loading}
                        key={pokemonData.id}
                        pokemonClick={poke => setPokedex(poke)}
                    />


                    <div className="button-group-container">
                        { previousEndpoint &&
                            <Button
                                clickHandler={() => {
                                    setPokemonData([])
                                    setEndpoint(previousEndpoint)
                                }}
                            >Previous
                            </Button>
                        }

                        {
                            nextEndpoint &&

                            <Button
                                clickHandler={() => {
                                    setPokemonData([])
                                    setEndpoint(nextEndpoint)
                                }}
                            >Next
                            </Button>
                        }
                    </div>

                </div>
                <div className="right-content-container">
                    <PokeInfo data={pokedex}/>

                </div>
            </div>
        </>
    )
}

export default PokemonListPage;