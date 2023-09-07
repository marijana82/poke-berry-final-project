import "./PokemonSearchPage.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function PokemonSearchPage() {

    const [endpointPoke, setEndpointPoke] = useState("https://pokeapi.co/api/v2/pokemon");
    const [searchItem, setSearchItem] = useState("");
    const [pokeDetails, setPokeDetails] = useState([]);

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
            <div>
                <article className="container-results">
                    HERE COME THE RESULTS
                </article>
            </div>

            <div className="container-empty">
                <p>CLICK ON LINK FOR A FULL BERRY LIST</p>
            </div>

        </>
    )
}

export default PokemonSearchPage;