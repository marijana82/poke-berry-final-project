import "./PokemonSearchPage.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PokemonResults from "../../components/pokemon-results/PokemonResults";
import QueryPokemon from "../../components/pokemon-query/QueryPokemon";
import {POKEMON_URL} from "../../constants";
import Header from "../../components/header/Header";

function PokemonSearchPage() {

    const [endpointPoke, setEndpointPoke] = useState(POKEMON_URL);
    const [searchItem, setSearchItem] = useState("");
    const [pokeDetails, setPokeDetails] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {

        async function fetchPokeData() {
            try {
                const result = await axios.get(endpointPoke);
                console.log(result.data.results);
                getPokeDetails(result.data.results);

            } catch (e) {
                console.error(e);
            }
        }

        if(searchItem) {
            fetchPokeData();
        }

        function getPokeDetails(pokemons) {
            pokemons.map((pokemon) => {
                async function pokeDetailsUrl() {
                    try {
                        const response = await axios.get(`${pokemon.url}`);
                        console.log(response.data);
                        setPokeDetails(response.data);
                    } catch (e) {
                        console.error(e);
                    }
                }

                if (pokemon.name === searchItem) {
                    pokeDetailsUrl();

                }
            });
        }

    }, [searchItem]);


    return(
        <>
            <Header/>

                <QueryPokemon
                    searchItemHandler={setSearchItem}
                />

            <div className="container-pokemon-results">
                {Object.keys(pokeDetails).length > 0
                && pokeDetails.name === searchItem ?

                    <article className="berry-result-container">

                        <PokemonResults
                            pokeDetails={pokeDetails}
                        />

                    </article>

                    :

                    <div className="empty-berry-card">
                        <p>Or click <Link to={"/berry-overview-page"}>here</Link> for a full berry list.</p>
                    </div>
                }

            </div>



        </>
    )
}

export default PokemonSearchPage;