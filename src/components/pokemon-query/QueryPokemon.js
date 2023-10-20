import "./QueryPokemon.css";
import React, { useState } from "react";
import Button from "../button/Button";
import PokemonRandom from "../pokemon-random/PokemonRandom";

function QueryPokemon({searchItemHandler}) {

    const [query, setQuery] = useState("");

    function onFormSubmit(e) {
        e.preventDefault();
        console.log("I am searching for something!");
        searchItemHandler(query);
    }


    return(
        <article className="query-container">

            <form
                id="search-form"
                onSubmit={onFormSubmit}>

                <div className="query-container">
                <label
                    htmlFor="query-field"
                >SEARCH FOR POKEMON EVOLUTION

                    <input
                        type="text"
                        name="query"
                        id="query-field"
                        value={query}
                        onChange={(e) => setQuery(e.target.value.toLowerCase())}
                        placeholder="bulbasaur, ivysaur, pikachu ..."
                    />
                </label>
                    <Button
                        type="submit"
                        className="search-button"
                        disabled={!query}
                    >Search me!
                    </Button>

                    <PokemonRandom/>
                </div>
            </form>

            <div id="search-result"></div>
        </article>

    );
}

export default QueryPokemon;