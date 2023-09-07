import "./QueryPokemon.css";
import React, { useState } from "react";
import Button from "../button/Button";

function QueryPokemon({searchItemHandler}) {

    const [query, setQuery] = useState("");

    function onFormSubmit(e) {
        e.preventDefault();
        console.log("I am searching for something!");
        searchItemHandler(query);
    }



    return(
        <article className="query-container">

            <form id="search-form" onSubmit={onFormSubmit}>
                <label
                    htmlFor="query-field"
                >WHO'S YOUR POKEMON?

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



            </form>

            <div id="search-result">

            </div>

        </article>

    );
}

export default QueryPokemon;