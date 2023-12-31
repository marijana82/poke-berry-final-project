import "./PokemonSearchPage.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PokemonResults from "../../components/pokemon-results/PokemonResults";
import QueryPokemon from "../../components/pokemon-query/QueryPokemon";
import {POKEMON_URL} from "../../constants";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";
import SpeechBubble from "../../components/speech-bubble/SpeechBubble";


function PokemonSearchPage() {

    const [endpointPoke, setEndpointPoke] = useState(POKEMON_URL);
    const [searchItem, setSearchItem] = useState("");
    const [pokeDetails, setPokeDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {

        const controller = new AbortController();
        async function fetchPokeData() {
            setLoading(true);
            setError(false);

            try {
                const result = await axios.get(endpointPoke);
                getPokeDetails(result.data.results);

            } catch (e) {
                console.error(e);
                setError(true);
                setLoading(false);
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

        return function cleanup() {
            controller.abort();
        }

    }, [searchItem]);


    return(
        <>
            <Header
                message="Search for Pokemon evolution!"
            />

            <Main>

                <QueryPokemon
                    searchItemHandler={setSearchItem}
                />

                {error && <p>This pokemon does not exist in the database. Try again.</p>}


            <div className="container-pokemon-results">
                {Object.keys(pokeDetails).length > 0
                && pokeDetails.name === searchItem ?

                    <article className="berry-result-container">

                        <PokemonResults
                            pokeDetails={pokeDetails}
                        />

                    </article>

                    :

                    <SpeechBubble
                    >Search for pokemon or click <Link to={"/pokemon-list-page"}>here</Link> for a full pokemon list.
                    </SpeechBubble>


                }

            </div>

            </Main>

            <Footer
                buttonMessage="Back to top"
            />
        </>
    )
}

export default PokemonSearchPage;